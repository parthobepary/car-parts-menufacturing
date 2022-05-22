import React from "react";

const BusinessSummery = () => {
  return (
    <div className="my-20">
      <div className="mb-10">
        <h1 className="text-4xl text-primary font-bold">Your Business Our Trust</h1>
        <h4 className=" text-2xl mt-2">Try to understand customer expectation</h4>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-3/4 mx-auto">
          <div className="bg-slate-700 mr-10 rounded-2xl text-white  py-5 px-3 ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-1/4 mx-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h1 className=" my-2 text-5xl font-bold ">300+</h1>
            <p className="text-2xl">Happy clients</p>
          </div>
          <div className="bg-slate-800 mr-10 rounded-2xl text-white py-5 px-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-1/4 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                />
              </svg>
            </div>
            <h1 className=" my-2 text-5xl font-bold ">34</h1>
            <p className="text-2xl">Countries</p>
          </div>
          <div className="bg-slate-500 rounded-2xl text-white mr-10 py-5 px-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-1/4 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h1 className=" my-2 text-5xl font-bold ">326+</h1>
            <p className="text-2xl">Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummery;
