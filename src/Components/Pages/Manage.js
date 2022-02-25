import React, { useState } from "react";
import Feed from "../Cards/Feed";
import Graphcard from "../Cards/Graphcard";
import Swap from "../Cards/Swap";
const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
function Manage() {
  const [openTab, setOpenTab] = useState(2);
  const [Dis, setDis] = useState(false);
  return (
    <div className="">
      <div className="lg:hidden">
        <Swap />
      </div>
        <div className="container mx-auto">
          <div className="lg:flex lg:flex-row  grid place-items-center w-screen ">
            <Graphcard />

            <div className="hidden lg:block">
              <div className="flex mb-0 list-none  flex-wrap flex-row   w-[440px] h-[522px]    ">
                <div className=" flex-auto bg-[#3F2255] rounded-lg border px-5 ">
                  <div className="tab-content tab-space">
                    <div className="block px-1 py-5" id="link1">
                      <div className="flex justify-left text-white text-xl">
                        <span>Swap</span>
                      </div>

                      <div className="flex flex-row">
                        <form className="w-full max-w-2xl   mt-5">
                          <div className="flex flex-wrap justify-center -mx-3 pb-5  border-b-2 border-[#CA6BE5] mt-3">
                            <div className="mx-2 w-[177px] bg-[#C96BE421] text-white border-2 border-[#CA6BE5] rounded-lg h-[38px] leading-tight focus:outline-none flex flex-row items-center justify-between  px-2">
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
                                  <option
                                    value="volvo"
                                    className="bg-[#C96BE421]"
                                  >
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
                              <div className="mx-2 w-[177px] bg-[#C96BE421] text-white border-2 border-[#CA6BE5] rounded-lg h-[38px] leading-tight focus:outline-none flex flex-row items-center justify-between px-2">
                                <input
                                  className="appearance-none block bg-[transparent] text-white w-[100px] focus:outline-none "
                                  id="grid-city"
                                  type="text"
                                  placeholder="Amount"
                                />
                                <span className="font-normal">Max</span>
                              </div>
                              <div className="mx-2 mt-1 w-[145px] text-white flex flex-row items-center  px-2">
                                <span className="font-light pr-2 text-xs ">
                                  25%
                                </span>
                                <span className="font-light pr-2 text-xs">
                                  50%
                                </span>
                                <span className="font-light pr-2 text-xs">
                                  75%
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 pb-5">
                            <label className=" text-white text-xl ">For</label>
                            <div className="flex flex-wrap -mx-3 pb-5  mt-3 justify-center">
                              <div className="mx-2 w-[177px] bg-[#C96BE421] text-white border-2 border-[#CA6BE5] rounded-lg h-[38px] leading-tight focus:outline-none flex flex-row items-center justify-between px-2">
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
                                    <option
                                      value="volvo"
                                      className="bg-[#C96BE421]"
                                    >
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
                                <div className="mx-2 w-[177px] bg-[#C96BE421] text-white border-2 border-[#CA6BE5] rounded-lg h-[38px] leading-tight focus:outline-none flex flex-row items-center justify-between px-2">
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
                              <div className="flex flex-col w-[360px] rounded-2xl bg-[#C96BE421] h-[89px] border-2 border-[#CA6BE5] justify-center">
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
                              <div className=" mt-14 flex flex-col ">
                                <div className=" py-1 text-white    leading-tight  flex flex-row items-center">
                                  <button className="mx-2 w-[122px] h-[38px]  rounded-xl bg-white border-2 text-[#C96AE4] pb-1">
                                    Swap
                                  </button>
                                  <button className="mx-2 w-[122px] h-[38px] rounded-xl bg-[#C96AE466] pb-1 text-gray-400">
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
              </div>
            </div>
          </div>
        </div>

      <div className="flex flex-row">
        <div className=" overflow-x-auto ml-7 lg:ml-10 lg:w-[800px]">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Assets
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    AUM
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Price
                  </th>

                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Daily%
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Allocations
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">UNI</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">614,609.76</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">15.43</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">+12%</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">49.95%</p>
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">UNI</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">614,609.76</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">15.43</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">+12%</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">49.95%</p>
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">UNI</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">614,609.76</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">15.43</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">+12%</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">49.95%</p>
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">UNI</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">614,609.76</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">15.43</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">+12%</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">49.95%</p>
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">UNI</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">614,609.76</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">15.43</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">+12%</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">49.95%</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="px-5 py-5 flex flex-col xs:flex-row items-center xs:justify-between          ">
            <span className="mb-4 text-base" style={{ color: "#C96AE4" }}>
              Edit Dexfund Info
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
              <button
                className="mr-3 text-lg text-gray-800  py-2 px-4 rounded-lg bg-white"
                style={{ color: "#C96AE4" }}
              >
                Invest
              </button>
              <button
                className="ml-3 text-lg  text-white  py-2 px-4 rounded-lg"
                style={{ background: "#C96AE4" }}
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-[440px] lg:ml-[10px] ">
          <div className="flex flex-wrap">
            <div className="w-full">
              <ul
                className="flex mb-0 list-none shadow-lg flex-wrap pt-2 pb-2 ml-7 flex-row   px-2 rounded-t-lg  bg-white "
                role="tablist"
              >
                <li className="-mb-px last:mr-0 flex-auto text-center bg-gray-100">
                  <a
                    className={
                      "text-xs font-bold uppercase px-3 py-3 rounded block leading-normal " +
                      (Dis === true && openTab === 2
                        ? "text-black bg-pink-100"
                        : "text-black bg-gray-100")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                      setDis(!Dis);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    Bios
                  </a>
                </li>
                <li className="-mb-px  last:mr-0 flex-auto text-center bg-gray-100">
                  <a
                    className={
                      "text-xs font-bold uppercase px-3 py-3 rounded block leading-normal " +
                      (Dis === true && openTab === 3
                        ? "text-black bg-pink-100"
                        : "text-black bg-gray-100")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(3);
                      setDis(!Dis);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    Fees
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center bg-gray-100">
                  <a
                    className={
                      "text-xs font-bold uppercase px-3 py-3  rounded block leading-normal " +
                      (Dis === true && openTab === 4
                        ? "text-black bg-pink-100"
                        : "text-black bg-gray-100")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(4);
                      setDis(!Dis);
                    }}
                    data-toggle="tab"
                    href="#link3"
                    role="tablist"
                  >
                    Total History
                  </a>
                </li>
              </ul>

              <div className="flex mb-0 list-none shadow-lg flex-wrap pt-2 pb-2 flex-row  ml-7  rounded-b-lg  bg-white h-[290px]">
                <div className=" flex-auto">
                  <div className="tab-content tab-space">
                    <div
                      className={openTab === 2 ? "block px-4 py-5" : "hidden"}
                      id="link1"
                    >
                      <span className="font-medium text-l mr-2">Name:</span>
                      <span className="text-xs font-normal">Ryan Gosling</span>
                      <div className="flex flex-row space-y-0.5  mt-2  p-2 ">
                        <span className="font-medium text-sm mr-6">Age:</span>
                        <span className="text-xs font-normal">
                          Created 21st June 2021 (35 days old)
                        </span>
                      </div>
                      <div className="flex flex-row space-y-0.5  mt-2  p-2 ">
                        <span className="font-medium text-sm mr-7">Bio:</span>
                        <span className="text-xs font-normal">
                          I am a experienced trader adn former analyst at
                          goldman sachs. I have been invetsing in crypto for 7
                          years and Defi specifially since 2019. My favourite
                          project is UNIswap I truly believe Defi can provide a
                          more robust and fair financial system for all.
                        </span>
                      </div>
                      <div className="flex flex-row space-y-0.5  mt-2  p-2 ">
                        <span className="font-medium text-sm mr-3">Fund:</span>
                        <span className="text-xs font-normal">
                          This fund focuses on the DeFi gods. The Dexify
                          portfolio rebalancing algorithm helps me keep the
                          funds distribution optimal.
                        </span>
                      </div>
                    </div>

                    <div
                      className={openTab === 3 ? "block px-7 py-5 " : "hidden"}
                      id="link1"
                    >
                      <div className="flex flex-row  space-y-0.5 py-2 ">
                        <span className="font-medium text-xl ml-[108px]">
                          Entry Fee:
                        </span>
                        <span className="text-lg font-medium text-gray-400 pl-5">
                          0.05%
                        </span>
                      </div>
                      <div className="flex  space-y-0.5  py-2   ">
                        <span className="font-medium text-xl ml-12">
                          Perfomance Fee:
                        </span>
                        <span className="text-lg font-medium text-gray-400 pl-5">
                          5%
                        </span>
                      </div>
                      <div className="flex  space-y-0.5 py-2   ">
                        <span className="font-medium text-xl ml-[115px] pl-2">
                          Exit Fee:
                        </span>
                        <span className="text-lg font-medium text-gray-400 pl-5">
                          -
                        </span>
                      </div>
                      <div className="flex  space-y-0.5 py-2   ">
                        <span className="font-medium text-xl">
                          Minimum investment:
                        </span>
                        <span className="text-lg font-medium text-gray-400 pl-5">
                          $500
                        </span>
                      </div>
                    </div>

                    <div
                      className={openTab === 4 ? "block " : "hidden"}
                      id="link1"
                    >
                      <table className="">
                        <thead className=" border-b-2 ">
                          <tr>
                            <th
                              className="px-6 py-3 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider "
                              style={{
                                fontSize: "11px",
                                textAlign: "center",
                              }}
                            >
                              Date
                            </th>
                            <th
                              className="px-6 py-3 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                              style={{
                                fontSize: "11px",
                                textAlign: "center",
                              }}
                            >
                              Amount
                            </th>
                            <th
                              className="px-6 py-3 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                              style={{
                                fontSize: "11px",
                                textAlign: "center",
                              }}
                            >
                              Withdrawal/Deposit
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                              <p
                                className="text-gray-900 whitespace-no-wrap"
                                style={{ textAlign: "center" }}
                              >
                                20/05/2021 10:32
                              </p>
                            </td>
                            <td className="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                              <p
                                className="text-gray-900 whitespace-no-wrap"
                                style={{ textAlign: "center" }}
                              >
                                3540
                              </p>
                            </td>
                            <td className="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                              <p
                                className="text-gray-900 whitespace-no-wrap"
                                style={{ textAlign: "center" }}
                              >
                                Deposit
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                              <p
                                className="text-gray-900 whitespace-no-wrap"
                                style={{ textAlign: "center" }}
                              >
                                20/05/2021 10:32
                              </p>
                            </td>
                            <td className="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                              <p
                                className="text-gray-900 whitespace-no-wrap"
                                style={{ textAlign: "center" }}
                              >
                                3540
                              </p>
                            </td>
                            <td className="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                              <p
                                className="text-gray-900 whitespace-no-wrap"
                                style={{ textAlign: "center" }}
                              >
                                Deposit
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-3 py-5 bg-white text-sm">
                              <p
                                className="text-gray-900 whitespace-no-wrap"
                                style={{ textAlign: "center" }}
                              >
                                20/05/2021 10:32
                              </p>
                            </td>
                            <td className="px-3 py-5  bg-white text-sm">
                              <p
                                className="text-gray-900 whitespace-no-wrap"
                                style={{ textAlign: "center" }}
                              >
                                3540
                              </p>
                            </td>
                            <td className="px-3 py-5 bg-white text-sm">
                              <p
                                className="text-gray-900 whitespace-no-wrap"
                                style={{ textAlign: "center" }}
                              >
                                Deposit
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="flex px-2 pt-5 justify-between font-medium">
                        <span>Total PNL: 34%</span>
                        <span>Total Invested: 9,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage;
