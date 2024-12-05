import { Pokemon, pokemonSchema } from "./lib/schemas";
import { getPokemonEndpoint, getRandomPokemonPair } from "./utils";

export async function fetchRandomPokemonPair() {
  console.log("fetchrandom called");
  const ids = getRandomPokemonPair();
  const promises = ids.map(async (id) => {
    const res = (await fetch(getPokemonEndpoint(id)).then((res) =>
      res.json()
    )) as Pokemon;
    // const parsedRes = pokemonSchema.parse(res);
    // console.log(parsedRes);
    // return parsedRes;
    return res ?? null;
  });

  return await Promise.all(promises);
}
