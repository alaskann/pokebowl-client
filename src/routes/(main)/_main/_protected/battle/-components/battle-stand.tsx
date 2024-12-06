import { ButtonBase, Card, Chip } from "@mui/material";
import { Pokemon } from "~/lib/schemas";
import { cn } from "~/utils";
import { WinnerOverlay } from "./winner-overlay";
import { useState } from "react";
import { ContestantFrame } from "./contestant-frame";

export function BattleStand({
  pokemon,
  onWin,
  background,
  className,
}: {
  pokemon: Pokemon;
  onWin: (winner: string) => void;
  background: string;
  className?: string;
}) {
  console.log("background: " + background);
  const [showWinnerOverlay, setShowWinnerOverlay] = useState(false);

  const handleInitiateWin = () => {
    setShowWinnerOverlay(true);
    setTimeout(() => {
      setShowWinnerOverlay(false);
      onWin(pokemon.name);
    }, 1000);
  };

  return (
    <ButtonBase
      className={cn(
        "w-full select-none hover:cursor-pointer relative",
        className
      )}
    >
      <WinnerOverlay show={showWinnerOverlay} />
      <Card
        className="w-full box-border p-std-sm flex"
        onClick={() => handleInitiateWin()}
      >
        <ContestantFrame background={background}>
          <img src={pokemon.sprites.front_default} className="object-cover" />
        </ContestantFrame>
        <div className="flex p-std-sm gap-y-2">
          <div className="flex">
            <span className="text-2xl">{pokemon.name}</span>
          </div>
          <div className="flex flex-wrap gap-std-sm">
            <Chip
              label={`Base XP ${pokemon.base_experience}`}
              variant="outlined"
            />
            <Chip label={`Height ${pokemon.height} cm`} variant="outlined" />
            <Chip
              label={`Weight ${pokemon.weight / 1000} kg`}
              variant="outlined"
            />
          </div>
        </div>
      </Card>
    </ButtonBase>
  );
}

//mode: "sync"
