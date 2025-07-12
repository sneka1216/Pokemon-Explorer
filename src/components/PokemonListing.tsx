"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import NavBar from "./MainNavBar";

export interface PokemonSummary {
  name: string;
  url: string;
}

export default function PokemonListing({
  pokemonList,
  currentPage,
}: {
  pokemonList: PokemonSummary[];
  currentPage: number;
}) {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const filtered = search
    ? pokemonList.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
    : pokemonList;

  return (
    <>
      <NavBar search={search} setSearch={setSearch} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {filtered.map((pokemon, index) => {
          const id = pokemon.url.split("/").filter(Boolean).pop();
          return (
            <Link key={index} href={`/details-page/${id}`}>
              <div className="w-full p-4">
                <div className="w-full h-32 flex items-center justify-center bg-slate-100">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                    alt={pokemon.name}
                    className="h-full object-contain"
                  />
                </div>
                <p className="text-center mt-2 capitalize font-medium">
                  {pokemon.name}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="flex justify-center gap-4 my-6">
        {currentPage > 1 && (
          <Link
            href={`/?page=${currentPage - 1}`}
            className="bg-slate-300 px-4 py-2 rounded"
          >
            Previous
          </Link>
        )}
        {pokemonList.length === 20 && (
          <Link
            href={`/?page=${currentPage + 1}`}
            className="bg-amber-500 text-white px-4 py-2 rounded"
          >
            Load More
          </Link>
        )}
      </div>
    </>
  );
}
