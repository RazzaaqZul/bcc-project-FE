import React, { useContext, useEffect, useState } from "react";
import { ProductContext, ProductProvider } from "../api/dummy";
import { search } from "../assets";

const Search = () => {
  const context = useContext(ProductContext);

  const [keyword, setKeyword] = useState("");
  const [isOnclick, setIsOnclick] = useState(false);

  useEffect(() => {
    console.log(context.search);
  }, [context.search]);

  return (
    <div className="relative">
      <input
        type="text"
        id="search"
        onChange={(e) => context.setSearch(e.target.value)}
        onFocus={() => setIsOnclick(true)}
        onBlur={() => setIsOnclick(false)}
        placeholder="Cari Bahan Makanan"
        className="bg-green20 rounded-3xl text-[15px] text-green60 font-mulish py-[4px] px-3 border-2 border-green20 focus:border-green60 placeholder:text-green60 placeholder:text-[13px] focus:outline-none font-semibold w-[300px] ... focus:shadow-te-primary focus:outline-non transition duration-300"
      />
      <div className="absolute top-1 right-3">
        {isOnclick ? (
          <img src={search} alt="" className="transition-opacity" />
        ) : (
          <img src={search} alt="" className="duration-500" />
        )}
      </div>
    </div>
  );
};

export default Search;
