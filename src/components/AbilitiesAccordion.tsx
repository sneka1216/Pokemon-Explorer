"use client";

import { useState } from "react";

export default function AbilitiesAccordion({
  abilities,
  types,
  stats,
  moves,
}: {
  abilities: any[];
  types: any[];
  stats: any[];
  moves: any[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center font-semibold text-lg focus:outline-none"
      >
        More Info <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="mt-2 bg-gray-50 p-3 rounded-md border h-40 overflow-y-auto space-y-3">
          {/* Abilities */}
          <div>
            <h3 className="font-semibold">Abilities:</h3>
            <ul className="list-disc list-inside">
              {abilities.map((ab: any, i: number) => (
                <li key={i} className="capitalize">
                  {ab.ability.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Types */}
          <div>
            <h3 className="font-semibold">Types:</h3>
            <div className="flex gap-2 flex-wrap">
              {types.map((t: any, i: number) => (
                <span
                  key={i}
                  className="px-2 py-1 text-sm rounded-full bg-blue-100 text-blue-800 capitalize"
                >
                  {t.type.name}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div>
            <h3 className="font-semibold">Stats:</h3>
            <ul className="grid grid-cols-2 gap-x-6">
              {stats.map((stat: any, i: number) => (
                <li key={i}>
                  <span className="capitalize font-medium">
                    {stat.stat.name}:
                  </span>{" "}
                  {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>

          {/* Moves (first 5) */}
          <div>
            <h3 className="font-semibold">Moves:</h3>
            <ul className="list-disc list-inside">
              {moves.slice(0, 5).map((m: any, i: number) => (
                <li key={i} className="capitalize">
                  {m.move.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
