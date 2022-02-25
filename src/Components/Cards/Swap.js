import React, { useState } from "react";
import BasicArea from "../Charts/Chart";
import Graphcard from "./Graphcard";
const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
function Swap() {
  const [openTab, setOpenTab] = useState(0);
  const [Dis, setDis] = useState(false);
  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul
          className="flex mb-0 list-none shadow-lg pt-2 pb-2 flex-row border m-5 px-2 rounded-lg  bg-[#3F2255]"
          role="tablist"
        >
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className="text-xl    px-1 py-1 rounded block leading-normal text-white"
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
                setDis(!Dis);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              <div className="flex flex-row justify-center">
                <span>Swap</span>
                <span className="pt-3 pl-3">
                  <svg
                    width="8"
                    height="5"
                    viewBox="0 0 8 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 5L0.535899 0.5L7.4641 0.5L4 5Z" fill="white" />
                  </svg>
                </span>
              </div>
            </a>
          </li>
        </ul>

        <div
          className={
            Dis === true
              ? "flex mb-0 list-none  flex-wrap pt-2 pb-2 flex-row  m-5   "
              : "hidden"
          }
        >
          <div className=" flex-auto bg-[#3F2255] rounded-lg border px-2 ">
            <div className="tab-content tab-space">
              <div
                className={openTab === 1 ? "block px-1 py-5" : "hidden"}
                id="link1"
              >
                <div
                  className="flex justify-center text-white text-xl"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                    setDis(!Dis);
                  }}
                >
                  <span>Swap</span>
                  <span className="pt-3.5 pl-3">
                    <svg
                      width="8"
                      height="5"
                      viewBox="0 0 8 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 0L7.4641 4.5L0.535898 4.5L4 0Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>

                <div className="flex flex-row">
                  <form className="w-full max-w-2xl   mt-5">
                    <div className="flex flex-wrap justify-center -mx-3 pb-5  border-b-2 border-[#CA6BE5] mt-3">
                      <div className="mx-2 w-[145px] bg-[#C96BE421] text-white border-2 border-[#CA6BE5] rounded-lg h-[31px] leading-tight focus:outline-none flex flex-row items-center justify-between  px-2">
                        <div className="flex flex-row">
                          <span className="mr-2">
                            <svg
                              width="22"
                              height="21"
                              viewBox="0 0 22 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.5438 20.7241C16.367 20.7241 21.0876 16.0848 21.0876 10.362C21.0876 4.63924 16.367 0 10.5438 0C4.72063 0 0 4.63924 0 10.362C0 16.0848 4.72063 20.7241 10.5438 20.7241Z"
                                fill="#0B0E11"
                              />
                              <path
                                d="M7.58605 9.16781L10.5437 6.26117L13.5029 9.16934L15.2239 7.47795L10.5437 2.87842L5.86503 7.47646L7.58605 9.16781ZM4.64977 8.67065L6.37076 10.362L4.64968 12.0534L2.92871 10.3621L4.64977 8.67065ZM7.58605 11.5564L10.5437 14.4629L13.5029 11.5549L15.2248 13.2454L15.2239 13.2463L10.5437 17.8458L5.86497 13.2478L5.86257 13.2454L7.58605 11.5564ZM18.1588 10.3623L16.4378 12.0536L14.7169 10.3623L16.4378 8.67095L18.1588 10.3623Z"
                                fill="#F0B90B"
                              />
                            </svg>
                          </span>
                          <select className="bg-[transparent] appearance-none focus:outline-none w-[80px]">
                            <option value="volvo" className="bg-[#C96BE421]">
                              Volvo
                            </option>
                            <option value="saab">Saab</option>
                            <option value="fiat">Fiat</option>
                            <option value="audi">Audi</option>
                          </select>
                        </div>
                        <span className="">
                          <svg
                            width="18"
                            height="9"
                            viewBox="0 0 18 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.84462 8.45113L0.30815 0.539398L17.3168 0.470544L8.84462 8.45113Z"
                              fill="#CA6BE5"
                            />
                          </svg>
                        </span>
                      </div>

                      <div className="flex flex-col">
                        <div className="mx-2 w-[145px] bg-[#C96BE421] text-white border-2 border-[#CA6BE5] rounded-lg h-[31px] leading-tight focus:outline-none flex flex-row items-center justify-between px-2">
                          <input
                            className="appearance-none block bg-[transparent] text-white w-[100px] focus:outline-none "
                            id="grid-city"
                            type="text"
                            placeholder="Amount"
                          />
                          <span className="font-normal">Max</span>
                        </div>
                        <div className="mx-2 mt-1 w-[145px] text-white flex flex-row items-center  px-2">
                          <span className="font-light pr-2 text-xs ">25%</span>
                          <span className="font-light pr-2 text-xs">50%</span>
                          <span className="font-light pr-2 text-xs">75%</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 pb-5">
                      <label className=" text-white text-xl ">For</label>
                      <div className="flex flex-wrap -mx-3 pb-5  mt-3 justify-center">
                        <div className="mx-2 w-[145px] bg-[#C96BE421] text-white border-2 border-[#CA6BE5] rounded-lg h-[31px] leading-tight focus:outline-none flex flex-row items-center justify-between px-2">
                          <div className="flex flex-row">
                            <span className="mr-2">
                              <svg
                                width="22"
                                height="21"
                                viewBox="0 0 22 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.5438 20.7241C16.367 20.7241 21.0876 16.0848 21.0876 10.362C21.0876 4.63924 16.367 0 10.5438 0C4.72063 0 0 4.63924 0 10.362C0 16.0848 4.72063 20.7241 10.5438 20.7241Z"
                                  fill="#0B0E11"
                                />
                                <path
                                  d="M7.58605 9.16781L10.5437 6.26117L13.5029 9.16934L15.2239 7.47795L10.5437 2.87842L5.86503 7.47646L7.58605 9.16781ZM4.64977 8.67065L6.37076 10.362L4.64968 12.0534L2.92871 10.3621L4.64977 8.67065ZM7.58605 11.5564L10.5437 14.4629L13.5029 11.5549L15.2248 13.2454L15.2239 13.2463L10.5437 17.8458L5.86497 13.2478L5.86257 13.2454L7.58605 11.5564ZM18.1588 10.3623L16.4378 12.0536L14.7169 10.3623L16.4378 8.67095L18.1588 10.3623Z"
                                  fill="#F0B90B"
                                />
                              </svg>
                            </span>
                            <select className="bg-[transparent] appearance-none focus:outline-none w-[80px]">
                              <option value="volvo" className="bg-[#C96BE421]">
                                Volvo
                              </option>
                              <option value="saab">Saab</option>
                              <option value="fiat">Fiat</option>
                              <option value="audi">Audi</option>
                            </select>
                          </div>
                          <span className="">
                            <svg
                              width="18"
                              height="9"
                              viewBox="0 0 18 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.84462 8.45113L0.30815 0.539398L17.3168 0.470544L8.84462 8.45113Z"
                                fill="#CA6BE5"
                              />
                            </svg>
                          </span>
                        </div>

                        <div className="flex flex-col">
                          <div className="mx-2 w-[145px] bg-[#C96BE421] text-white border-2 border-[#CA6BE5] rounded-lg h-[31px] leading-tight focus:outline-none flex flex-row items-center justify-between px-2">
                            <input
                              className="appearance-none block bg-[transparent] text-white w-[100px] focus:outline-none "
                              id="grid-city"
                              type="text"
                              placeholder="Amount"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="flex flex-col w-[280px] rounded-2xl bg-[#C96BE421] h-[73px] border-2 border-[#CA6BE5] justify-center">
                          <div className="mx-2 py-1 text-white    leading-tight focus:outline-none flex flex-row items-center   px-2 pl-6">
                            <span className="mx-3">Rate</span>
                            <span className="mx-3">1 BNB = 650 USDT</span>
                          </div>
                          <div className="mx-2 py-1 text-white    leading-tight focus:outline-none flex flex-row items-center  px-2 pl-6">
                            <span className="mx-3">Fee</span>
                            <span className="mx-3">$0.019</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <div className=" mt-4 flex flex-col ">
                          <div className=" py-1 text-white    leading-tight  flex flex-row items-center">
                            <button className="mx-2 w-[100px] h-[31px]  rounded-xl bg-white border-2 text-[#C96AE4] pb-1">
                              Swap
                            </button>
                            <button className="mx-2 w-[100px] h-[31px] rounded-xl bg-[#C96AE466] pb-1 text-gray-400">
                              Confirm
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className=" border bg-white rounded-lg  shadow-lg my-5  lg:mx-7 w-[366.7px] lg:w-[800px] lg:h-[526px]">
              <div className="flex  justify-between p-2 md:p-4 md:mx-4">
                <div className="flex items-center">
                  <svg
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5438 20.7241C16.367 20.7241 21.0876 16.0848 21.0876 10.362C21.0876 4.63924 16.367 0 10.5438 0C4.72063 0 0 4.63924 0 10.362C0 16.0848 4.72063 20.7241 10.5438 20.7241Z"
                      fill="#0B0E11"
                    />
                    <path
                      d="M7.58605 9.16781L10.5437 6.26117L13.5029 9.16934L15.2239 7.47795L10.5437 2.87842L5.86503 7.47646L7.58605 9.16781ZM4.64977 8.67065L6.37076 10.362L4.64968 12.0534L2.92871 10.3621L4.64977 8.67065ZM7.58605 11.5564L10.5437 14.4629L13.5029 11.5549L15.2248 13.2454L15.2239 13.2463L10.5437 17.8458L5.86497 13.2478L5.86257 13.2454L7.58605 11.5564ZM18.1588 10.3623L16.4378 12.0536L14.7169 10.3623L16.4378 8.67095L18.1588 10.3623Z"
                      fill="#F0B90B"
                    />
                  </svg>

                  <div className="text-sm ml-2">
                    <p
                      className="text-black leading-none font-medium	"
                      style={{ fontSize: "12px" }}
                    >
                      BNB / USDT
                    </p>
                  </div>
                </div>
              </div>

              <div className="pl-2">
                <BasicArea height={150} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swap;
