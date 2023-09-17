import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { PlusCircle } from "lucide-react";

const MyBoards = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="saved-page" className="">
        <div className="text-white bg-black botext-[#892074] border-b-6">
          <h2 className="h-10 m-0 text-2xl tracking-wider text-center">
            SAVES
          </h2>
        </div>
        <div className="flex justify-center">
          <div
            id="saved-page-recipes-my-boards"
            className="flex gap-10 md:gap-80 text-xl h-20 items-center font-bold text-black hover:text-[#892074]"
          >
            <NavLink
              to="/saves"
              activeClassName="border-b-4 border-[#892074] text-[#892074]"
              className="text-black text-xl h-20 flex items-center font-bold hover:text-[#892074]"
            >
              RECIPES
            </NavLink>
            <NavLink
              to="/board"
              activeClassName="border-b-4 border-[#892074] text-[#892074]"
              className="text-black text-xl h-20 flex items-center font-bold hover:text-[#892074]"
            >
              MY BOARDS
            </NavLink>
          </div>
        </div>
        <div
          id="saved-page-recipes"
          className="box-border flex flex-wrap px-6 py-5 bg-gray-200 lg:px-10 md:mx-48"
        >
          <div className="flex flex-col items-center justify-center w-full bg-white md:w-[300px] sm:w-[40%] h-96 ">
            <PlusCircle
              id="saved-page-recipes-plus-icon"
              className="text-[#892074] text-2xl cursor-pointer"
              onClick={() => navigate("/")}
            />
            <h3
              onClick={() => navigate("/")}
              className="mt-2 text-xl font-semibold text-[#892074] "
            >
              New Board
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBoards;
