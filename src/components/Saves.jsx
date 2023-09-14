import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { PlusCircle, Trash } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import Axios from "axios";

const Saves = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]); // State to store recipes
  const { user, isAuthenticated } = useAuth0(); // Access user and isAuthenticated from Auth0

  useEffect(() => {
    // Define a function to fetch recipes by userID
    const fetchRecipesByUserID = async () => {
      try {
        if (isAuthenticated) {
          const userID = user?.sub; // Use user.sub as the userID
          const response = await Axios.get(
            `https://foodbackend-5bdj.onrender.com/recipes/${userID}`
          ); // Replace with your backend API endpoint
          setRecipes(response.data); // Set the fetched recipes in state
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipesByUserID(); // Call the function to fetch recipes
  }, [isAuthenticated, user?.sub]); // Ensure the effect runs when isAuthenticated or user.sub changes

  const deleteRecipe = async (recipeID) => {
    try {
      const response = await Axios.delete(
        `https://foodbackend-5bdj.onrender.com/deleteitem/${user.sub}/${recipeID}`
      ); // Replace with your backend API endpoint

      if (response.status === 200) {
        // If deletion is successful, remove the recipe from the state
        setRecipes((prevRecipes) =>
          prevRecipes.filter((recipe) => recipe._id !== recipeID)
        );
      }
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  

  const handleCategoryClick = (newCategory, newTitle) => {
    navigate("/ideas", { state: { category: newCategory, title: newTitle } });
  };
  return (
    <>
      <div id="saved-page">
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
          className="box-border flex flex-wrap gap-10 px-6 py-5 bg-gray-200 lg:px-10"
        >
          <div className="flex flex-col items-center justify-center w-full bg-white md:w-[300px] sm:w-[40%] h-96 lg:mr-8">
            <PlusCircle
              id="saved-page-recipes-plus-icon"
              className="text-[#892074] text-2xl cursor-pointer"
              onClick={() => navigate("/")}
            />
            <h3
              onClick={() => navigate("/")}
              className="mt-2 text-xl font-semibold text-[#892074] "
            >
              DISCOVER RECIPES
            </h3>
            <p className="text-[#111]">..... or .....</p>
            <Link
              to="/addRecipe"
              className="text-sm font-semibold text-[#892074] hover:underline"
            >
              Add Your Own Recipe
            </Link>
          </div>
          {recipes.map((recipe) => (
           <div 
           className="relative flex flex-col w-full transition duration-300 ease-in-out bg-white border rounded-lg shadow-md h-96 hover:shadow-xl md:w-[300px] sm:w-[40%]"
           > 
             <Link
             key={recipe._id}
             to={`/recipe/${recipe._id}`} // Use the recipe ID in the pathname
             state={{ recipe }} // Pass the recipe object as state
           >
             <div className="">
               <img src={recipe.image} alt="" className="object-cover w-full h-64 rounded-t-lg md:w-96" />
               
             </div>
             <div className="p-4">
               <h3 className="text-xl font-semibold text-gray-800 truncate">
                 {recipe.label}
               </h3>
               <p className="text-lg text-gray-600">{recipe.source}</p>
               
             </div>
             {/* Add more recipe details here */}
           </Link>
           <button
                 className="absolute text-red-500 cursor-pointer bottom-2 right-2 hover:text-red-700"
                 onClick={() => deleteRecipe(recipe._id)}
               >
                 <Trash size={24} />
               </button> 
           </div>
          //   <Link
          //   key={recipe._id}
          //   to={`/recipe/${recipe._id}`} // Use the recipe ID in the pathname
          //   state={{ recipe }} // Pass the recipe object as state
          //  className="flex flex-col h-96  relative  w-full bg-[#f2f2F2] sm:w-[40%]  md:w-[300px] md:h-96 lg:mr-8"
          //   >
          //     <div className="">
          //       <img
          //         src={recipe.image}
          //         alt=""
          //         className="w-full h-64 md:w-96"
          //       />
          //       <h3 className="mt-2 text-xl font-semibold text-[#111]">
          //         {recipe.label?.length > 12
          //           ? `${recipe.label.substring(0, 20)}...`
          //           : recipe.label}
          //       </h3>
          //       <h3 className="mt-2 text-lg font-semibold text-[#111]">
          //         {recipe.source}
          //       </h3>

          //       <button
          //         className="absolute mt-2 text-red-500 cursor-pointer bottom-4 right-5 hover:text-red-700"
          //         onClick={() => deleteRecipe(recipe._id)}
          //       >
          //         <Trash size={24} />
          //       </button>
          //     </div>
          //     {/* Display recipe details */}
          //     {/* Add more recipe details here */}
          //   </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Saves;
