import React, { useState } from "react";
import { VscSearch } from "react-icons/vsc";
import { Popover, Transition } from "@headlessui/react";
import { BiChevronRight } from "react-icons/bi";
import { CgMenu, CgClose } from "react-icons/cg";

import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useRef } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  return (
    <>
      <header className="hidden sm:block text-gray-600 body-font sticky top-0 z-20 bg-white">
        <div
          className=" container mx-auto  flex-wrap flex  p-3 flex-col md:flex-row items-center"
          bis_skin_checked={1}
        >
          <NavLink
            to="/"
            className="flex font-medium items-center text-black mb-4 md:mb-0"
          >
            <img src="/logo.png" className="h-20 w-20 ml-4  " alt="" />
          </NavLink>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <NavLink
              to="/"
              className="mr-5  text-xl text-black font-semibold  hover:text-blue-500"
            >
              Home
            </NavLink>

            <NavLink className="mr-5  text-xl text-black font-bold">
              <div>
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md text-black px-3 py-2  font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                      >
                        <span className="font-semibold text-black ">
                          Solutions
                        </span>
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute  z-10 mt-3 w-52 left-7 sm:left-28 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                          <div className="overflow-hidden rounded-lg shadow-xl ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-4 bg-white p-4 lg:grid-cols-1">
                              <NavLink className="p-0 flex items-center rounded-lg  transition duration-150 ease-in-out  focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                                <ul className="w-full flex flex-col justify-center items-center gap-y-3 p-3">
                                  <div className="flex justify-center items-center hover:bg-gray-50">
                                    <span>
                                      <BiChevronRight className="inline text-blue-500" />
                                    </span>
                                    <p className="text-sm  text-gray-900 text-center font-semibold">
                                      WEBSITE DEVELOPEMENT
                                    </p>
                                  </div>

                                  <div className="flex justify-center items-center hover:bg-gray-50">
                                    <span>
                                      <BiChevronRight className="inline text-blue-500" />
                                    </span>
                                    <p className="text-sm  text-gray-900 text-center font-semibold">
                                      WEBSITE DESIGNING
                                    </p>
                                  </div>

                                  <div className="flex justify-center items-center hover:bg-gray-50">
                                    <span>
                                      <BiChevronRight className="inline text-blue-500" />
                                    </span>
                                    <p className="text-sm  text-gray-900 text-center  font-semibold">
                                      SOFTWARE DEVELOPEMENT
                                    </p>
                                  </div>

                                  <div className="flex justify-center items-center hover:bg-gray-50">
                                    <span>
                                      <BiChevronRight className="inline text-blue-500" />
                                    </span>
                                    <p className="text-sm  text-gray-900 text-center font-semibold">
                                      E-COMMERCE DEVELOPEMENT
                                    </p>
                                  </div>
                                </ul>
                              </NavLink>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </div>
            </NavLink>

            <NavLink className="mr-5 hover:text-blue-500 text-xl text-white font-bold">
              <div>
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md text-black px-3 py-2  font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                      >
                        <span className="font-semibold text-black ">
                          Technologies
                        </span>
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute  z-10 mt-3 w-72 xs:left-32 xs:-top-   sm:left-28 max-w-sm -translate-x-1/2 transform px-4 sm:px-0  lg:max-w-3xl">
                          <div className="overflow-hidden rounded-lg shadow-xl ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-4 bg-white p-4 lg:grid-cols-1">
                              {/* 1 */}
                              <NavLink className="p-0 flex items-center rounded-lg  transition duration-150 ease-in-out  focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                                <div className="w-full grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2  h-72 overflow-scroll scrollbar-hide place-items-center text-black gap-y-8 ">
                                  <div className=" ">
                                    <h1 className="text-center text-base">
                                      FRONTEND TECHNOLOGIES
                                    </h1>

                                    <div className="flex flex-col justify-center items-center text-sm gap-y-1  sm:mt-0">
                                      <p className="font-semibold">REACT</p>
                                      <p className="font-semibold">ANGULAR</p>
                                      <p className="font-semibold">NEXT JS</p>
                                    </div>
                                    {/* </div> */}
                                  </div>

                                  <div>
                                    <h1 className="text-center text-base ">
                                      BACKEND TECHNOLOGIES
                                    </h1>

                                    <div className="flex flex-col justify-center items-center  text-sm gap-y-1 mt-2 sm:mt-0">
                                      <p className="font-semibold">NODE JS</p>
                                      <p className="font-semibold">
                                        EXPRESS JS
                                      </p>
                                      <p className="font-semibold">&nbsp;</p>
                                    </div>
                                  </div>
                                  <div>
                                    <h1 className="text-center text-base">
                                      DATABASE
                                    </h1>

                                    <div className="flex flex-col justify-center items-center  text-sm gap-y-1 mt-2 sm:mt-0">
                                      <p className="font-semibold">FIREBASE</p>
                                      <p className="font-semibold">MONGO DB</p>
                                      <p className="font-semibold">
                                        POSTGRESQL
                                      </p>
                                      <p className="font-semibold">SQLITE</p>
                                      <p className="font-semibold">MYSQL</p>
                                    </div>
                                  </div>
                                  <div>
                                    <h1 className="text-center text-base">
                                      FRAMEWORKS
                                    </h1>

                                    <div className="flex flex-col justify-center items-center text-sm gap-y-1 mt-2  sm:mt-0">
                                      <p className="font-semibold">
                                        TAILWIND CSS
                                      </p>
                                      <p className="font-semibold">
                                        MATERIAL UI
                                      </p>
                                      <p className="font-semibold">BOOTSTRAP</p>
                                      <p className="font-semibold">&nbsp;</p>
                                      <p className="font-semibold">&nbsp;</p>
                                    </div>
                                  </div>
                                  <div className="mb-6">
                                    <h1 className="text-center text-base">
                                      TESTING LIBRARY
                                    </h1>
                                    <div className="flex flex-col justify-center items-center  text-sm gap-y-1 mt-2 sm:mt-0">
                                      <p className="font-semibold">JEST</p>
                                      <p className="font-semibold text-center">
                                        REACT TESTING LIBRARY
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </NavLink>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </div>
            </NavLink>
            <NavLink
              to="/portfolio"
              className="mr-5 hover:text-blue-500 text-xl text-black font-semibold"
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/contact"
              className="mr-5 hover:text-blue-500 text-xl text-black font-semibold"
            >
              Contact
            </NavLink>
            <NavLink
              to="/about"
              className="mr-5 hover:text-blue-500 text-xl text-black font-semibold"
            >
              About
            </NavLink>
          </nav>
          <div className="max-w-xs">
            <div className="relative mt-1 p-3 rounded-md">
              <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                <VscSearch className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="bg-white block w-full p-1 pl-10 pr-2 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              />
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE  */}

      <div className="block  sm:hidden">
        <nav className="">
          <div className="max-w-5xl  mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <NavLink
                    to="/"
                    className="flex font-bold items-center text-black  md:mb-0"
                  >
                    <img src="/logo.png" className="h-20 w-20   " alt="" />
                  </NavLink>
                </div>
              </div>

              <div className="-mr-2 flex ">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <CgMenu
                      size={25}
                      color="black"
                      className="object-contain font-bold"
                    />
                  ) : (
                    <CgClose
                      size={25}
                      color="black"
                      className="object-contain font-bold"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100  "
            enterFrom="opacity-0 scale-95 "
            enterTo="opacity-100 scale-100 "
            leave="transition ease-in duration-75"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95 "
          >
            {() => (
              <div className="md:hidden" id="mobile-menu">
                <div
                  ref={ref}
                  className=" px-2 pt-2 pb-20 gap-6 xxs:pb-32 sm:px-3 flex justify-center items-center flex-col h-[100vh]"
                >
                  <NavLink
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className=" text-black block px-3 py-2 rounded-md text-lg font-bold"
                  >
                    Home
                  </NavLink>

                  <div className="block px-3 py-2 rounded-md text-lg font-bold">
                    <NavLink className=" hover:text-blue-500 text-xl text-black font-bold">
                      <div>
                        <Popover className="relative">
                          {({ open }) => (
                            <>
                              <Popover.Button
                                className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md text-black px-3 py-2  font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                              >
                                <span className="text-black block rounded-md text-lg font-bold">
                                  Solutions
                                </span>
                              </Popover.Button>
                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                              >
                                <Popover.Panel className="absolute  z-10 top-16 w-72 left-10  max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl ">
                                  <div className="overflow-hidden rounded-lg shadow-xl ring-1 ring-black ring-opacity-5">
                                    <div className="relative grid gap-4 bg-white p-4 lg:grid-cols-1">
                                      <NavLink className="p-0 flex items-center rounded-lg  transition duration-150 ease-in-out  focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                                        <ul className="w-full flex flex-col justify-center items-center gap-y-3 p-3">
                                          <div className="flex justify-center items-center hover:bg-gray-50">
                                            <span>
                                              <BiChevronRight className="inline text-blue-500 " />
                                            </span>
                                            <p className="text-sm  text-gray-900 text-center font-semibold">
                                              WEBSITE DEVELOPEMENT
                                            </p>
                                          </div>

                                          <div className="flex justify-center items-center hover:bg-gray-50">
                                            <span>
                                              <BiChevronRight className="inline text-blue-500" />
                                            </span>
                                            <p className="text-sm  text-gray-900 text-center  font-semibold">
                                              WEBSITE DESIGNING
                                            </p>
                                          </div>

                                          <div className="flex justify-center items-center hover:bg-gray-50">
                                            <span>
                                              <BiChevronRight className="inline text-blue-500" />
                                            </span>
                                            <p className="text-sm  text-gray-900 text-center  font-semibold">
                                              SOFTWARE DEVELOPEMENT
                                            </p>
                                          </div>

                                          <div className="flex justify-center items-center hover:bg-gray-50">
                                            <span>
                                              <BiChevronRight className="inline text-blue-500" />
                                            </span>
                                            <p className="text-sm  text-gray-900 text-center font-semibold">
                                              E-COMMERCE DEVELOPEMENT
                                            </p>
                                          </div>
                                        </ul>
                                      </NavLink>
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </>
                          )}
                        </Popover>
                      </div>
                    </NavLink>
                  </div>

                  <div className="block px-3 py-2 rounded-md text-base font-medium">
                    {/* Here mobile technology  */}

                    <NavLink className=" text-xl text-black font-bold">
                      <div>
                        <Popover className="relative">
                          {({ open }) => (
                            <>
                              <Popover.Button
                                className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md text-black px-3 py-2  font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                              >
                                <span className=" text-black block rounded-md text-lg font-bold">
                                  Technologies
                                </span>
                              </Popover.Button>
                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                              >
                                <Popover.Panel className="absolute  z-10 mt-3 w-80  xs:left-14 xs:top-8 xxs:left-14 xxs:top-12 xxs:w-96 sm:left-28 max-w-sm -translate-x-1/2 transform px-4 sm:px-0  lg:max-w-3xl ">
                                  <div className="overflow-hidden rounded-lg shadow-xl ring-1 ring-black ring-opacity-5">
                                    <div className="relative grid gap-4 bg-white xs:h-48 xxs:h-60  p-4 lg:grid-cols-1">
                                      {/* 1 */}
                                      <NavLink className="p-0 flex items-center rounded-lg  transition duration-150 ease-in-out  focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                                        <div className="w-full grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2  h-72 overflow-scroll scrollbar-hide place-items-center text-black gap-y-8 ">
                                          <div className=" ">
                                            <h1 className="text-center text-base">
                                              FRONTEND TECHNOLOGIES
                                            </h1>

                                            <div className="flex flex-col justify-center items-center text-sm gap-y-1  sm:mt-0">
                                              <p className="font-semibold">
                                                REACT
                                              </p>
                                              <p className="font-semibold">
                                                ANGULAR
                                              </p>
                                              <p className="font-semibold">
                                                NEXT JS
                                              </p>
                                            </div>
                                          </div>

                                          <div>
                                            <h1 className="text-center text-base ">
                                              BACKEND TECHNOLOGIES
                                            </h1>

                                            <div className="flex flex-col justify-center items-center  text-sm gap-y-1 mt-2 sm:mt-0">
                                              <p className="font-semibold">
                                                NODE JS
                                              </p>
                                              <p className="font-semibold">
                                                EXPRESS JS
                                              </p>
                                              <p className="font-semibold">
                                                &nbsp;
                                              </p>
                                            </div>
                                          </div>
                                          <div>
                                            <h1 className="text-center text-base">
                                              DATABASE
                                            </h1>

                                            <div className="flex flex-col justify-center items-center  text-sm gap-y-1 mt-2 sm:mt-0">
                                              <p className="font-semibold">
                                                FIREBASE
                                              </p>
                                              <p className="font-semibold">
                                                MONGO DB
                                              </p>
                                              <p className="font-semibold">
                                                POSTGRESQL
                                              </p>
                                              <p className="font-semibold">
                                                SQLITE
                                              </p>
                                              <p className="font-semibold">
                                                MYSQL
                                              </p>
                                            </div>
                                          </div>
                                          <div>
                                            <h1 className="text-center text-base">
                                              FRAMEWORKS
                                            </h1>

                                            <div className="flex flex-col justify-center items-center text-sm gap-y-1 mt-2  sm:mt-0">
                                              <p className="font-semibold">
                                                TAILWIND CSS
                                              </p>
                                              <p className="font-semibold">
                                                MATERIAL UI
                                              </p>
                                              <p className="font-semibold">
                                                BOOTSTRAP
                                              </p>
                                              <p className="font-semibold">
                                                &nbsp;
                                              </p>
                                              <p className="font-semibold">
                                                &nbsp;
                                              </p>
                                            </div>
                                          </div>
                                          <div className="xs:pb-32 xs:-mt-6  xxs:pb-20 xxs:-mt-6">
                                            <h1 className="text-center text-base">
                                              TESTING LIBRARY
                                            </h1>

                                            <div className="flex flex-col justify-center items-center  text-sm gap-y-1 mt-2 sm:mt-0">
                                              <p className="font-semibold">
                                                JEST
                                              </p>
                                              <p className="font-semibold text-center">
                                                REACT TESTING LIBRARY
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </NavLink>
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </>
                          )}
                        </Popover>
                      </div>
                    </NavLink>
                  </div>

                  <NavLink
                    to="/portfolio"
                    onClick={() => setIsOpen(false)}
                    className="text-black block px-3 py-2 rounded-md text-lg font-bold"
                  >
                    Portfolio
                  </NavLink>

                  <NavLink
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="text-black  block px-3 py-2 rounded-md text-lg font-bold"
                  >
                    Contact
                  </NavLink>

                  <NavLink
                    to="/about"
                    onClick={() => setIsOpen(false)}
                    className="text-black block px-3 py-2 rounded-md text-lg font-bold"
                  >
                    About
                  </NavLink>
                </div>
              </div>
            )}
          </Transition>
        </nav>

        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"></div>
        </main>
      </div>
    </>
  );
};

export default Nav;
