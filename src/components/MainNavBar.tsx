import React from "react";
import SearchBar from "./SearchBox";
import pikachuLogo from "../assests/Pikachu.png";
import Image from "next/image";

const NavBar = ({ search, setSearch }: any) => {
  return (
    <div className="w-full h-auto sticky top-0 z-50 bg-slate-900 px-4 py-3">
      <div className="flex flex-col md:grid md:grid-cols-5 items-center gap-3">
        <div className="flex items-center justify-center md:justify-start col-span-2">
          <Image src={pikachuLogo} alt="Pikachu Logo" height={60} width={60} />
          <p className="text-amber-300 text-3xl ml-2">POKEMON</p>
        </div>

        <div className="w-full md:col-span-3 flex justify-center md:justify-start">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
