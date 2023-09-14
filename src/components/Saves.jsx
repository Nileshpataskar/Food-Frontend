import { Search } from "lucide-react";
import React from "react";

const Saves = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-center">
        <span className="flex justify-center w-full gap-10 text-4xl font-cabin">
          <h1>Saves</h1>

          <span className="flex items-center mr-[30%] gap-2">
            <Search /> <p className="flex text-xl"> <p>|</p> <p>Edit</p></p>{" "}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Saves;
