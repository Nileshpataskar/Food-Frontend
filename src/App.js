import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Activity from "./components/Activity";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Recipe from "./components/Recipe";
import Home from "./components/Home";
import Ideas from "./components/Ideas";
import MobNavbar from './components/MobNavbar';

const App = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const setSize = () => {
      const isMobile = window.innerWidth < 1100;
      setIsMobile(isMobile);
    };
    setSize();
    window.addEventListener("resize", setSize);
    return () => {
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return (
    <div>
      {isMobile ? <MobNavbar/> : <Navbar/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recipe/:recipeId" element={<Recipe />} />

        <Route path="/ideas" element={<Ideas/>} />


      </Routes>
      <Footer />
    </div>
  );
};

export default App;

