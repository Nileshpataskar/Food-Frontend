import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SearchFooter = () => {
  const [searchedTerm, setSearchedTerm] = useState("");
  const navigate = useNavigate(); // Get the navigate function

  const handleSearch = () => {
    // Use navigate to redirect to the search page with the query parameter
    navigate(`/search?query=${searchedTerm}`);
  };

  return (
    <div className="h-[30vh] bg-[#F2F2F2] flex flex-col items-center gap-4 py-3 box-border">
      <h1 className="text-2xl font-cabin">FIND MORE RECIPES</h1>

      <div class="relative group flex items-center w-[190px] md:w-[500px]">
        <input
          placeholder="I am craving.."
          type="search"
          class="w-full h-10 px-6 py-1 border-2 rounded-3xl outline-none transition duration-300 placeholder-gray-500 bg-gray-100"
          onChange={(e) => {
            setSearchedTerm(e.target.value);
          }}
          value={searchedTerm}
        />
      </div>
      <button
        onClick={handleSearch}
        className="z-0 w-48 focus:outline-none sm:w-60 text-black bg-yellow-400 rounded-lg text-[16px] sm:text-xl px-1 py-2"
      >
        SEARCH
      </button>
    </div>
  );
};

export default SearchFooter;
