import { createFileRoute } from "@tanstack/react-router";
import { BattleStand } from "./-components/battle-stand";
import { Button } from "@mui/material";
import { POKEMON_BATTLE_QUERY_KEY } from "~/constants";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createBattle, fetchRandomPokemonPair } from "~/data";
import { toast } from "sonner";
import { AnimatePresence, motion } from "motion/react";
import { backgrounds as backgroundsArray } from "~/lib/backgrounds";
import { getUniqueRandomBackgrounds } from "~/utils";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/(main)/_main/_protected/battle/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [backgrounds, setBackgrounds] = useState<string[]>(
    getUniqueRandomBackgrounds(backgroundsArray, 2)
  );
  const [disableSelection, setDisableSelection] = useState(false);

  const query = useQuery({
    queryKey: [POKEMON_BATTLE_QUERY_KEY],
    queryFn: fetchRandomPokemonPair,
    refetchOnMount: false,
    staleTime: Infinity,
  });

  useEffect(() => {
    console.log("Query data has changed");
  }, query.data);

  const mutation = useMutation({
    mutationKey: ["pokemon-battle"],
    mutationFn: createBattle,
    onMutate: () => {
      setDisableSelection(true);
    },
    onSuccess: () => query.refetch(),
    onError: (e) => toast.error(e.message),
    onSettled: () => {
      setDisableSelection(false);
    },
  });

  useEffect(() => {
    setBackgrounds(getUniqueRandomBackgrounds(backgroundsArray, 2));
  }, query.data);

  const handleWin = (winner: string) => {
    if (!query.data) return;
    const loser = query.data.find(
      (contestant) => contestant.name !== winner
    )?.name;
    if (!loser) return;

    mutation.mutate(
      { winner, loser },
      {
        onSuccess: () => {
          toast.success(`${winner} wins`, { icon: <span>💥</span> });
        },
      }
    );
  };

  return (
    <div className="gap-y-std-sm relative px-std-content pb-std-content h-full overflow-hidden flex flex-col">
      {/* <div className="flex text-center space-x-3 justify-between items-center font-semibold">
        Fight!
      </div> */}
      <div className="flex flex-col gap-y-std-md bg-std-content 2xl:gap-x-std-sm">
        {/* <AnimatePresence mode="wait"> */}
        {query.data?.map((pokemon, index) => (
          <div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            // transition={{ duration: 0.3 }}
            key={pokemon.id}
            className="flex relative"
          >
            {query.data && (
              <BattleStand
                pokemon={pokemon}
                onWin={(winner) => handleWin(winner)}
                onDisableSelection={() => setDisableSelection(true)}
                disabled={
                  disableSelection || mutation.isPending || query.isPending
                }
                background={backgrounds[index]}
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <Button
          onClick={() => {
            query.refetch();
          }}
          className=""
        >
          Skip
        </Button>
      </div>
    </div>
  );
}
