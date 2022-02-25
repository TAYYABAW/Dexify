import React, { useState } from "react";
const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };
function Feed() {
    const [openTab, setOpenTab] = useState(0);
    const [Dis, setDis] = useState(false);
  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul
          className="flex mb-0 list-none shadow-lg flex-wrap pt-2 pb-2 flex-row border m-5 px-2 rounded-lg  bg-white"
          role="tablist"
        >
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-xs font-bold uppercase  shadow-lg px-3 py-3 rounded block leading-normal " +
                (Dis === true && openTab === 1
                  ? "text-black bg-pink-100"
                  : "text-black bg-gray-100")
              }
              style={
                Dis === true && openTab === 1
                  ? { background: "#C96BE4" }
                  : { background: "white" }
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
                setDis(!Dis);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Twitter
            </a>
          </li>

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

        <div
          className={
            Dis === true
              ? "block flex mb-0 list-none shadow-lg flex-wrap pt-2 pb-2 flex-row border m-5 px-2 rounded-lg  bg-white"
              : "hidden"
          }
        >
          <div className=" flex-auto">
            <div className="tab-content tab-space">
              <div
                className={openTab === 1 ? "block px-4 py-5" : "hidden"}
                id="link1"
              >
                <p className="font-medium text-xl">Tweets</p>
                <div className="flex flex-row space-y-1 space-x-2 mt-2  p-2 ">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="text-base	font-medium">Ryan Gosling</p>
                    <p className="text-xs	 text-gray-400	">@gosling585</p>
                    <p className="text-xs pt-2	text-black	">
                      News from the SEC on the XRP Case! This is huge for the
                      adoption of crypto, regulation will bring mass adoption!
                    </p>
                  </div>
                </div>
                <div className="flex flex-row space-y-1 space-x-2 mt-2  p-2 ">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="text-base	font-medium">Ryan Gosling</p>
                    <p className="text-xs	 text-gray-400	">@gosling585</p>
                    <p className="text-xs pt-2	text-black	">
                      Bidens latest tax updates on crypto gains are crazy. I
                      understand regulation is needed but they seem excessive!
                    </p>
                  </div>
                </div>
                <div className="flex flex-row space-y-1 space-x-2 mt-2  p-2 ">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="text-base" style={{ fontWeight: "600" }}>
                      Ryan Gosling
                    </p>
                    <p className="text-xs	 text-gray-400	">@gosling585</p>
                    <p className="text-xs pt-2	text-black	">
                      I am aboslutley loving what the team at @DexifyHQ are
                      building. They allow anyone in the world to manage anyones
                      assets. Proven asset management, no more following sneaky,
                      paid influencers.
                    </p>
                  </div>
                </div>
              </div>
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
                    I am a experienced trader adn former analyst at goldman
                    sachs. I have been invetsing in crypto for 7 years and Defi
                    specifially since 2019. My favourite project is UNIswap I
                    truly believe Defi can provide a more robust and fair
                    financial system for all.
                  </span>
                </div>
                <div className="flex flex-row space-y-0.5  mt-2  p-2 ">
                  <span className="font-medium text-sm mr-3">Fund:</span>
                  <span className="text-xs font-normal">
                    This fund focuses on the DeFi gods. The Dexify portfolio
                    rebalancing algorithm helps me keep the funds distribution
                    optimal.
                  </span>
                </div>
              </div>

              <div
                className={openTab === 3 ? "block px-4 py-5 " : "hidden"}
                id="link1"
              >
                <div className="flex  space-y-0.5  mt-2  p-2 ">
                  <span className="font-medium text-sm ml-20">Entry Fee:</span>
                  <span className="text-xs font-medium text-gray-400 pl-5">
                    0.05%
                  </span>
                </div>
                <div className="flex  space-y-0.5  mt-2  p-2 ">
                  <span className="font-medium text-sm ml-9">
                    Perfomance Fee:
                  </span>
                  <span className="text-xs font-medium text-gray-400 pl-5">
                    5%
                  </span>
                </div>
                <div className="flex  space-y-0.5  mt-2  p-2 ">
                  <span className="font-medium text-sm ml-20 pl-2">
                    Exit Fee:
                  </span>
                  <span className="text-xsfont-medium text-gray-400 pl-5">
                    -
                  </span>
                </div>
                <div className="flex  space-y-0.5  mt-2  p-2 ">
                  <span className="font-medium text-sm">
                    Minimum investment:
                  </span>
                  <span className="text-xs font-medium text-gray-400 pl-5">
                    $500
                  </span>
                </div>
              </div>

              <div className={openTab === 4 ? "block" : "hidden"} id="link1">
                <table className="">
                  <thead>
                    <tr>
                      <th
                        className="px-3 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider "
                        style={{ fontSize: "11px", textAlign: "center" }}
                      >
                        Date
                      </th>
                      <th
                        className="px-3 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        style={{ fontSize: "11px", textAlign: "center" }}
                      >
                        Amount
                      </th>
                      <th
                        className="px-3 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        style={{ fontSize: "11px", textAlign: "center" }}
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
                <div className="flex justify-between font-medium">
                  <span>Total PNL: 34%</span>
                  <span>Total Invested: 9,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
