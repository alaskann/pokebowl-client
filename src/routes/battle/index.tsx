import { createFileRoute } from "@tanstack/react-router";
import { BattleStand } from "./-components/battle-stand";
import { Button } from "@mui/material";
import { POKEMON_BATTLE_QUERY_KEY } from "~/constants";
import { useQuery } from "@tanstack/react-query";
import { fetchRandomPokemonPair } from "~/data";

export const Route = createFileRoute("/battle/")({
  component: RouteComponent,
});

function RouteComponent() {
  const query = useQuery({
    queryKey: [POKEMON_BATTLE_QUERY_KEY],
    queryFn: fetchRandomPokemonPair,
    refetchOnMount: false,
    staleTime: Infinity,
  });

  return (
    <div className="gap-y-std-sm relative px-std-content pb-std-content h-full overflow-hidden flex flex-col">
      {/* <div className="flex text-center space-x-3 justify-between items-center">
        <span>Choose</span>
      </div> */}
      <div className="flex-1 flex flex-col gap-y-std-md bg-std-content 2xl:flex-row 2xl:gap-x-std-sm">
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            className="flex-1 flex 2xl:aspect-square"
            key={index}
            onClick={() => query.refetch()}
          >
            {query.data && <BattleStand pokemon={query.data[index]} />}
          </div>
          // <div className="h-1/2 bg-red-300" key={index}>
          //   {query.data && <BattleStand pokemon={query.data[index]} />}
          // </div>
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
