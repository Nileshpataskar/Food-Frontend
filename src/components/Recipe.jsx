import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import user1 from "../image/user1.png";
import {
  ArrowDownToLine,
  Bookmark,
  Camera,
  Forward,
  MoreHorizontal,
  Printer,
  Salad,
  ShoppingBasket,
  Watch,
} from "lucide-react";

const Recipe = () => {

  const navigate = useNavigate(); // Use useNavigate to navigate between routes


  
  const location = useLocation();
  const recipe = location.state?.recipe || null;

  const [serves, setServes] = useState(1); // State for the number of serves

  if (!recipe) {
    return <div>No recipe data found.</div>;
  }

  const handleIncrementServes = () => {
    setServes(serves + 1);
  };

  const handleDecrementServes = () => {
    if (serves > 1) {
      setServes(serves - 1);
    }
  };

  return (
    <div>
       <div className="flex flex-row justify-between h-14 items-center pl-3 pr-3 bg-[#F5CE35] font-cabin">
        <p onClick={() => navigate(-1)}>{"< "}PREV</p> {/* Use navigate to go back */}
        <p onClick={() => navigate(1)}>NEXT {" >"}</p> {/* Use navigate to go forward */}
      </div>

      <div className="ml-4 mr-4 sm:pl-16 sm:pr-16">
        <p className="text-[#1769c2] mt-2 font-normal font-cabin">
          {recipe.mealType.join(", ")}
        </p>
        <h1 className="text-3xl font-semibold font-cabin">{recipe.label}</h1>

        <hr className="border-dashed border-[#757575] mt-5 mb-5" />

        <div className="md:w-[60%]">
          <div className="box-border flex items-center justify-between pl-2 pr-2">
            <div className="flex items-center gap-5 rounded-full">
              <img src={user1} alt="" width={50} className="rounded-full" />

              <div className="flex flex-col">
                <p className="font-medium">Submitted by</p>
                <p className="font-medium text-[#1769c2]">{recipe.source}</p>
              </div>
            </div>
            <MoreHorizontal color="#9c1f1e" />
          </div>

          <div className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
            non. Deleniti in similique dicta, quia cum placeat quisquam ea
            ducimus odio voluptatibus hic eligendi eos nam dolore
            exercitationem, voluptatem vitae?
          </div>

          <div className="flex gap-2 mt-5 mb-5">
            <span className="bg-[#f2f2f2] w-1/4 flex justify-center p-2 box-border text-[#464646]">
              <Bookmark size={30} />
            </span>
            <span className="bg-[#f2f2f2] w-1/4 flex justify-center p-2 box-border  text-[#464646]">
              <ArrowDownToLine size={30} />{" "}
            </span>
            <span className="bg-[#f2f2f2] w-1/4 flex justify-center p-2 box-border  text-[#464646]">
              <Printer size={30} />
            </span>
            <span className="bg-[#f2f2f2] w-1/4 flex justify-center p-2 box-border  text-[#464646]">
              <Forward size={30} />
            </span>
          </div>

          <img
            src={recipe.image}
            alt="img"
            className="md:w-[70%] md:h-[400px] "
          />

          <button className="w-full flex justify-center items-center gap-6 mt-2 mb-2 font-cabin bg-[#f5ce35] box-border p-2">
            <span>
              <Camera size={30} />
            </span>
            <span>I MADE THIS</span>
          </button>

          {/* information */}
          <div className="flex flex-col w-full h-40 pt-3 pl-2 ">
            <div className="flex gap-3">
              <span>
                <Watch />
              </span>
              <span>Ready in : {recipe.totalTime} mins</span>
            </div>
            <div className="flex gap-3">
              <span>
                <ShoppingBasket />
              </span>
              <span>Ingredients: {recipe.ingredients.length} </span>
            </div>

            <div className="flex justify-between gap-3">
              <div className="flex gap-3">
                <span>
                  <Salad />
                </span>
                <span>Serves : </span>
                <span className="box-border pl-3 pr-3 font-semibold border">
                  {serves}
                </span>
              </div>
              <div className="flex gap-5 text-xl">
                <button
                  className="w-5 bg-[#f2f2f2] rounded-sm font-thin"
                  onClick={handleDecrementServes}
                >
                  -
                </button>
                <button
                  className="w-5 bg-[#f2f2f2] rounded-sm font-thin"
                  onClick={handleIncrementServes}
                >
                  +
                </button>
              </div>
            </div>
            <p className="text-blue-500">Nutrition Information</p>
            <hr className="border-dashed bg-[#aba8a8] mt-3 mb-3 " />
          </div>
        </div>
        <div className="flex flex-col gap-10 sm:flex sm:flex-row md:flex md:flex-row">
          <div className="flex flex-col">
            <h2 className="mt-4 mb-4 text-xl font-cabin">Ingredients </h2>
            <ul className="flex flex-col gap-5 ">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex gap-5">
                  <span className="text-sm font-cabin">
                    {ingredient.quantity}
                  </span>
                  <span className="text-sm text-blue-400 font-cabin">{ingredient.food}</span>
                </li>
              ))}
            </ul>
          </div>
         
          <div className="flex flex-col">
            <h2 className="mt-4 mb-4 text-xl font-cabin">Direction </h2>
            <ul className="flex flex-col gap-5 ">
            {recipe.ingredientLines.map((line, index) => (
              <li key={index} className="flex gap-5">
                <span className="text-sm font-cabin">{line}</span>
              </li>
            ))}
            </ul>
          </div>
      
        </div>
      </div>
    </div>
  );
};

export default Recipe;
