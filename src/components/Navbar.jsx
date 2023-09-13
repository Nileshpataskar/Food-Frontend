import React from "react";
// import "../css/Navbar.css";
import { Bookmark, Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const hoverItems = [
    "Breakfast and brunch",
    "Lunch Recipe",
    "Dinner Recipe",
    "Side Dish Recipe ",
  ];

  const { loginWithRedirect } = useAuth0();

  // const navigate = useNavigate();
  
  // const handleCategoryClick = (newCategory, newTitle) => {
  //   navigate("/ideas", { state: { category: newCategory, title: newTitle } });
  // };

  return (
    <>
      <div className="flex items-center justify-center bg-black sm:w-full ">
        <div className="flex items-center justify-between w-10/12 h-14 md:h-20">
          {/* logo */}
          <Link to="/">
            <h1 className="text-4xl text-amber-50 md:text-6xl font-asap ">
              Food <span className="text-yellow-300"> .</span>
            </h1>
          </Link>

          {/* routes */}
          <div className="res">
            <ul className="flex gap-8 text-2xl text-white font-cabin ">
              <li className="relative group">
                Recipe
                <ul className="absolute left-0 z-20 hidden w-56 mt-2 space-y-2 text-white bg-black group-hover:block">
                  {hoverItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </li>
              <li className="relative group">
                Popular
                <ul className="absolute left-0 z-20 hidden w-56 mt-2 space-y-2 text-white bg-black group-hover:block">
                  {hoverItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </li>
              <li >Meat & Seafood</li>
              <li>Healthy & Diet</li>
              <li>Holidays</li>
              <li>Cuisine</li>
              <li>Seasonal</li>
            </ul>
          </div>

          <div className="flex gap-6">
            <Link to="/search">
              {" "}
              <Search size={32} color="#ffffff" />
            </Link>
            <Bookmark size={32} color="#ffffff" />

            <button onClick={() => loginWithRedirect()}>
              {" "}
              <User size={32} color="#ffffff" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
