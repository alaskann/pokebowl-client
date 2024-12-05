import { ButtonBase, Card, Chip } from "@mui/material";
import { Pokemon } from "~/lib/schemas";
import { cn } from "~/utils";

export function BattleStand({
  pokemon,
  className,
}: {
  pokemon: Pokemon;
  className?: string;
}) {
  return (
    <ButtonBase
      className={cn("w-full select-none hover:cursor-pointer", className)}
    >
      <Card className="w-full box-border p-std-sm flex items-stretch">
        <div className="bg-background rounded-md h-full">
          <img src={pokemon.sprites.front_default} className="object-cover" />
        </div>
        <div className="flex flex-col p-std-sm gap-y-2">
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
