"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Transition } from "@headlessui/react";

const Nav = () => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 py-2.5 z-50 sticky top-0 drop-shadow-sm">
      <div className="flex flex-wrap items-center justify-between max-w-screen-2xl px-4 mx-auto">
        <Link href="#" className="flex items-center">
          <Image
            src="https://www.svgrepo.com/show/499962/music.svg"
            width="50"
            height="50"
            className="h-6 mr-3 sm:h-9"
            alt="Landwind Logo"
          />
          <div className="flex flex-col">
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Wingspace
            </span>
            <span className=" text-gray-400 text-xs justify-end items-end flex italic">
              by Yube1
            </span>
          </div>
        </Link>
        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>

          <Link
            href="https://themesberg.com/product/tailwind-css/landing-page"
            className="text-white bg-[#E3311D] hover:bg-[#383838] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0  focus:outline-none "
          >
            Log In
          </Link>
          <button
            // data-collapse-toggle="mobile-menu-2"
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu-2"
            aria-expanded="true"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                className=" w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>

        <div
          className="items-center hidden justify-between w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {/* <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li> */}
            <li>
              <Link
                href="#space"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-[#E3311D] lg:hover:bg-transparent lg:border-0 lg:hover:text-[#E3311D] lg:p-0  "
              >
                Find a space
              </Link>
            </li>
            <li>
              <Link
                href="#pricing"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-[#E3311D] lg:hover:bg-transparent lg:border-0 lg:hover:text-[#E3311D] lg:p-0 "
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#features"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-[#E3311D] lg:hover:bg-transparent lg:border-0 lg:hover:text-[#E3311D] lg:p-0 "
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#aminities"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-[#E3311D] lg:hover:bg-transparent lg:border-0 lg:hover:text-[#E3311D] lg:p-0 "
              >
                Aminities
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-[#E3311D] lg:hover:bg-transparent lg:border-0 lg:hover:text-[#E3311D] lg:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-500 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div
            className="md:hidden justify-evenly items-center mt-10 flex flex-col w-full text-center"
            id="mobile-menu"
          >
            <div ref={ref} className="px-2 pb-3 pt-2 sm:px-3 w-full">
              <a
                href="#"
                className="block rounded-md px-3 py-2 mb-4 text-xl  font-medium text-black hover:bg-gray-700"
              >
                Find a space
              </a>

              <a
                href="#pricing"
                className="block rounded-md px-3 py-2 mb-4 text-xl font-medium text-black hover:bg-gray-700 hover:text-white"
              >
                Pricing
              </a>

              <a
                href="#features"
                className="block rounded-md px-3 py-2 mb-4 text-xl  font-medium text-black hover:bg-gray-700 hover:text-white"
              >
                Features
              </a>

              <a
                href="#aminities"
                className="block rounded-md px-3 py-2 mb-4 text-xl  font-medium text-black hover:bg-gray-700 hover:text-white"
              >
                Aminities
              </a>

              <a
                href="#contact"
                className="block rounded-md px-3 py-2 mb-4 text-xl  font-medium text-black hover:bg-gray-700 hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>
        </Transition>
      </div>
    </nav>
  );
};

export default Nav;
