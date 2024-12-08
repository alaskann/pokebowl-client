import { z } from "zod";

export type Pokemon = z.infer<typeof pokemonSchema>;

// Generic
const url = z.string().url();
const nameAndUrl = z.object({
  name: z.string(),
  url: url,
});
// Flat
const id = z.number();
// Deep
const ability = z.object({
  name: z.string(),
  url: url,
});
const cries = z.object({
  latest: url,
  legacy: url,
});
const item = nameAndUrl;
const held_items = z
  .object({
    item,
    version_details: z
      .object({
        rarity: z.number(),
        version: nameAndUrl,
      })
      .array(),
  })
  .array();
const form = nameAndUrl;
const type = nameAndUrl;

export const pokemonSchema = z.object({
  // Flat
  id,
  name: z.string(),
  base_experience: z.number(),
  height: z.number(),
  weight: z.number(),
  is_default: z.boolean(),
  location_area_encounters: url,
  order: z.number(),
  // Deep
  abilities: z
    .object({
      slot: z.number(),
      is_hidden: z.boolean(),
      ability,
    })
    .array(),
  cries,
  forms: form.array(),
  types: z
    .object({
      slot: z.number(),
      type,
    })
    .array(),
  held_items,
  past_types: z.unknown(), // type.array(),
  past_abilites: ability.array(), //
  sprites: z.object({
    back_default: z.string().optional(),
    back_shiny: z.string().optional(),
    back_shiny_female: z.string().optional(),
    front_default: z.string().optional(),
    front_female: z.string().optional(),
    front_shiny: z.string().optional(),
    front_shiny_female: z.string().optional(),
  }),
});

export type PokemonBattleStats = z.infer<typeof pokemonBattleStats>;

export const pokemonBattleStats = z.object({
  name: z.string(),
  wins: z.number().int(),
  losses: z.number().int(),
  winLossRatio: z.number(),
});
