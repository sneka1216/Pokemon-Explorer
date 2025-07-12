import { getPokemonDetails } from "@/lib/utils/api";
import PokemonSlider from "@/components/PokemonSlider";
import AbilitiesAccordion from "@/components/AbilitiesAccordion";
import BackHomeButton from "@/components/BackHomeButton";

export default async function PokemonDetails({
  params,
}: {
  params: { id: string };
}) {
  const pokemon = await getPokemonDetails(params?.id);

  return (
    <>
      <BackHomeButton />
      <div className="min-h-screen bg-gradient-to-b mt-20 from-white to-slate-100 py-10">
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-xl rounded-xl p-6">
          <PokemonSlider sprites={pokemon?.sprites} />

          <div className="flex flex-col justify-center text-gray-800">
            <h1 className="text-4xl font-bold capitalize mb-4">
              {pokemon.name}
            </h1>
            <p className="mb-2">
              <span className="font-semibold">Height:</span> {pokemon.height}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Weight:</span> {pokemon.weight}
            </p>
            <AbilitiesAccordion
              abilities={(pokemon as any).abilities}
              types={(pokemon as any).types}
              stats={(pokemon as any).stats}
              moves={(pokemon as any).moves}
            />
          </div>
        </div>
      </div>
    </>
  );
}
