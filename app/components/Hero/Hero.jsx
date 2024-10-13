import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="h-[80vh] lg:h-[100vh] flex flex-col justify-center items-center bg-hero-image bg-cover">
      {/* <Image
        className="object-contain"
        src="https://www.globalworkspace.org/wp-content/uploads/Coworking-Space-Design.jpg"
        alt="bg_image"
        width={400}
        height={400}
      ></Image> */}
      <div>
        <h1 className="text-center text-4xl md:text-5xl pb-10 px-20">
          {/* <span>Empowering your Productivity</span>
          <br />
          in a dynamic Workspace. */}
          <span className="relative">
            <svg
              viewBox="0 0 52 24"
              fill="#e5e5e5"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Empowering</span>
          </span>{" "}
          your Productivity
          <br />
          in a dynamic Workspace.
        </h1>
      </div>
      <div className="flex gap-4 items-center flex-col sm:flex-row mb-10">
        <a
          className="rounded-full border border-solid border-transparent bg-[#E3311D] transition-colors flex items-center justify-center text-background gap-2 hover:bg-[#383838] text-white text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 "
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            src="https://nextjs.org/icons/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          Get Started
        </a>
        <a
          className="rounded-full border border-solid bg-white bg-opacity-80 border-black/[.08] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-8 md:px-4 sm:px-5 sm:min-w-44"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lets Talk
        </a>
      </div>
      <div className=" pt-5">
        <a
          href="/"
          aria-label="Scroll down"
          className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="#E3311D"
          >
            <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
          </svg>
        </a>
      </div>
    </section>

    // <div className="px-4 py-16 mx-auto h-screen flex flex-col justify-center items-center sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    //   <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
    //     <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
    //       <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
    //         <h2 className="max-w-4xl text-center text-6xl pb-10 px-20 leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
    //           <span className="relative inline-block">
    //             <svg
    //               viewBox="0 0 52 24"
    //               fill="#e5e5e5"
    //               className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
    //             >
    //               <defs>
    //                 <pattern
    //                   id="e77df901-b9d7-4b9b-822e-16b2d410795b"
    //                   x="0"
    //                   y="0"
    //                   width=".135"
    //                   height=".30"
    //                 >
    //                   <circle cx="1" cy="1" r=".7" />
    //                 </pattern>
    //               </defs>
    //               <rect
    //                 fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
    //                 width="52"
    //                 height="24"
    //               />
    //             </svg>
    //             <span className="relative">Empowering</span>
    //           </span>{" "}
    //           your Productivity
    //           <br />
    //           in a dynamic Workspace.
    //         </h2>
    //         <p className="text-base text-gray-700 md:text-lg">
    //           Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    //           accusantium doloremque rem aperiam, eaque ipsa quae.
    //         </p>
    //       </div>
    //       <div className="flex gap-4 items-center flex-col sm:flex-row">
    //         <a
    //           className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <Image
    //             className="dark:invert"
    //             src="https://nextjs.org/icons/vercel.svg"
    //             alt="Vercel logomark"
    //             width={20}
    //             height={20}
    //           />
    //           Get Started
    //         </a>
    //         <a
    //           className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Lets Talk
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Hero;
