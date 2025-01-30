"use client";
import { useState } from "react";
import FilterType from "./FilterType";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import SearchResults from "./SearchResults";

export default function SearchClientWrapper() {
  const [isSearch, setIsSearch] = useState(false);

  const handleClockOnSearch = () => {
    setIsSearch(true);

    setTimeout(() => {
      setIsSearch(false);
    }, 1000);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center gap-5 justify-between mb-10">
        <SearchBar />
        <FilterType />
        <SearchButton onClick={handleClockOnSearch} />
      </div>

      <div className="">
        <SearchResults isSearch={isSearch} />
      </div>
    </>
  );
}
