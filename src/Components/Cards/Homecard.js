import React from "react";
import { ReactComponent as Coin } from "../SVG/Homecard/coin.svg";
import { ReactComponent as Arrow1 } from "../SVG/Navbar/arrow.svg";
import BasicArea from "../Charts/Chart";

function Homecard(props) {
  return (
    <div className=" border bg-white rounded-lg my-5  lg:mr-2 shadow-lg lg:w-[430px] w-[366.7px]">
      <div className="flex  justify-between p-2 md:p-4 md:mx-4">
        <div className="flex items-center">
          <img
            className="lg:h-[41px] lg:w-[40px] h-[32.74px] w-[33.56px] rounded-full"
            src={props.user}
            alt=""
          />

          <div className="text-sm ml-2">
            <p className="text-black leading-none font-medium	lg:text-[12px] text-[10px]">
              Becky's Dexfund
            </p>
            <p className="text-gray-400 lg:text-[10px] text-[8px]">
              adasd5456dfdsfdf4dsf4646ddsg
            </p>
          </div>
        </div>
        <div className="items-center mt-1">
          <p className=" font-medium text-[#C96AE4] lg:text-[17px] text-[14px] ">2,034,343</p>
          <p className="text-gray-400  lg:text-[10px] text-[8px]">Market Cap</p>
        </div>
      </div>

      <div className="flex justify-between border-t-2	rounded-lg shadow-lg  p-2">

        {/* Names */}
        <div className="items-center mt-1">
          <p className="text-black font-medium  rounded-md px-2 py-1 my-2 lg:text-[10px] text-[8px] bg-[#DAD7FE] lg:w-[41px] w-[33.56px]">
            Users
          </p>
          <p className="text-black font-medium rounded-md px-2 py-1 my-2 lg:text-[10px] text-[8px] bg-[#F3C9FF] lg:w-[35px] w-[28.65px]">
            Risk
          </p>
          <p className="text-black font-medium rounded-md px-2 py-1 my-2 lg:text-[10px] text-[8px] bg-[#FFE5D3] lg:w-[91px] w-[74.49px]">
            Min Investment
          </p>
          <p className="text-black font-medium  rounded-md px-2 py-1 my-2 lg:text-[10px] text-[8px] bg-[#E2FBD7] lg:w-[70px] w-[57.3px]">
            Age (Days)
          </p>
          <p className="text-black font-medium rounded-md px-2 py-1 my-2 lg:text-[10px] text-[8px] bg-[#FFD6D2] lg:w-[92px] w-[75.3px]">
            Biggest Holding
          </p>
        </div>

        {/* values */}

        <div className="items-center mt-1  -mr-10">
          <p className="text-black  rounded-md px-2 py-1 my-2  lg:text-[10px] text-[8px] ">
            3220
          </p>
          <p className="text-black  rounded-md px-2 py-1 my-2  lg:text-[10px] text-[8px] ">
            2
          </p>
          <p className="text-black rounded-md px-2 py-1 my-2  lg:text-[10px] text-[8px] ">
            200
          </p>
          <p className="text-black  rounded-md px-2 py-1 my-2  lg:text-[10px] text-[8px] ">
            100
          </p>
          <div className="items-center pt-1 mr-5   ">
            <div className="flex ">
              <div className="flex items-center">
                <div className="">
                  <Coin />
                </div>
              </div>
              <div className="items-center   lg:text-[10px] text-[8px] ">
                <p className="">CAKE 50%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Graph area */}

        <div className="">
          <div className="items-center mt-1 border rounded-lg shadow-lg lg:w-[213px] w-[192.35px]">
            <div className="flex  justify-between  mt-1 mr-1">
              <div className="flex items-center">
                <div className="text-sm ml-2">
                  <p
                    className="leading-none font-medium 	"
                    style={{ fontSize: "8px", color: "#51dd41" }}
                  >
                    +45%
                  </p>
                </div>
              </div>
              <div className="items-center border rounded-md p-0.5 pb-1.5">
                <div className="flex  justify-between  mt-1 mr-1">
                  <div className="flex items-center">
                    <div className="text-sm ml-2">
                      <p
                        className="leading-none font-medium 	"
                        style={{ fontSize: "8px" }}
                      >
                        Last 7 days
                      </p>
                    </div>
                  </div>
                  <div className="items-center pt-0.5 pl-1">
                    <p className="text-gray-400" style={{ fontSize: "8px" }}>
                      <Arrow1 />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <BasicArea height={180} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homecard;
