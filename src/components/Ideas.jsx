import React, { useEffect, useState } from "react";
import { fetchData } from "../service"; // Import your fetchData function

import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const [breakfastRecipes, setBreakfastRecipes] = useState([]);
  //  const [loading, setLoading] = useState(true);

  const location = useLocation();

  const category = location.state.category;
  console.log("category", location.state.category);

  const title = location.state.title;
console.log("title is " + title);
  
  useEffect(() => {
    // Fetch breakfast recipes
    fetchData(category)
      .then((response) => {
        setBreakfastRecipes(response.hits);
      })
      .catch((error) => {
        console.error("Error fetching breakfast recipes:", error);
      });
  }, [category]);

  return (
    <div className="m-2 sm:m-8 sm:my-5 md:m-44 md:my-10 md:w-[50%] sm:mb-28">
      <section className="mb-10 recipe-section">
        <h2 className="mb-4 text-[44px] font-bold font-cabin">
          {title || "New Recipe Ideas"} 
        </h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore qui
          repudiandae quasi cumque rem repellat ratione reprehenderit itaque
          quas, aliquam quia tempore mollitia nisi a repellendus reiciendis
          accusantium ullam totam.
        </p>

        <div className="relative flex flex-col gap-24 mt-10 h-fit md:flex-col md:flex-wrap">
          {breakfastRecipes.map((recipe, index) => (
             <Link
             key={index}
             to={`/recipe/${index}`} // Use a simple pathname
             state={{ recipe: recipe.recipe }} // Pass the recipe object as state
           
              className="relative w-full bg-white rounded-lg shadow-md recipe-card"
            >
              <img
                src={recipe.recipe.image}
                alt={recipe.recipe.label}
                className="object-cover w-full h-[300px] rounded"
              />

              <div className="absolute h-[80%] z-10 bg-white bottom-[-25%] left-[7%] w-[85%] border-b-[#77E2E1] border-b-[6px]  p-6 box-border">
                <h1 className="text-xl md:2xl font-cabin">Recipe</h1>
              <h1 className="mb-2 text-3xl font-normal md:text-5xl font-cabin">{recipe.recipe.label}</h1>
                <p className="mb-6 md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reprehenderit consequatur quidem saepe libero excepturi doloribus minima laudantium deleniti esse. Architecto hic sed nobis inventore facilis repellendus ipsum, quam nesciunt.</p>
              </div>
              
            </Link>
          ))}
        </div>
      </section>

     
    </div>
  );
};

export default Home;
