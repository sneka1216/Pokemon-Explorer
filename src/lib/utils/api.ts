export interface PokemonSummary {
  name: string;
  url: string;
}

export interface PokemonDetails {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
}

export async function getPokemonList(limit: number = 20, offset: number = 0) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  if (!res.ok) throw new Error("Failed to fetch Pokémon list");
  const data = await res.json();
  return data.results;
}

export async function getPokemonDetails(id: string): Promise<PokemonDetails> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) throw new Error("Failed to fetch Pokémon details");
  return res.json();
}
