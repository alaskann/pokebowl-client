import { authClient } from "./lib/auth-client";
import { Pokemon, PokemonBattleStats, pokemonSchema } from "./lib/schemas";
import { Battle } from "./lib/types";
import { getPokemonEndpoint, getRandomPokemonPair } from "./utils";

export async function fetchRandomPokemonPair() {
  console.log("fetchrandom called");
  const ids = getRandomPokemonPair();
  const promises = ids.map(async (id) => {
    const res = (await fetch(getPokemonEndpoint(id)).then((res) =>
      res.json()
    )) as Pokemon; // TODO: Finish validation schema
    // const parsedRes = pokemonSchema.parse(res);
    // console.log(parsedRes);
    // return parsedRes;
    return res ?? null;
  });

  return await Promise.all(promises);
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
