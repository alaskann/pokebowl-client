import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { POKEAPI_END_POINT, POKEMON_HIGHEST_ID } from "./constants";

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
