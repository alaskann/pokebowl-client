import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { POKEAPI_END_POINT, POKEMON_HIGHEST_ID } from "./constants";
import { backgrounds as backgroundsArray } from "./lib/backgrounds";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// export function getRandomUniquePair(
//   min: number,
//   max: number
// ): [number, number] {
//   let num1 = Math.floor(Math.random() * (max - min + 1)) + min;
//   let num2 = Math.floor(Math.random() * (max - min + 1)) + min;

//   while (num1 === num2) {
//     num2 = Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   return [num1, num2];
// }

export function getRandomPokemonPair(): [number, number] {
  let num1 = Math.floor(Math.random() * (POKEMON_HIGHEST_ID - 1)) + 1;
  let num2 = Math.floor(Math.random() * (POKEMON_HIGHEST_ID - 1 + 1)) + 1;

  while (num1 === num2) {
    num2 = Math.floor(Math.random() * (POKEMON_HIGHEST_ID - 1 + 1)) + 1;
  }

  return [num1, num2];
}

export function getRandomPokemonId() {
  return Math.floor(Math.random() * 150) + 1;
}

export function getPokemonEndpoint(pokemon: number | string) {
  return `${POKEAPI_END_POINT}/${pokemon}`;
}

export function getUniqueRandomBackgrounds(
  backgrounds: typeof backgroundsArray,
  count: number
): string[] {
  // NOTE: This utility function was generated using Claude LLM
  // Ensure we have at least two backgrounds to choose from
  if (backgrounds.length < 2) {
    throw new Error("At least two backgrounds are required");
  }

  // Create a copy of the backgrounds array to avoid mutating the original
  const availableBackgrounds = [...backgrounds];

  // Randomly select the first background
  const firstIndex = Math.floor(Math.random() * availableBackgrounds.length);
  const firstBackground = availableBackgrounds.splice(firstIndex, 1)[0];

  // Randomly select the second background from the remaining options
  const secondIndex = Math.floor(Math.random() * availableBackgrounds.length);
  const secondBackground = availableBackgrounds.splice(secondIndex, 1)[0];

  // Return the class names of the two selected backgrounds
  return [
    firstBackground.className as string,
    secondBackground.className as string,
  ];
}
