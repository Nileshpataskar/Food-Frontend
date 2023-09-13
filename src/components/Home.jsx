import React from "react";
import { useNavigate } from "react-router-dom";
// import Ideas from "./Ideas"; // Import the Ideas component

const Home = () => {
  // const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleCategoryClick = (newCategory, newTitle) => {
    navigate("/ideas", { state: { category: newCategory, title: newTitle } });
  };
  return (
    <div className="m-4 sm:m-8 sm:my-5 md:m-30 md:my-10">
      {/* Breakfast Section */}
      <div className="relative">
        <img
          src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/recipes/24/25/3/l3Fx6AnTcGOjhwYNhggo_0S9A9332.jpg"
          alt="grilled chicken"
          loading="eager"
          className="w-full rounded-lg"
        />
        <div className="flex flex-col">
          <h1 className="sm:absolute sm:top-[45%] md:left-32 sm:left-10 text-2xl sm:text-5xl sm:text-white md:text-white text-black font-asap">
            56 GRILLED RECIPE <br /> CHICKEN
          </h1>
          {/* Pass the category prop to Ideas */}
          <button
            onClick={() =>
              handleCategoryClick("grilled chicken", " 56 GRILLED RECIPE")
            } // Pass the category as an argument to a function
            className="w-32 focus:outline-none sm:w-60 text-black bg-yellow-400 rounded-lg text-[16px] sm:text-xl px-1 py-2 sm:px-12 sm:py-4 mr-2 mb-2 mt-2 sm:absolute sm:top-[70%] sm:left-10 md:left-32"
          >
            SEE THEM ALL
          </button>
        </div>
      </div>
      <div className="w-full h-10 mt-10 mb-14 bg-[#f2f2f2]"></div>

      {/* Dessert Section */}
      {/* <div className="bg-pink-500">comments</div> */}

      {/* Craving Section */}
      <div className="mt-5 mb-5">
        <h1 className="my-5 text-2xl font-cabin md:text-4xl">
          WHAT WE'RE CRAVING
        </h1>
        <div className="flex flex-wrap sm:justify-between md:justify-between gap-5 w-[100%] h-full items-center">
          {[
            {
              imgSrc:
                "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_1:1/v1/img/recipes/79/94/4/MDUNtFdSSheVHJJwGTqC_0S9A0331.jpg",
              title: "24 FREEZER-FRIENDLY MEAL",
              category: "chicken",
            },
            {
              imgSrc:
                "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_1:1/v1/img/recipes/22/92/27/kz2OEDD3Su7NHGSwqkJX_0S9A9846.jpg",
              title: "50 LUNCH IDEAS FOR MEAL",
              category: "lunch",
            },
            {
              imgSrc:
                "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_1:1/v1/img/recipes/16/53/87/Z4xnvsOaR6yTYMT7u5LL_corn%20fritters-2.jpg",
              title: "24 BEST CORN RECIPE",
              category: "corn",
            },
          ].map((section, index) => (
            <span
              key={index}
              className="relative"
              onClick={() =>
                handleCategoryClick(section.category, section.title)
              }
            >
              <img
                src={section.imgSrc}
                alt={section.title}
                loading="lazy"
                className="w-full h-full rounded-lg aspect-square md:w-96 sm:w-52 sm:h-auto"
                // onClick={() => handleCategoryClick(                )}
              />
              <h4 className="absolute top-[60%] text-lg md:text-xl lg:text-2xl left-6 font-bold text-white font-cabin overflow-hidden sm:top-[52%] md:top-[60%]">
                Collection
              </h4>
              <h1 className="absolute top-[78%] text-lg md:text-4xl lg:text-3xl left-6 font-bold text-white font-cabin overflow-hidden mt-2 sm:top-[62%] md:top-[70%]">
                {section.title}
              </h1>
            </span>
          ))}
        </div>
      </div>

      {/* explore more */}

      <div className="mt-10 mb-5 ">
        <h1 className="my-5 text-2xl font-cabin md:text-4xl">EXPLORE MORE</h1>

        <div className="flex flex-wrap gap-10 md:gap-8">
          {[
            {
              imgSrc:
                "https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_1280,ar_1:1/foodcom/images/5e1cc137-8dfe-4ab0-89f1-488cf8fd4450.jpg",
              title: "GRILLING & BBQ",
              category: "bbq",
            },
            {
              imgSrc:
                "https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_1280,ar_1:1/foodcom/images/0ba5e633-8a82-4412-9912-3e4b021d3f36.jpg",
              title: "INTERNATIONAL EATS",
              category: "international",
            },
            {
              imgSrc:
                "https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_1280,ar_1:1/foodcom/images/9985d8e3-87d3-4cfc-b312-b355a6630e76.jpg",
              title: "BREAKFAST & BRUNCH",
              category: "brunch",
            },
            {
              imgSrc:
                "https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_1280,ar_1:1/foodcom/images/b968c752-8018-429d-aa68-b0baf71a9129.jpg",
              title: "COMMUNITY PICKS",
              category: "community",
            },
            {
              imgSrc:
                "https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_1280,ar_1:1/foodcom/images/0e6210a9-7b32-4bae-a8a2-b1f8178cd33a.jpg",
              title: "QUICK & EASY",
              category: "easy",
            },
            {
              imgSrc:
                " https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_1280,ar_1:1/foodcom/images/4c90f65d-398c-462c-a165-eeca9e73aa8a.jpg",
              title: "COPYCAT RECIPE",
              category: "copycat",
            },
          ].map((section, index) => (
            <span
              key={index}
              className="flex flex-col w-[40%] md:w-[14%] items-center  "
            >
              <button
                onClick={() =>
                  handleCategoryClick(section.category, section.title)
                }
              >
                <img
                  src={section.imgSrc}
                  alt="alt"
                  className="w-full rounded-full"
                />
                <h2 className="my-5 font-normal font-cabin">{section.title}</h2>
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* hr */}
      <div className="w-full h-10 mt-10 mb-14 bg-[#f2f2f2]"></div>

      {/* trending now */}

      <div className="mt-5 mb-5 ">
        <h1 className="my-5 text-2xl font-cabin md:text-4xl">TRENDING NOW</h1>
        <div className="flex flex-wrap gap-10">
          {[
            {
              imgSrc:
                "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/93/50/dKELoTKxTcW3dfYDAe1g_0S9A2821.jpg",
              title: "PINEAPPLE ZUCCHINI BREAD",
              category: "pineapple zucchini",
            },
            {
              imgSrc:
                "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/53/77/36/S6eFhnRWSRIOG3LIFJtA_spicy%2520keto%2520broccoli%2520cheddar%2520soup%2520537736-8.jpg",
              title: "SPICY BROCCOLI CHEDDAR SOUP",
              category: " soup",
            },
            {
              imgSrc:
                "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/75/75/8/NxhOU2TMa2ZhvnHCoobQ_0S9A8180.jpg",
              title: "QUICK AND EASY CHICKEN ENCHILADAS",
              category: "chicken enchiladas ",
            },
            {
              imgSrc:
                "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/22/19/56/X74FgabSS2udIgXN7gSk_lemonade%20scones%20SITE.jpg",
              title: "GLUTEN FREE LEMONADE SCONES",
              category: "LEMONADE SCONES",
            },
          ].map((section, index) => (
            <span
              key={index}
              className="w-full sm:w-[46%] md:w-[22%] border-2"
              onClick={() =>
                handleCategoryClick(section.category, section.title)
              }
            >
              <img src={section.imgSrc} alt="img" className="" />
              <h2 className="m-5 text-xl font-normal font-cabin">
                {section.title}
              </h2>
            </span>
          ))}
        </div>
      </div>

      {/* dont miss */}

      <div className="mt-5 mb-5">
        <h1 className="my-5 text-2xl font-cabin md:text-4xl">DONT MISS</h1>
        <div className="flex flex-wrap sm:justify-between md:justify-between gap-5 w-[100%] h-full items-center">
          {[
            {
              imgSrc:
                "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/18/48/40/Ygd0UxnRCWucd7eos48h_0S9A4432.jpg",
              title: "45 SUMMER SALAD",
              category: "SUMMER SALAD",
            },
            {
              imgSrc:
                "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/94/96/4/J712SaFmTWYyv9mWmeCN_0S9A0929.jpg",
              title: "59 COOL CUCUMBER RECIPE",
              category: "cucumber",
            },
            {
              imgSrc:
                "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_4:3/v1/img/recipes/53/64/36/fWLihAK1RlGCr7A2YGCm_0S9A1246.jpg",
              title: "35 ONEPOT MEAL",
              category: "ONE POT",
            },
          ].map((section, index) => (
            <span key={index} className="relative">
              <button
                className=""
                onClick={() =>
                  handleCategoryClick(section.category, section.title)
                } // Pass the category as an argument to a function
              >
                <img
                  src={section.imgSrc}
                  alt={section.title}
                  loading="lazy"
                  className="w-full h-full
                + aspect-square md:w-[410px] sm:w-52 sm:h-auto rounded-lg"
                  // onClick={() => handleCategoryClick(                )}
                />
                <h4 className="absolute top-[60%] text-lg md:text-xl lg:text-2xl left-6 font-bold text-white font-cabin overflow-hidden sm:top-[52%] md:top-[65%]">
                  Collection
                </h4>
                <h1 className="absolute top-[78%] text-lg md:text-4xl lg:text-3xl left-6 font-bold text-white font-cabin overflow-hidden mt-2 sm:top-[62%] md:top-[75%]">
                  {section.title}
                </h1>
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* more Ideas  */}
      <div className="mt-5 mb-5 ">
        <h1 className="my-5 text-2xl font-cabin md:text-4xl">MORE IDEAS</h1>
        <div className="flex flex-wrap gap-10">
          {[
            {
              imgSrc:
                "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/39/46/39/WM8rgRclQsGroxlo7eHA_0S9A3950.jpg",
              title: "CHICKEN TIKKA MASALA",
              category: "chicken tikka",
            },
            {
              imgSrc:
                "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/53/77/36/S6eFhnRWSRIOG3LIFJtA_spicy%2520keto%2520broccoli%2520cheddar%2520soup%2520537736-8.jpg",
              title: "VEG BACON",
              category: " soup",
            },
            {
              imgSrc:
                " https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/42/94/38/fS29ttQnitOZ9fPVIvxA_0S9A5582.jpg",
              title: "COPYCAT MCD BIG MAC SAUCE",
              category: "BIG MAC SAUCE ",
            },
            {
              imgSrc:
                " https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_4:3/v1/img/recipes/79/60/6/YY8R4MPARenL10feYOXj_0S9A2869.jpg ",
              title: "DIRTY SHRIMP IN BEER-BUTTER SAUCE",
              category: "SHRIMP BEER",
            },
          ].map((section, index) => (
            <span
              key={index}
              className="w-full sm:w-[46%] md:w-[22%] border-2"
              onClick={() =>
                handleCategoryClick(section.category, section.title)
              }
            >
              <img src={section.imgSrc} alt="img" className="" />
              <h2 className="m-5 text-xl font-normal font-cabin">
                {section.title}
              </h2>
            </span>
          ))}
        </div>
      </div>

      <div className="w-full h-10 mt-10 mb-14 bg-[#f2f2f2] " 
        onClick={handleCategoryClick("peach", "HOW TO PEAL PEACHES, 3 WAYS")}
      
      ></div>

      <button
        onClick={handleCategoryClick("peach", "HOW TO PEAL PEACHES, 3 WAYS")}
      >
        <div className="flex flex-col w-full border-2 md:flex-row">
          <img
            src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/upload/editorial/how-to-peel-peaches/peel-peaches-beauty-1.jpg"
            alt=""
            className="w-full md:w-2/3"
          />

          <div className="flex-col justify-start m-6 md:m-10 fle md:gap-5 md:flex-col sm:flex-col">
            <p className="text-lg md:text-xl font-cabin">COLLECTION</p>

            <p className="text-xl md:text-3xl font-cabin">
              HOW TO PEEL PEACHES,
              <br /> 3 WAYS
            </p>
            <p className="text-lg md:text-2xl font-cabin">
              There’s more than one way to peel a peach! Here are three ways to
              get the job done.
            </p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Home;
