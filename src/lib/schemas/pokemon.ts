import { z } from "zod";

export type Pokemon = z.infer<typeof pokemonSchema>;

const nameUrlSchema = z.object({
  name: z.string(),
  url: z.string(),
});

const abilitySchema = z.object({
  ability: nameUrlSchema,
  is_hidden: z.boolean(),
  slot: z.number(),
});

const heldItemsSchema = z.object({
  item: nameUrlSchema,
  version_details: z.array(
    z.object({
      rarity: z.number(),
      version: nameUrlSchema,
    })
  ),
});

const criesSchema = z.object({
  latest: z.string().url(),
  legacy: z.string().url().nullable(),
});

const formSchema = nameUrlSchema;

const gameIndexSchema = z.object({
  game_index: z.number(),
  version: nameUrlSchema,
});

const versionGroupDetailsSchema = z.object({
  level_learned_at: z.number(),
  move_learn_method: nameUrlSchema,
  version_group: nameUrlSchema,
});

const moveSchema = z.object({
  move: nameUrlSchema,
  version_group_details: z.array(versionGroupDetailsSchema),
});

const statsSchema = z.object({
  base_stat: z.number(),
  effort: z.number(),
  stat: nameUrlSchema,
});

const spritesSchema = z
  .object({
    front_default: z.string().url().nullish().optional(),
    front_shiny: z.string().url().nullish().optional(),
    back_default: z.string().url().nullish().optional(),
    back_shiny: z.string().url().nullish().optional(),
    other: z.record(z.unknown()).nullish().optional(),
  })
  .catchall(z.unknown());

const typesSchema = z.object({
  slot: z.number(),
  type: nameUrlSchema,
});

export const pokemonSchema = z.object({
  abilities: z.array(abilitySchema),
  base_experience: z.number(),
  cries: criesSchema,
  forms: z.array(formSchema),
  game_indices: z.array(gameIndexSchema),
  height: z.number(),
  held_items: z.array(heldItemsSchema).optional(),
  id: z.number(),
  is_default: z.boolean(),
  location_area_encounters: z.string().url(),
  moves: z.array(moveSchema),
  name: z.string(),
  order: z.number(),
  species: nameUrlSchema,
  sprites: spritesSchema,
  stats: z.array(statsSchema),
  types: z.array(typesSchema),
  weight: z.number(),
});
//   // Flat
//   id,
//   name: z.string(),
//   base_experience: z.number(),
//   height: z.number(),
//   weight: z.number(),
//   is_default: z.boolean().optional(),
//   location_area_encounters: url.optional(),
//   order: z.number().optional(),
//   // Deep
//   abilities: z // Checked
//     .object({
//       slot: z.number(),
//       is_hidden: z.boolean(),
//       ability,
//     })
//     .array(),
//   cries: cries.optional(),
//   forms: form.array().optional(),
//   types: z
//     .object({
//       slot: z.number(),
//       type,
//     })
//     .array()
//     .optional(),
//   held_items: held_items.optional(),
//   past_types: z.unknown().optional(), // type.array(),
//   past_abilites: ability.array().optional(), //
//   sprites: z
//     .object({
//       back_default: z.string().optional(),
//       back_shiny: z.string().optional(),
//       back_shiny_female: z.string().optional(),
//       front_default: z.string().optional(),
//       front_female: z.string().optional(),
//       front_shiny: z.string().optional(),
//       front_shiny_female: z.string().optional(),
//     })
//     .optional(),
// });

export type PokemonBattleStats = z.infer<typeof pokemonBattleStats>;

export const pokemonBattleStats = z.object({
  name: z.string(),
  wins: z.number().int(),
  losses: z.number().int(),
  winLossRatio: z.number(),
});
