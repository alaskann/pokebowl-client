import { z } from "zod";

export type PokemonBattleStats = z.infer<typeof pokemonBattleStats>;

export const pokemonBattleStats = z.object({
  name: z.string(),
  wins: z.number().int(),
  losses: z.number().int(),
  winLossRatio: z.number(),
});
