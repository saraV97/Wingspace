import Image from "next/image";
import React from "react";

const TypeOfWorkSpace = () => {
  return (
    <section className="mb-2 md:mb-10">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
          <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
            <span className="inline-block mb-1 sm:mb-4">
              Spaces Designed for Every
              <br className="hidden md:block" />
              Way You Work.
            </span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
          <p className="text-gray-700 lg:text-sm lg:max-w-md">
            Discover a workspace that fits your style, whether you need the
            focus of a private office, the flexibility of a hot desk, or the
            creativity of collaborative areas. From solo work to team meetings,
            our spaces are designed to support you. Explore our range of options
            and find your perfect spot to thrive!
          </p>
        </div>
        <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
          <a href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <Image
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                width={80}
                height={80}
                src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Private Office
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Enjoy a dedicated, secure office with privacy and personalized
                  amenities to boost your focus and productivity.
                </p>
              </div>
            </div>
          </a>
          <a href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <Image
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                width={80}
                height={80}
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Co-Working Space
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Work alongside a vibrant community in flexible, open seating
                  areas designed for collaboration and networking.
                </p>
              </div>
            </div>
          </a>
          <a href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <Image
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                width={80}
                height={80}
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Event Space
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  A versatile, spacious area perfect for networking events,
                  workshops, and social gatherings, customizable to suit your
                  needs.
                </p>
              </div>
            </div>
          </a>
          <a href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <Image
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                width={80}
                height={80}
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Meeting Rooms
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Host professional meetings and presentations in fully equipped
                  rooms with AV capabilities and comfortable seating.
                </p>
              </div>
            </div>
          </a>
        </div>
        {/* <div className="text-center">
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            View gallery
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default TypeOfWorkSpace;
