import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="mt-2 md:mt-10 mb-2 md:mb-10">
      <div class="px-8 py-24 mx-auto md:px-12 lg:px-40 max-w-screen-2xl flex flex-col lg:h-svh justify-center">
        <div class="flex flex-col ">
          <div class="prose text-gray-500 prose-sm prose-headings:font-normal prose-headings:text-xl">
            <div>
              <h1>Simplified markup</h1>
              <p class="text-balance">
                See the code for this page to see how you can use Astro to
                simplify your markup.
              </p>
            </div>
          </div>
          <div class="mt-6 border-t pt-12">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center ">
              <div>
                {" "}
                <span class="text-gray-600  uppercase text-xs font-medium ">
                  {" "}
                  Because why not{" "}
                </span>
                <p class="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance">
                  {" "}
                  Designed for Comfort and Productivity{" "}
                </p>
                <p class="text-sm  mt-4 text-gray-700 text-balance">
                  {" "}
                  Find a flexible workspace equipped with everything you need to
                  work effectively and stay comfortable throughout the day.{" "}
                </p>
                <div class="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-950">
                  <div class="inline-flex items-center gap-2  text-xs text-gray-700">
                    {" "}
                    <svg
                      class="icon icon-tabler text-gray-700 size-4 icon-tabler-360"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M17 15.328c2.414 -.718 4 -1.94 4 -3.328c0 -2.21 -4.03 -4 -9 -4s-9 1.79 -9 4s4.03 4 9 4"></path>
                      <path d="M9 13l3 3l-3 3"></path>
                    </svg>{" "}
                    <span class="text-gray-950 font-medium text-sm">
                      {" "}
                      Ergonomic Seating{" "}
                    </span>{" "}
                  </div>
                  <div class="inline-flex items-center gap-2  text-xs text-gray-700">
                    {" "}
                    <svg
                      class="icon icon-tabler text-gray-700 size-4 icon-tabler-antenna-bars-3"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M6 18l0 -3"></path>
                      <path d="M10 18l0 -6"></path>
                      <path d="M14 18l0 .01"></path>
                      <path d="M18 18l0 .01"></path>
                    </svg>{" "}
                    <span class="text-gray-950 font-medium text-sm">
                      {" "}
                      Private Phone Booths{" "}
                    </span>{" "}
                  </div>
                  <div class="inline-flex items-center gap-2  text-xs text-gray-700">
                    {" "}
                    <svg
                      class="icon icon-tabler text-gray-700 size-4 icon-tabler-load-balancer"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 13m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                      <path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                      <path d="M12 16v3"></path>
                      <path d="M12 10v-7"></path>
                      <path d="M9 6l3 -3l3 3"></path>
                      <path d="M12 10v-7"></path>
                      <path d="M9 6l3 -3l3 3"></path>
                      <path d="M14.894 12.227l6.11 -2.224"></path>
                      <path d="M17.159 8.21l3.845 1.793l-1.793 3.845"></path>
                      <path d="M9.101 12.214l-6.075 -2.211"></path>
                      <path d="M6.871 8.21l-3.845 1.793l1.793 3.845"></path>
                    </svg>{" "}
                    <span class="text-gray-950 font-medium text-sm">
                      {" "}
                      Fully Stocked Kitchen{" "}
                    </span>{" "}
                  </div>
                  <div class="inline-flex items-center gap-2  text-xs text-gray-700">
                    {" "}
                    <svg
                      class="icon icon-tabler text-gray-700 size-4 icon-tabler-brand-speedtest"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5.636 19.364a9 9 0 1 1 12.728 0"></path>
                      <path d="M16 9l-4 4"></path>
                    </svg>{" "}
                    <span class="text-gray-950 font-medium text-sm">
                      {" "}
                      Secure Storage{" "}
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div class="h-full md:order-first ">
                {" "}
                <Image
                  src="https://i.pinimg.com/564x/59/41/a0/5941a02c048f6226031a0487451c2651.jpg"
                  alt="#_"
                  width={60}
                  height={60}
                  class=" bg-gray-200 shadow-box rounded-2xl shadow-gray-500/30 overflow-hidden aspect-square w-[35rem] h-80 object-cover object-center"
                />{" "}
              </div>
            </div>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center md:flex-row-reverse">
              <div>
                {" "}
                <span class="text-gray-600  uppercase text-xs font-medium ">
                  {" "}
                  Just because we can{" "}
                </span>
                <p class="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance">
                  {" "}
                  A Community to Connect and Grow{" "}
                </p>
                <p class="text-sm  mt-4 text-gray-700 text-balance">
                  {" "}
                  Take advantage of resources and a supportive environment that
                  foster collaboration, networking, and professional growth.{" "}
                </p>
                <div class="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-950">
                  <div class="inline-flex items-center gap-2  text-xs text-gray-700">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-database text-gray-700 size-4"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0"></path>
                      <path d="M4 6v6a8 3 0 0 0 16 0v-6"></path>
                      <path d="M4 12v6a8 3 0 0 0 16 0v-6"></path>
                    </svg>{" "}
                    <span class="text-gray-950 font-medium text-sm">
                      {" "}
                      Community Events{" "}
                    </span>{" "}
                  </div>
                  <div class="inline-flex items-center gap-2  text-xs text-gray-700">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-building text-gray-700 size-4"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 21l18 0"></path>
                      <path d="M9 8l1 0"></path>
                      <path d="M9 12l1 0"></path>
                      <path d="M9 16l1 0"></path>
                      <path d="M14 8l1 0"></path>
                      <path d="M14 12l1 0"></path>
                      <path d="M14 16l1 0"></path>
                      <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path>
                    </svg>{" "}
                    <span class="text-gray-950 font-medium text-sm">
                      {" "}
                      Meeting Rooms{" "}
                    </span>{" "}
                  </div>
                  <div class="inline-flex items-center gap-2  text-xs text-gray-700">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-augmented-reality-2 text-gray-700 size-4"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M10 21h-2a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v3.5"></path>
                      <path d="M17 17l-4 -2.5l4 -2.5l4 2.5v4.5l-4 2.5z"></path>
                      <path d="M13 14.5v4.5l4 2.5"></path>
                      <path d="M17 17l4 -2.5"></path>
                      <path d="M11 4h2"></path>
                    </svg>{" "}
                    <span class="text-gray-950 font-medium text-sm">
                      {" "}
                      Outdoor Workspace{" "}
                    </span>{" "}
                  </div>
                  <div class="inline-flex items-center gap-2  text-xs text-gray-700">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-time-duration-0 text-gray-700 size-4"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 12v.01"></path>
                      <path d="M21 12v.01"></path>
                      <path d="M12 21v.01"></path>
                      <path d="M12 3v.01"></path>
                      <path d="M7.5 4.2v.01"></path>
                      <path d="M16.5 4.2v.01"></path>
                      <path d="M16.5 19.8v.01"></path>
                      <path d="M7.5 19.8v.01"></path>
                      <path d="M4.2 16.5v.01"></path>
                      <path d="M19.8 16.5v.01"></path>
                      <path d="M19.8 7.5v.01"></path>
                      <path d="M4.2 7.5v.01"></path>
                      <path d="M10 11v2a2 2 0 1 0 4 0v-2a2 2 0 1 0 -4 0z"></path>
                    </svg>{" "}
                    <span class="text-gray-950 font-medium text-sm">
                      {" "}
                      Mail & Package Reception{" "}
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div class="h-full ">
                {" "}
                <Image
                  src="https://i.pinimg.com/564x/4e/a7/ff/4ea7ff230ad9f3bc1c30b1b6cbaccad3.jpg"
                  alt="#_"
                  width={100}
                  height={100}
                  class=" bg-gray-200 shadow-box rounded-2xl shadow-gray-500/30 overflow-hidden aspect-square w-[35rem] h-80 object-cover object-center"
                />{" "}
              </div>
            </div>
          </div>

          {/* <div class="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center p-2">
            <div class="pointer-events-auto flex w-full max-w-md divide-x divide-neutral-200 rounded-lg bg-white shadow-xl border">
              <div class="flex w-0 flex-1 items-center p-4">
                <div class="w-full">
                  <p class="text-sm font-medium text-neutral-900">Tutorial</p>
                  <p class="mt-1 text-sm text-neutral-500">
                    How to simplify your code and avoid repeating your markup
                    with Astrojs and Tailwind CSS
                  </p>
                  <p class="mt-2 text-xs text-orange-500 underline">
                    {" "}
                    <a href="https://lexingtonthemes.com">
                      by © Lexington Themes
                    </a>{" "}
                  </p>
                </div>
              </div>
              <div class="flex">
                <div class="flex flex-col divide-y divide-neutral-200">
                  <div class="flex h-0 flex-1">
                    {" "}
                    <a
                      href="https://lexingtonthemes.com/tutorials/how-to-simplify-your-code-and-avoid-repeating-your-markup-with-astrojs-and-tailwind-css/"
                      type="button"
                      class="flex w-full items-center justify-center rounded-none rounded-tr-lg border border-transparent px-4 py-3 text-sm font-medium text-orange-600 hover:text-orange-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      Tutorial
                    </a>{" "}
                  </div>
                  <div class="flex h-0 flex-1">
                    {" "}
                    <a
                      href="https://github.com/Lexington-Themes/lexington-tutorials/blob/main/src/pages/simplified-markup/index.astro"
                      class="flex w-full items-center justify-center rounded-none rounded-br-lg border border-transparent px-4 py-3 text-sm font-medium text-neutral-700 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      Get the code
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Features;
