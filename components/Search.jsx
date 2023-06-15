import { MagnifyingGlass } from "phosphor-react";
import React from "react";

function Search() {
  const [term, setTerm] = React.useState("");

  const searchGoogle = () => {
    const encodedSearchTerm = encodeURIComponent(term);
    const url = `https://www.google.com/search?q=${encodedSearchTerm}`;
    window.location.href = url;
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      searchGoogle();
    }
  };

  return (
    <div className="relative flex justify-center items-center flex-1">
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        type="text"
        className="w-full bg-transparent text-white border border-white pl-4 pr-10 py-2 rounded"
        placeholder="Search"
        onKeyDown={handleSearch}
      />
      <button
        onClick={searchGoogle}
        className="absolute right-0 top-0 bottom-0 mr-2 bg-transparent text-white flex items-center justify-center"
      >
        <MagnifyingGlass className="h-5 w-5" />
      </button>
    </div>
  );
}

export default Search;
