import React, { useEffect, useState } from "react";
import { SearchIcon, X } from "lucide-react";
import { fetchData } from "../service.js";
import "../css/Search.css";
import { Link } from "react-router-dom";


const Search = () => {
  const [searchedTerm, setSearchedTerm] = useState("Burger");
  const [data, setData] = useState(null);

  const searchRecipe = (searchQuery) => {
    fetchData(searchQuery).then((response) => {
      setData(response);
    });
  };

  useEffect(() => {
    if (searchedTerm) {
      searchRecipe(searchedTerm);
    }
  }, [searchedTerm]);

  const renderRecipeCards = () => {
    if (!data) return null;
    return data.hits.map((item, index) => (
      <Link
        key={index}
        to={`/recipe/${index}`} // Use a simple pathname
        state={{ recipe: item.recipe }} // Pass the recipe object as state
        className="w-full p-4 sm:w-1/3 md:w-1/5 lg:w-1/4 xl:w-1/4"
      >
        <div className="flex sm:h-[410px] flex-row sm:flex-col md:flex-col  md:h-[400px] bg-white md:shadow-lg rounded-lg overflow-hidden">
          <img
            src={item.recipe.image}
            alt={item.recipe.label}
            className="w-24 h-30 sm:w-full sm:h-[300px] md:w-full md:h-[250px]"
          />
          <div className="px-6 py-4">
            <h2 className="font-semibold text-gray-800 md:text-2xl">
              {item.recipe.label}
            </h2>
            <h3 className="text-gray-600 md:text-sm">
              by{" "}
              <span className="md:text-[#892074] font-semibold">
                {item.recipe.source}
              </span>
            </h3>
          </div>

          <div className="justify-between hidden px-6 py-4 sm:flex ">
            <div className="text-yellow-500">
              Rating: {item.recipe.rating || "N/A"}
            </div>
            <div className="text-gray-600">
              Reviews: {item.recipe.reviews || 0}
            </div>
          </div>
        </div>
      </Link>
    ));
  };

  return (
    <div className="relative w-screen">
      <div className="flex flex-col justify-center w-screen text-white bg-black h-28">
        <div className="box-border w-screen h-12 pl-2 pr-2 bg-white md:pl-20 md:pr-20 ">
          <div className="border-b-[4px]  border-[#892074] flex gap-2 w-full justify-around">
            <ul className="box-border flex justify-between w-screen p-1">
              <span className="flex items-center w-full gap-6">
                {" "}
                <li
                  className="text-[#787777]"
                  onClick={() => {
                    searchRecipe(searchedTerm);
                  }}
                >
                  <SearchIcon />
                </li>
                <li className="w-full">
                  <input
                    type="text"
                    placeholder="I want to make"
                    name=""
                    id=""
                    className="text-black inputBar_search md:text-2xl focus:outline-none font-cabin"
                    onChange={(e) => {
                      setSearchedTerm(e.target.value);
                    }}
                    value={searchedTerm}
                  />
                </li>
              </span>
              <span className="flex gap-2">
                <li className="md:text-[#787777] clear ">clear</li>
                <li className="text-[#787777]">
                  <X />
                </li>
              </span>
            </ul>
          </div>
        </div>
      </div>

      <div className="pl-4 pr-4 sm:pl-10 sm:pr-10">
        <div className="w-full h-auto p-6 pl-0 text-2xl font-bold sm:h-1/3 sm:text-4xl">
          {data ? `${data.hits.length} Results` : ""}
        </div>

        <div className="bg-[#f0f0f0] min-h-[70vh] flex flex-wrap justify-center items-start">
          {renderRecipeCards()}
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-pink-600 to-purple-600 h-96"></div>

    </div>
  );
};

export default Search;
