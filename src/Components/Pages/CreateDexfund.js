import React from "react";
import Table from "../../Table/Table";
import Homecard from "../Cards/Homecard";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

function CreateDexfund() {
  return (
    <div className=" ">
      <div className=" p-5 flex justify-center">
          <div className="flex flex-wrap max-w-4xl bg-white rounded-md">
            <form className="w-full max-w-2xl    p-5 md:mx-10">
              <div className="flex justify-center mb-5">
                <div className=" font-medium text-xl">Create a Dexfund</div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="text"
                    placeholder="Wallet Address"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="text"
                    placeholder="DexFund Name"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-1/2 md:w-1/2 px-3 mb-2 md:mb-0">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="text"
                    placeholder="Perfomance Fee"
                  />
                </div>

                <div className="w-1/2 md:w-1/2 px-3 mb-2 md:mb-0">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-zip"
                    type="text"
                    placeholder="Entry Fee"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="text"
                    placeholder="Minimum Investment"
                  />
                </div>
              </div>
              <label className="font-medium p-2">Select Starting Assets</label>
              <div className="flex flex-wrap mt-3">
                <div
                  className=" mx-1 w-1/8 font-medium mb-4 rounded-lg py-1 px-2"
                  style={{ background: " rgba(242, 201, 76, 0.2)" }}
                >
                  BTC
                </div>
                <div
                  className=" mx-1 w-1/8 font-medium mb-4 rounded-lg py-1 px-2"
                  style={{ background: "  rgba(73, 233, 255, 0.2)" }}
                >
                  ETH
                </div>
                <div
                  className=" mx-1 w-1/8 font-medium mb-4 rounded-lg py-1 px-2"
                  style={{ background: " rgba(109, 133, 255, 0.2)" }}
                >
                  BNB
                </div>
                <div
                  className=" mx-1 w-1/8 font-medium mb-4 rounded-lg py-1 px-2"
                  style={{ background: " #FFDCC9" }}
                >
                  DXFY
                </div>
                <div
                  className=" mx-1 w-1/8 font-medium mb-4 rounded-lg py-1 px-2"
                  style={{ background: "#FFE1B5" }}
                >
                  CAKE
                </div>
                <div
                  className=" mx-1 w-1/8 font-medium mb-4 rounded-lg py-1 px-2"
                  style={{ background: "#FFFBD2" }}
                >
                  1INCH
                </div>
                <div
                  className=" mx-1 w-1/8 font-medium mb-4 rounded-lg py-1 px-2"
                  style={{ background: " #E9FFCC" }}
                >
                  UNI
                </div>
                <div
                  className=" mx-1 w-1/8 font-medium mb-4 rounded-lg py-1 px-2"
                  style={{ background: " #FFE7EB" }}
                >
                  ZRX
                </div>
                <div
                  className=" mx-1 w-1/8 font-medium mb-4 rounded-lg py-1 px-2"
                  style={{ background: "#DDFFE0" }}
                >
                  ADA
                </div>
                <div
                  className=" mx-1 w-1/8 font-medium mb-4 rounded-lg py-1 px-2"
                  style={{ background: " #CAFFF2" }}
                >
                  CRP
                </div>
                <div
                  className=" mx-1 w-1/8 font-medium mb-4 rounded-lg py-1 px-2"
                  style={{ background: "#C8E4FF" }}
                >
                  LINK
                </div>
                <div
                  className=" mx-1 w-1/8 font-medium mb-4 rounded-lg py-1 px-2"
                  style={{ background: "#C9E5FF" }}
                >
                  SNX
                </div>
                <div
                  className=" mx-1 w-1/8 font-medium mb-4 rounded-lg py-1 px-2"
                  style={{ background: " #EED3FF" }}
                >
                  RUNE
                </div>
                <div
                  className=" mx-1 w-1/8 font-medium mb-4 rounded-lg py-1 px-2"
                  style={{ background: "#FFCED7" }}
                >
                  BAKE
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <textarea
                    className="appearance-none resize-none	 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    placeholder="Bio"
                    rows="8"
                    cols="50"
                  />
                </div>
              </div>
              <div
                className="flex justify-center mb-1"
                style={{ color: "#CA6BE5" }}
              >
                <div className=" font-medium text-xl">Create Fund</div>
              </div>
              <div className="flex justify-center mb-1">
                <div className="text-gray-400 text-sm">Connect with</div>
              </div>

              <div className="flex justify-center mb-5">
                <button
                  className="shadow focus:shadow-outline focus:outline-nonepy-2 px-4 rounded-lg font-bold mt-1"
                  type="button"
                  style={{ color: "#03A9F4" }}
                >
                  <svg
                    width="92"
                    height="47"
                    viewBox="0 0 62 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1890_2884)">
                      <path
                        d="M61.4416 3.28827C60.8332 3.55516 60.1849 3.73207 59.509 3.81796C60.2043 3.4028 60.735 2.7504 60.9845 1.96405C60.3362 2.35058 59.6204 2.6236 58.8576 2.77597C58.242 2.1205 57.3646 1.71454 56.4075 1.71454C54.5505 1.71454 53.0555 3.22181 53.0555 5.06959C53.0555 5.33546 53.078 5.5911 53.1332 5.83447C50.3447 5.69847 47.8772 4.36197 46.2196 2.32604C45.9303 2.82812 45.7605 3.4028 45.7605 4.02146C45.7605 5.18309 46.3587 6.21282 47.2504 6.80898C46.7115 6.79875 46.1828 6.6423 45.7349 6.39586C45.7349 6.40609 45.7349 6.41938 45.7349 6.43267C45.7349 8.06265 46.8976 9.41653 48.4223 9.72841C48.1492 9.80306 47.8517 9.83885 47.5429 9.83885C47.3281 9.83885 47.1113 9.82658 46.9078 9.78159C47.3424 11.1099 48.5756 12.0865 50.042 12.1182C48.9008 13.0109 47.4518 13.5487 45.8832 13.5487C45.6082 13.5487 45.3443 13.5365 45.0805 13.5027C46.5663 14.4609 48.3272 15.0079 50.2261 15.0079C56.3983 15.0079 59.7728 9.89509 59.7728 5.46328C59.7728 5.31501 59.7677 5.17185 59.7605 5.02971C60.4262 4.55728 60.9856 3.96726 61.4416 3.28827Z"
                        fill="#03A9F4"
                      />
                    </g>
                    <path
                      d="M6.86095 4.19759V5.0451H4.68493V12.1802H3.64272V5.0451H1.45524V4.19759H6.86095ZM16.5044 5.90405L14.5459 12.1802H13.4694L11.9576 7.19822L10.4459 12.1802H9.36929L7.39941 5.90405H8.46452L9.90757 11.1723L11.4651 5.90405H12.5303L14.0535 11.1838L15.4736 5.90405H16.5044ZM18.077 4.88476C17.8785 4.88476 17.7105 4.81604 17.5731 4.67861C17.4356 4.54117 17.3669 4.3732 17.3669 4.17468C17.3669 3.97617 17.4356 3.8082 17.5731 3.67076C17.7105 3.53333 17.8785 3.46461 18.077 3.46461C18.2679 3.46461 18.4282 3.53333 18.558 3.67076C18.6954 3.8082 18.7641 3.97617 18.7641 4.17468C18.7641 4.3732 18.6954 4.54117 18.558 4.67861C18.4282 4.81604 18.2679 4.88476 18.077 4.88476ZM18.5809 5.90405V12.1802H17.5387V5.90405H18.5809ZM21.6284 6.76301V10.4623C21.6284 10.7677 21.6933 10.9853 21.8231 11.1151C21.9529 11.2372 22.1781 11.2983 22.4988 11.2983H23.2662V12.1802H22.327C21.7468 12.1802 21.3116 12.0466 21.0214 11.7793C20.7313 11.5121 20.5862 11.0731 20.5862 10.4623V6.76301H19.7731V5.90405H20.5862V4.32357H21.6284V5.90405H23.2662V6.76301H21.6284ZM25.8002 6.76301V10.4623C25.8002 10.7677 25.8651 10.9853 25.9949 11.1151C26.1247 11.2372 26.3499 11.2983 26.6706 11.2983H27.4379V12.1802H26.4988C25.9185 12.1802 25.4833 12.0466 25.1932 11.7793C24.903 11.5121 24.758 11.0731 24.758 10.4623V6.76301H23.9448V5.90405H24.758V4.32357H25.8002V5.90405H27.4379V6.76301H25.8002ZM34.4271 8.80161C34.4271 9.00012 34.4156 9.21009 34.3927 9.43151H29.3764C29.4146 10.05 29.6245 10.5348 30.0063 10.886C30.3957 11.2296 30.8653 11.4014 31.415 11.4014C31.8655 11.4014 32.2396 11.2983 32.5374 11.0922C32.8428 10.8784 33.0566 10.5959 33.1787 10.2447H34.3011C34.1331 10.8478 33.7972 11.3403 33.2932 11.7221C32.7893 12.0962 32.1632 12.2833 31.415 12.2833C30.8194 12.2833 30.285 12.1496 29.8116 11.8824C29.3459 11.6152 28.9794 11.2372 28.7121 10.7486C28.4449 10.2523 28.3113 9.67965 28.3113 9.03066C28.3113 8.38167 28.4411 7.81285 28.7007 7.3242C28.9603 6.83555 29.323 6.46142 29.7887 6.20183C30.2621 5.93459 30.8042 5.80098 31.415 5.80098C32.0105 5.80098 32.5374 5.93078 32.9955 6.19037C33.4536 6.44997 33.8048 6.80882 34.0491 7.26693C34.3011 7.71741 34.4271 8.22897 34.4271 8.80161ZM33.3505 8.584C33.3505 8.18697 33.2627 7.84721 33.0871 7.56471C32.9115 7.27457 32.671 7.05697 32.3656 6.9119C32.0678 6.75919 31.7357 6.68284 31.3692 6.68284C30.8424 6.68284 30.3919 6.85082 30.0178 7.18676C29.6513 7.52271 29.4413 7.98846 29.3879 8.584H33.3505ZM36.8449 6.92335C37.0282 6.5645 37.2878 6.28581 37.6237 6.0873C37.9673 5.88878 38.3834 5.78953 38.8721 5.78953V6.86609H38.5972C37.429 6.86609 36.8449 7.49981 36.8449 8.76725V12.1802H35.8027V5.90405H36.8449V6.92335Z"
                      fill="#03A9F4"
                    />
                    <defs>
                      <clipPath id="clip0_1890_2884">
                        <rect
                          width="16.3611"
                          height="16.3611"
                          fill="white"
                          transform="translate(45.0804 0.180145)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
}

export default CreateDexfund;
