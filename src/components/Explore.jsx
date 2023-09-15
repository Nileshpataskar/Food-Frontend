import React from "react";
import { useNavigate } from "react-router-dom";

const Explore = () => {

    const navigate = useNavigate();

    const handleCategoryClick = (newCategory, newTitle) => {
      navigate("/ideas", { state: { category: newCategory, title: newTitle } });
    };
  return (
    <div className="flex flex-col sm:mx-20 my-18 md:mx-48">
      <h1 className="my-10 text-6xl font-bold md:mx-20 font-asap">RECIPES</h1>

      <div className="flex flex-col w-full gap-20 my-10 md:mx-20 md:flex-row">
        <div className="h-96 w-full  md:w-[500px] bg-emerald-400 relative" 
        onClick={() =>
            handleCategoryClick("GUMBO ", " BARBS GUMBO")
          } 
        >
          <img
            src="https://img.sndimg.com:443/food/image/upload/w_483,h_372,fl_progressive,q_80,c_fill/v1/img/recipes/82/28/8/cB14froTlmpDfRF49wmQ_gumbo SITE-3.jpg"
            alt="u"
            className="w-full h-96"
          />
             <h1 className="absolute z-10 h-auto p-5 text-4xl bg-white w-80 bottom-5" >
            BARBS GUMBO <br />
          <span className="text-xl">
            by sidart
            </span>  
        
          </h1>
        
        </div>
        <div className="h-96 w-full  md:w-[500px] bg-emerald-400"
        onClick={() =>
            handleCategoryClick("GUMBO ", " BARBS GUMBO")
          } 
        >
          <img
            src="https://img.sndimg.com:443/food/image/upload/w_483,h_372,fl_progressive,q_80,c_fill/v1/img/recipes/82/28/8/cB14froTlmpDfRF49wmQ_gumbo SITE-3.jpg"
            alt="u"
            className="w-full h-96"
          />
          <h1 className="absolute z-10 h-auto p-5 text-4xl bg-white w-80 bottom-40" >
            BARBS GUMBO <br />
          <span className="text-xl">
            by sidart
            </span>  
        
          </h1>
        
        </div>
      </div>
    </div>
  );
};

export default Explore;
