/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../SVG/Navbar/logo.png";
import { ReactComponent as Line } from "../SVG/Navbar/line.svg";
import { ReactComponent as Arrow1 } from "../SVG/Navbar/arrow.svg";
import Coin from "../SVG/Navbar/coin.png";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

export default function Nav() {
  const [Nav, setNav] = useState(1);
  return (
    <>
      <div className="min-h-full bg-white">
        <Disclosure as="nav" className="bg-white-800 ">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 ">
                <div className="flex items-center justify-between h-18">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 ">
                      <Link
                        to="/"
                        id="1"
                        className="text-black  border-b-2 border-indigo-400 rounded-none px-3 py-2  text-sm font-medium"
                      >
                        <img className="h-10 w-30" src={Logo} alt="Workflow" />
                      </Link>
                    </div>
                    <div className="hidden lg:block">
                      <div className="ml-5 flex justify-between items-baseline space-x-4">
                        <Link
                          to="/"
                          id="1"
                          onClick={() => {
                            setNav(1);
                          }}
                          className={
                            Nav === 1
                              ? "text-black  border-b-2 border-indigo-400 rounded-none px-5 py-2  text-[15px] font-medium"
                              : "text-gray-300  hover:text-black px-5"
                          }
                        >
                          Dexfund
                        </Link>
                        <Link
                          to="/create"
                          id="2"
                          onClick={() => {
                            setNav(2);
                          }}
                          className={
                            Nav === 2
                              ? "text-black  border-b-2 border-indigo-400 rounded-none px-5 py-2  text-[15px] font-medium"
                              : "text-gray-300  hover:text-black px-5"
                          }
                        >
                          Manage
                        </Link>
                        <Link
                          to="/dashboard"
                          id="2"
                          onClick={() => {
                            setNav(3);
                          }}
                          className={
                            Nav === 3
                              ? "text-black  border-b-2 border-indigo-400 rounded-none px-5 py-2 text-[15px] font-medium"
                              : "text-gray-300  hover:text-black px-5"
                          }
                        >
                          Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* <div className="flex flex-row items-center space-x-2 m-5 border p-0.5 rounded-lg  w-[169px] h-[43px] ">
                        <img
                          className="h-[37px] w-[37px] rounded-lg"
                          src={user.imageUrl}
                          alt=""
                        />
                        <div className="flex flex-col space-y-0">
                          <div className="text-[10px] font-medium	">3 ETH</div>
                          <div className="text-[10px] font-light  object-left 	">
                            sgdfgdgsdfgsd{" "}
                          </div>
                        </div>
                      </div> */}

                      <button
                        type="button"
                        className=" p-1 rounded-full text-gray-400 hover:text-black focus:outline-none "
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs rounded-full  text-sm focus:outline-none ">
                            <span className="sr-only">Open user menu</span>
                            <div className="flex flex-row items-center  space-x-2 ">
                              <img
                                className="h-[43px] w-[43px]  rounded-full"
                                src={user.imageUrl}
                                alt=""
                              />
                              <div className="flex flex-col -space-y-2  ">
                                <div className="text-[10px] font-medium	">
                                  Jonathan Amam
                                </div>
                                <div className="text-[8px] font-light flex	  justify-left	">
                                  New User
                                </div>
                              </div>
                              <div className="pl-6">
                                <Arrow1 />
                              </div>
                            </div>
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              <Link
                                to="#"
                                className="block px-4 py-2 text-sm text-gray-700"
                              >
                                Sign out
                              </Link>
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white ">
                      <span className="sr-only">Open main menu</span>
                      <div
                        className={
                          open
                            ? "flex flex-row space-y-0 space-x-1 items-center m-1 border p-0.5 rounded-lg overflow-hidden w-[169px] h-[43px]"
                            : "flex flex-row space-y-0 space-x-1 items-center m-1 border p-0.5 rounded-lg overflow-hidden w-[81px] h-[35px]"
                        }
                      >
                        <img
                          className={
                            open
                              ? "h-[37px] w-[37px] rounded-lg "
                              : "h-[30.29px] w-[30.29px] rounded-lg "
                          }
                          src={user.imageUrl}
                          alt=""
                        />
                        <div className="flex flex-col -space-y-1 ">
                          <div
                            className={
                              open
                                ? "text-[11px] font-medium flex justify-start text-black"
                                : "text-[9px] font-medium flex justify-start text-black"
                            }
                          >
                            3 ETH
                          </div>
                          <div
                            className={
                              open
                                ? "text-[11px]	  object-left 	"
                                : "text-[9px]	  object-left 	"
                            }
                          >
                            sgdfgdgsdfgsd
                          </div>
                        </div>
                      </div>

                      {open ? (
                        ""
                      ) : (
                        <img
                          className="h-10 w-10 rounded-full mx-3"
                          src={user.imageUrl}
                          alt=""
                        />
                      )}
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Line className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="lg:hidden">
                <div className="flex  justify-between mx-7 pt-3 pb-3  items-baseline  ">
                  <div className="flex flex-row items-center  space-y-1 space-x-1 mr-6 ">
                    <BellIcon
                      className="h-[25px] w-[25px] text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="text-[15px] font-medium">
                      Notification
                    </span>
                  </div>
                  <Menu as="div" className="ml-3 relative ">
                    <div>
                      <Menu.Button className="max-w-xs rounded-full  text-sm focus:outline-none ">
                        <span className="sr-only">Open user menu</span>
                        <div className="flex flex-row space-y-1 space-x-3 ">
                          <img
                            className="sm:h-12 sm:w-12 h-10 w-10 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                          <div className="flex flex-col  align-left -space-y-2 pt-1 font-medium">
                            <div className="">Jonathan Amam</div>
                            <div
                              className="flex align-left 	"
                              style={{ fontSize: "10px" }}
                            >
                              New User
                            </div>
                          </div>
                          <div className="pt-5 pl-6">
                            <Arrow1 />
                          </div>
                        </div>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Link
                          to="#"
                          className="block px-4 py-2 text-sm text-gray-700"
                        >
                          Sign out
                        </Link>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>

                <div className="m-5 flex justify-between items-center ">
                  <Link
                    to="/"
                    id="1"
                    onClick={() => {
                      setNav(1);
                    }}
                    className={
                      Nav === 1
                        ? "text-black  border-b-2 border-indigo-400 rounded-none px-5 py-2  text-[15px] font-medium"
                        : "text-gray-400  hover:text-black px-5"
                    }
                  >
                    Dexfund
                  </Link>
                  <Link
                    to="/create"
                    id="2"
                    onClick={() => {
                      setNav(2);
                    }}
                    className={
                      Nav === 2
                        ? "text-black  border-b-2 border-indigo-400 rounded-none px-5 py-2  text-[15px] font-medium"
                        : "text-gray-400  hover:text-black px-5"
                    }
                  >
                    Manage
                  </Link>
                  <Link
                    to="/dashboard"
                    id="2"
                    onClick={() => {
                      setNav(3);
                    }}
                    className={
                      Nav === 3
                        ? "text-black  border-b-2 border-indigo-400 rounded-none px-5 py-2 text-[15px] font-medium"
                        : "text-gray-400  hover:text-black px-5"
                    }
                  >
                    Profile
                  </Link>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
