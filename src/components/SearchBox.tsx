import React from "react";

const SearchBar = ({ search, setSearch }: any) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-[300px] h-[30px] text-xs pl-2 bg-slate-100 text-slate-700 outline-none"
      />
    </div>
  );
};

export default SearchBar;
