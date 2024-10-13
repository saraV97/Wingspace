import React from "react";

const Pricing = () => {
  return (
    <div
      className="sm:flex sm:flex-col sm:align-center p-4 lg:p-10"
      id="pricing"
    >
      <div className="relative self-center bg-slate-200 rounded-lg p-0.5 flex">
        <button
          type="button"
          className="relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 bg-slate-50 border-slate-50 text-slate-900 shadow-sm"
        >
          Monthly billing
        </button>
        <button
          type="button"
          className="ml-0.5 relative w-1/2 border rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 border-transparent text-slate-900"
        >
          Yearly billing
        </button>
      </div>
      <div className="mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 md:max-w-7xl px-0 lg:px-8 md:mx-auto xl:grid-cols-3">
        <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
          <div className="p-6">
            <h2 className="text-xl leading-6 font-bold text-slate-900">
              Individual
            </h2>
            <p className="mt-2 text-base text-slate-700 leading-tight">
              Perfect for freelancers and remote workers who need flexible
              workspace solutions.
            </p>
            <p className="mt-8">
              <span className="text-4xl font-bold text-slate-900 tracking-tighter">
                ₹10,000
              </span>

              <span className="text-base font-medium text-slate-500">/mo</span>
            </p>
            <a
              href="/sign-up"
              className="mt-8 block w-full hover:bg-slate-900 bg-[#E3311D] rounded-md py-2 text-sm font-semibold text-white text-center"
            >
              Join as a Individual
            </a>
          </div>
          <div className="pt-6 pb-8 px-6">
            <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
              What&apos;s included
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              <li className="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span className="text-base text-slate-700">
                  Hot desk access
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span className="text-base text-slate-700">
                  1,000 visits/mo
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span className="text-base text-slate-700">
                  High-speed WiFi
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span className="text-base text-slate-700">
                  Free coffee & snacks
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span className="text-base text-slate-700">
                  Community events
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
          <div className="p-6">
            <h2 className="text-xl leading-6 font-bold text-slate-900">
              Bussines
            </h2>
            <p className="mt-2 text-base text-slate-700 leading-tight">
              For small teams needing dedicated workspaces.
            </p>
            <p className="mt-8">
              <span className="text-4xl font-bold text-slate-900 tracking-tighter">
                ₹20,000
              </span>

              <span className="text-base font-medium text-slate-500">/mo</span>
            </p>
            <a
              href="/sign-up"
              className="mt-8 block w-full hover:bg-slate-900 bg-[#E3311D] rounded-md py-2 text-sm font-semibold text-white text-center"
            >
              Join as a Bussines
            </a>
          </div>
          <div className="pt-6 pb-8 px-6">
            <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
              What&apos;s included
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              <li className="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span className="text-base text-slate-700">
                  24/7 workspace access
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span className="text-base text-slate-700">
                  Dedicated desks or offices
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span className="text-base text-slate-700">
                  Printing & mail services
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span className="text-base text-slate-700">
                  Business workshops
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span className="text-base text-slate-700">
                  Meeting room credits
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
          <div className="p-6">
            <h2 className="text-xl leading-6 font-bold text-slate-900">
              Enterprise
            </h2>
            <p className="mt-2 text-base text-slate-700 leading-tight">
              Customizable solutions for larger organizations.
            </p>
            <p className="mt-8">
              <span className="text-4xl font-bold text-slate-900 tracking-tighter">
                ₹30,000
              </span>

              <span className="text-base font-medium text-slate-500">/mo</span>
            </p>
            <a
              href="/sign-up"
              className="mt-8 block w-full hover:bg-slate-900 bg-[#E3311D] rounded-md py-2 text-sm font-semibold text-white text-center"
            >
              Join as a Enterprise
            </a>
          </div>
          <div className="pt-6 pb-8 px-6">
            <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
              What&apos;s included
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              <li className="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span className="text-base text-slate-700">
                  All Standard features
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span className="text-base text-slate-700">
                  Private offices & branding
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span className="text-base text-slate-700">
                  Priority meeting room access
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span className="text-base text-slate-700">
                  Enhanced security
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 h-5 w-5 text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span className="text-base text-slate-700">
                  Tech & AV support
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
