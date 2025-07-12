import { getPokemonList } from "@/lib/utils/api";
import PokemonListing from "@/components/PokemonListing";

export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = parseInt(searchParams.page || "1", 10);
  const limit = 20;
  const offset = (page - 1) * limit;

  const pokemonList = await getPokemonList(limit, offset);

  return <PokemonListing pokemonList={pokemonList} currentPage={page} />;
}
