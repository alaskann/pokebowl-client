import { ButtonBase, Card, Chip } from "@mui/material";
import { Pokemon } from "~/lib/schemas";
import { cn } from "~/utils";
import { WinnerOverlay } from "./winner-overlay";
import { useEffect, useState } from "react";
import { ContestantFrame } from "./contestant-frame";

export function BattleStand({
  pokemon,
  disabled,
  background,
  onDisableSelection,
  onWin,
  className,
}: {
  pokemon: Pokemon;
  disabled: boolean;
  background: string;
  onDisableSelection: () => void;
  onWin: (winner: string) => void;
  className?: string;
}) {
  const [showWinnerOverlay, setShowWinnerOverlay] = useState(false);

  const handleInitiateWin = () => {
    setShowWinnerOverlay(true);
    setTimeout(() => {
      onWin(pokemon.name);
    }, 1000);
  };

  return (
    <ButtonBase
      // disabled={disabled}
      className={cn(
        "w-full relative select-none overflow-hidden",
        !disabled ? "hover:cursor-pointer" : null,
        className
      )}
    >
      <WinnerOverlay show={showWinnerOverlay} />
      <Card
        className="w-full box-border p-std-sm flex"
        onClick={() => {
          if (disabled) return;
          onDisableSelection();
          handleInitiateWin();
        }}
      >
        <ContestantFrame background={background}>
          <img src={pokemon.sprites.front_default} className="object-cover" />
        </ContestantFrame>
        <div className="flex flex-col py-std-sm px-std-md gap-y-2">
          <div className="flex">
            <span className="text-2xl uppercase tracking-wide font-semibold">
              {pokemon.name}
            </span>
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
