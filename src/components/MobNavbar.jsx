import React, { useState } from "react";
import { Bookmark, Menu, Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const MobNavbar = () => {
  const { loginWithRedirect } = useAuth0();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Mobile Menu Icon */}
      <div className="flex items-center justify-between h-24 bg-black">
        <div className="flex items-center gap-6">
          <Menu
            size={42}
            color="#ffffff"
            onClick={toggleMenu}
            className="cursor-pointer"
          />
          <Link to="/">
            <h1 className="text-6xl text-amber-50 md:text-6xl font-asap">
              Food <span className="text-yellow-300">.</span>
            </h1>
          </Link>
        </div>

        <div className="flex gap-2">
          <Link to="/search">
            <Search size={42} color="#ffffff" />
          </Link>
          <Bookmark size={42} color="#ffffff" />
          <button onClick={() => loginWithRedirect()}>
            <User size={42} color="#ffffff" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleMenu}
          ></div>

          {/* Menu Panel */}
          <div className="fixed left-0 z-50 w-64 bg-black top-24">
            <ul className="py-4 space-y-2">
              <li className="text-xl text-white hover:text-yellow-300 font-cabin">
                <Link to="/recipes">Recipes</Link>
              </li>
              <li className="text-xl text-white hover:text-yellow-300 font-cabin">
                <Link to="/popular">Popular</Link>
              </li>
              <li className="relative group">
                <span className="text-xl text-white cursor-pointer hover:text-yellow-300 font-cabin">
                  Meat & Seafood
                </span>
                <ul className="absolute top-0 hidden px-4 py-2 space-y-2 text-white bg-black left-16 group-hover:block">
                  <li className="font-cabin">
                    <Link to="/beef">Beef</Link>
                  </li>
                  <li className="font-cabin">
                    <Link to="/chicken">Chicken</Link>
                  </li>
                  {/* Add more sub-menu items as needed */}
                </ul>
              </li>
              <li className="relative group">
                <span className="text-xl text-white cursor-pointer hover:text-yellow-300 font-cabin">
                  Health & Diet
                </span>
                <ul className="absolute top-0 hidden px-4 py-2 space-y-2 text-white bg-black left-16 group-hover:block">
                  <li className="font-cabin">
                    <Link to="/vegetarian">Vegetarian</Link>
                  </li>
                  <li className="font-cabin">
                    <Link to="/vegan">Vegan</Link>
                  </li>
                  {/* Add more sub-menu items as needed */}
                </ul>
              </li>
              {/* Add more menu items and submenus as needed */}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobNavbar;
