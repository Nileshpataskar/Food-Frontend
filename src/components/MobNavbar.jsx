import "../css/header.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { navData } from "./navData";
import { Bookmark, Search, Smile, User } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";

const MobNavbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openItems, setOpenItems] = useState({});
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();

  const toggleMobileView = () => {
    setIsMobile(!isMobile);
  };

  const toggleSubMenu = (index) => {
    setOpenItems({
      ...openItems,
      [index]: !openItems[index],
    });
  };

  const handleSubmenuItem = (category, title) => {
    navigate("/ideas", { state: { category, title } });
  };

  const handleDropdownShow = () => {
    setShowDropdown(true);
  };

  const handleDropdownHide = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <div className="header-box">
        <header>
          <div className="links-container">
            <button id="mobile-menu-icon" onClick={toggleMobileView}>
              {isMobile ? <RxCross2 /> : <GiHamburgerMenu />}
            </button>
            <Link to="/" className="links">
              <h1 className="logo font-asap">
                Food<span>.</span>
              </h1>
            </Link>
            <nav id={isMobile ? "main-nav-mobile" : "main-nav"}>
              <ul type="none" className="nav-list font-cabin">
                {navData.map((item, index) => (
                  <li className="nav-list-items" key={index}>
                    <span
                      className="nav-list-item-text"
                      id={openItems[index] ? "open" : null}
                      onMouseOver={() => toggleSubMenu(index)}
                    >
                      {item.menu}
                    </span>
                    <span
                      className="caret"
                      onClick={() => toggleSubMenu(index)}
                    >
                      {openItems[index] ? <BiChevronUp /> : <BiChevronDown />}
                    </span>
                    {openItems[index] ? (
                      <ul type="none" className="dropdown">
                        {item.submenu.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className="dropdown-item"
                            onClick={() =>
                              handleSubmenuItem(subItem, subItem)
                            }
                          >
                            <Link
                              to="/ideas"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              {subItem}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex gap-6 mr-2 md:mr-20 ">
            <Link to="/search">
              <Search size={32} color="#ffffff" />
            </Link>
            
            <Link to="/saves">
              
            <Bookmark size={32} color="#ffffff" />
            </Link>
            

            {isAuthenticated ? (
              <div
                className="relative dropdown-wrapper"
                onMouseEnter={handleDropdownShow}
                onMouseLeave={handleDropdownHide}
              >
                <Smile size={32} color="#ffffff" />
                {showDropdown && (
                  <div className="absolute right-0 mt-0 bg-black r.
                  ounded shadow-md text-white-800 user-dropdown">
                    <Link
                      to="/"
                      className="block px-4 py-2 dropdown-item hover:bg-gray-800"
                      onClick={handleDropdownHide}
                    >
                      Profile
                    </Link>
                    <button
                      className="block px-4 py-2 dropdown-item hover:bg-gray-800"
                      onClick={() => {
                        logout();
                        handleDropdownHide();
                      }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                className="transition-transform transform user-button hover:scale-110"
                onClick={() => loginWithRedirect()}
              >
                <User size={32} color="#ffffff" />
              </button>
            )}
          </div>
        </header>
      </div>
    </>
  );
};

export default MobNavbar;
