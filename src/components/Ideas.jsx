import React, { useEffect, useState } from "react";
// import { fetchData } from "../service"; // Import your fetchData function

import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const [breakfastRecipes, setBreakfastRecipes] = useState([]);
  //  const [loading, setLoading] = useState(true);

  const location = useLocation();

  const category = location.state.category;
  console.log("category", location.state.category);

  const title = location.state.title;
  console.log("title is " + title);

  const fetchData = async (defaultQuery) => {
    try {
      const data = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=62bce0a0&app_key=ff388c0331eb479573c52e7112fa70bc`
      );
      const response = data.json();
      console.log(response);
      return response;
    } catch (err) {
      console.log(err, "Error fetching something went wrong");
      return err;
    }
  };


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
    <div className="m-2 sm:m-8 sm:my-5 md:m-44 md:my-10 md:w-[50%] sm:mb-28 ">
      <section className="mb-36 recipe-section">
        <h2 className="mb-4 text-[44px] font-bold font-cabin">
          {title || "New Recipe Ideas"}
        </h2>

        <p className="text-lg">
        Feeling a little wilted due to summer's hot temps? These cool, crisp, fresh salads are anything but. From leafy greens to hearty grains, these tricked-out salads will toss things up in all the right ways. Get even more inspiration with our favorite unique salad recipes.
        </p>

        <div className="relative flex flex-col mt-10 gap-44 h-fit md:flex-col md:flex-wrap">
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

              <div className="absolute h-[100%] z-10 bg-white bottom-[-38%] sm:bottom-[-25%] left-[7%] w-[85%] border-b-[#77E2E1] border-b-[6px]  p-6 box-border">
                <h1 className="text-xl md:2xl font-cabin">Recipe</h1>
                {/* <h1 className="mb-2 text-3xl font-normal md:text-5xl font-cabin">{recipe.recipe.label}</h1> */}

                <h1 className="mb-2 text-3xl font-normal md:text-5xl font-cabin">
                  {recipe.recipe.label.length > 24
                    ? `${recipe.recipe.label.substring(0, 30)}...`
                    : recipe.recipe.label}
                </h1>

                <p className="mb-6 md:text-lg">
                  “We’ve tried several different recipes and this is the best.
                  Nothing beats homemade pasta! A great recipe.”
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
