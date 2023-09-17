import React from "react";

const FoodCard = ({ onClose, nutritionInfo }) => {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50">
      <div className="flex flex-col justify-between p-8 bg-white rounded-lg w-72 md:w-96 h-[650px]">
        <h2 className="mb-4 text-lg font-semibold md:text-2xl">
          Nutrition Information
          <span className="m-4 md:ml-14">
            <button onClick={onClose} className="text-xl">
              x
            </button>
          </span>
        </h2>

        <div className="overflow-y-auto">
          {nutritionInfo.map((item, index) => (
            <div key={index} className="mb-2">
              <h3 className="font-semibold">{item.label}</h3>
              <p>
                Daily: {item.daily.toFixed(2)} {item.unit}
                <br />
                Total: {item.total.toFixed(2)} {item.unit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FoodCard;
