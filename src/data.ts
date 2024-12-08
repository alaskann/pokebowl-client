import { PokemonBattleStats, pokemonSchema } from "./lib/schemas/pokemon";
import { Battle } from "./lib/types";
import { getPokemonEndpoint, getRandomPokemonPair } from "./utils";
import { z } from "zod";

export async function fetchRandomPokemonPair() {
  const ids = getRandomPokemonPair();
  const promises = ids.map(async (id) => {
    return await fetch(getPokemonEndpoint(id)).then((res) => res.json());
  });

  try {
    return z.array(pokemonSchema).parse(await Promise.all(promises));
  } catch (error) {
    throw new Error("Data failed schema validation");
  }
}

export async function createBattle(input: Battle) {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/api/battle`,
    {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(input),
    }
  );
  if (!response.ok) {
    throw new Error("Network request failed.");
  }
  return response.json();
}

export async function getWinLossRatios() {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/api/stats`,
    {
      method: "GET",
      credentials: "include",
    }
  );
  if (!response.ok) {
    throw new Error("Network request failed.");
  }
  return (await response.json()) as PokemonBattleStats[];
}
