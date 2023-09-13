import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  useEffect(() => {
    const fetchData = async (query) => {
      try {
        const response = await fetch(
          "https://api.edamam.com/api/recipes/v2?type=public&q=chocolate&app_id=62bce0a0&app_key=ff388c0331eb479573c52e7112fa70bc"
        );

        if (!response.ok) {
          throw new Error("Network Response was not ok");
        }
        const data = response.json();
        console.log("data", data);
        const hits = data.hits;
        return hits;
      } catch (err) {
        console.log(err, "Error fetching");
        return err;
      }
    };
    fetchData();
  }, []);
  return (
    <div className="pl-32 pr-32 pt-10 pb-10">
      {/* // image and buuton */}

      <div className="w-full relative">
        <img
          srcset="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_250,ar_16:9/v1/img/recipes/24/25/3/l3Fx6AnTcGOjhwYNhggo_0S9A9332.jpg 250w, https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_350,ar_16:9/v1/img/recipes/24/25/3/l3Fx6AnTcGOjhwYNhggo_0S9A9332.jpg 350w, https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_450,ar_16:9/v1/img/recipes/24/25/3/l3Fx6AnTcGOjhwYNhggo_0S9A9332.jpg 450w, https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_16:9/v1/img/recipes/24/25/3/l3Fx6AnTcGOjhwYNhggo_0S9A9332.jpg 750w, https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1050,ar_16:9/v1/img/recipes/24/25/3/l3Fx6AnTcGOjhwYNhggo_0S9A9332.jpg 1050w, https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/recipes/24/25/3/l3Fx6AnTcGOjhwYNhggo_0S9A9332.jpg 1280w"
          src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_250,ar_16:9/v1/img/recipes/24/25/3/l3Fx6AnTcGOjhwYNhggo_0S9A9332.jpg"
          sizes="100vw"
          alt="grilled chicken"
          loading="eager"
          className="relative h-[90vh] w-full"
        ></img>

        <h1 className="absolute top-[45%] left-20 text-5xl text-white font-asap ">
          56 GRILLED RECIPE <br /> CHICKEN
        </h1>
        <button
          type="button"
          className="focus:outline-none text-black bg-yellow-400 rounded-lg text-xl px-12 py-4 mr-2 mb-2  absolute top-[60%] left-20"
        >
          SEE THEM ALL
        </button>
      </div>

      {/* // that long hr LineChart */}

      <div className="w-full h-10 mt-10 mb-14 bg-[#f2f2f2]"></div>

      {/* acitvity */}

      <div>
        {/* top part for section */}
        <div className="flex justify-between">
          <h1 className="text-4xl font-cabin">FRESH FROM OUR COMMUNITY</h1>
          <Link to="/activity" className=" text-[#1769c2] font-semibold">
            VIEW ALL
          </Link>
        </div>

        {/* comments */}

        <div className="flex flex-row  justify-between pt-10 w-full">

          {/* box */}
          <div className=" relative flex flex-col border-2 p-10 gap-7 h-[400px]  w-[445px]   ">
            <span className="flex gap-4 items-center">
              <img
                src="https://geniuskitchen.sndimg.com/gk/img/avatar/burger.png"
                alt="img"
                className="rounded-3xl w-10 "
              />

              <p className="text-xl font-cabin ">
                <span className="text-[#1769c2]">Nilesh </span>
                reviewed
                <span className="text-[#1769c2]"> 
                   {" "}Marinated Chicken Wings
                </span>
              </p>
            </span>
            <p className="text-[#666] text-xl">All you can eat wing night!</p>

            <h3 className="absolute bottom-6 left-11">4 Hour Ago</h3>
            <h3 className="absolute bottom-6 right-11">Reply</h3>

          </div>
          <div className=" relative flex flex-col border-2 p-10 gap-7 h-[400px]  w-[445px]   ">
            <span className="flex gap-4 items-center">
              <img
                src="https://geniuskitchen.sndimg.com/gk/img/avatar/burger.png"
                alt="img"
                className="rounded-3xl w-10 "
              />

              <p className="text-xl font-cabin ">
                <span className="text-[#1769c2]">Nilesh </span>
                reviewed
                <span className="text-[#1769c2]"> 
                   {" "}Marinated Chicken Wings
                </span>
              </p>
            </span>
            <p className="text-[#666] text-xl">All you can eat wing night!</p>

            <h3 className="absolute bottom-6 left-11">4 Hour Ago</h3>
            <h3 className="absolute bottom-6 right-11">Reply</h3>

          </div>
          <div className=" relative flex flex-col border-2 p-10 gap-7 h-[400px]  w-[445px]   ">
            <span className="flex gap-4 items-center">
              <img
                src="https://geniuskitchen.sndimg.com/gk/img/avatar/burger.png"
                alt="img"
                className="rounded-3xl w-10 "
              />

              <p className="text-xl font-cabin ">
                <span className="text-[#1769c2]">Nilesh </span>
                reviewed
                <span className="text-[#1769c2]"> 
                   {" "}Marinated Chicken Wings
                </span>
              </p>
            </span>
            <p className="text-[#666] text-xl">All you can eat wing night!</p>

            <h3 className="absolute bottom-6 left-11">4 Hour Ago</h3>
            <h3 className="absolute bottom-6 right-11">Reply</h3>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
