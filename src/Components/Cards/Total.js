import React from "react";

function Total(props) {
  return (
    <div className=" border bg-white rounded-lg my-5 mx-3 lg:mx-1 shadow-lg w-[366.7px] h-[276px] lg:h-[338px] lg:w-[420px]">
      <div className="flex  justify-between p-4 md:p-4 ">
        <div className="flex items-center">
          <div className="text-[20px] ">
            <p className="text-black leading-none font-medium	">Total AUM</p>
          </div>
        </div>
        <div className="items-center">
          <p className="text-black font-medium">...</p>
        </div>
      </div>

      <div className=" border-t border-b  font-medium ">
        <div className="flex  justify-between py-2 px-6 md:p-4 md:mx-4 border-b text-sm">
          <div className="flex items-center">
            <div className="text-[12px] ">
              <p className="text-gray-400 leading-none 	">Total AUM</p>
            </div>
          </div>
          <div className="items-center ">
            <p className="text-black text-[12px]">$ 12.542</p>
          </div>
        </div>

        <div className="flex  justify-between py-2 px-6 md:p-4 md:mx-4 border-b text-sm">
          <div className="flex items-center">
            <div className="my-2">
              <p className="text-gray-400 leading-none 	text-[12px]">7 Day %</p>
            </div>
          </div>
          <div className="items-center ">
            <p className="text-black text-[12px]">34%</p>
          </div>
        </div>

        <div className="flex  justify-between py-2 px-6 md:p-4 md:mx-4 text-sm">
          <div className="flex items-center">
            <div className="my-2">
              <p className="text-gray-400 leading-none 	text-[12px]">Total %</p>
            </div>
          </div>
          <div className="items-center ">
            <p className="text-black text-[12px]">142%</p>
          </div>
        </div>
      </div>

      <div className="py-2">
        <div className="flex  justify-between py-1 px-6 md:px-4 md:py-2 md:mx-4">
          <div className="flex items-center">
            <img
              className="h-[32px] w-[32px] rounded-full"
              src={props.user}
              alt=""
            />

            <div className="text-[12px] ml-2">
              <span className="text-black leading-none font-medium	">
                Becky's Dexfund &nbsp;
              </span>
              <span className="text-gray-400 leading-none font-medium	">
                Biggest Fund
              </span>
            </div>
          </div>
        </div>

        <div className="flex  justify-between  px-6 md:px-4 md:py-2 md:mx-4">
          <div className="flex items-center">
            <img
              className="h-[32px] w-[32px] rounded-full"
              src={props.user}
              alt=""
            />

            <div className="text-[12px] ml-2">
              <span className="text-black leading-none font-medium	">
                Becky's Dexfund &nbsp;
              </span>
              <span className="text-gray-400 leading-none font-medium	">
                Biggest Fund
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Total;
