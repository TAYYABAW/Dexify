import React from "react";
import BasicArea from "../Charts/Chart";
// import Progress from "react-circle-progress-bar";

function ROI(props) {
  return (
    <div className=" border bg-white rounded-lg my-5 mx-1 lg:mx-2 shadow-lg w-[366.7px] h-[276px] lg:h-[338px] lg:w-[420px]">
      <div className="flex  justify-between p-4 md:p-4 ">
        <div className="flex items-center">
          <div className="text-xl">
            <p className="text-black leading-none font-medium	">Dexfund Split</p>
          </div>
        </div>
        <div className="items-center">
          <p className="text-black font-medium">...</p>
        </div>
      </div>
      <div className="p-4 md:p-4 ">
        <BasicArea height={180} />
      </div>
    </div>
  );
}

export default ROI;
