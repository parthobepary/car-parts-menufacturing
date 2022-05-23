import React from "react";

const Education = () => {
  return (
    <div className="my-10">
      <h1 className="tracking-wider text-2xl text-primary font-bold">
        Education
      </h1>

      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto gap-4">
          <div className="text-center bg-slate-500 shadow-2xl rounded-lg mr-2 py-4 px-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-1/4 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-white text-3xl font-bold tracking-wider">
                SSC (2014)
              </h1>
              <p className="my-3 text-white">A.K Institution, Daihary </p>
              <button className="btn btn-xs btn-secondary">Science</button>{" "}
              <button className="btn btn-xs btn-accent">4.57</button>
            </div>
          </div>
          <div className="text-center bg-slate-500 shadow-2xl rounded-lg mr-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-1/4 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-white text-3xl font-bold tracking-wider">
                DIPLOMA (2018)
              </h1>
              <p className="my-3 text-white">
                Barishal,polytechnic institute, barishal{" "}
              </p>
              <button className="btn btn-xs btn-secondary">
                Computer tech.
              </button>{" "}
              <button className="btn btn-xs btn-accent">3.57</button>
            </div>
          </div>
          <div className="text-center bg-slate-500 shadow-2xl rounded-lg mr-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-1/4 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-white text-3xl font-bold tracking-wider">
                BSC IN CSE (2022)
              </h1>
              <p className="my-3 text-white">
                Dhaka International univercity, dhaka{" "}
              </p>
              <button className="btn btn-xs btn-secondary">Science</button>{" "}
              <button className="btn btn-xs btn-accent">4.57</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-indigo-400">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="my-4 px-32">
              <h1 className="mb-3">My Skill</h1>
              <hr />
            </div>
            <div className="my-4">
              <button className="btn btn-xs btn-secondary">CSS</button>
              <button className="btn btn-xs btn-secondary mx-5">HTML</button>
              <button className="btn btn-xs btn-secondary">JS</button>
              <button className="btn btn-xs btn-secondary mx-5">
                REACT.JS
              </button>
              <button className="btn btn-xs btn-secondary">EXRESS.JS</button>
              <button className="btn btn-xs btn-secondary mx-5">NODE.JS</button>
              <button className="btn btn-xs btn-secondary">MONGODB</button>
            </div>
          </div>
          <div>
            <div className="my-4 px-32">
              <h1 className="mb-3">My Social Link</h1>
              <hr />
            </div>
            <div>
                <a className="btn btn-xs btn-secondary" target='blank' href="https://www.facebook.com/">Facebook</a>
                <a className="btn btn-xs btn-secondary mx-10" target='blank'  href="https://github.com/pallobbiwas">Email</a>
                <a className="btn btn-xs btn-secondary" target='blank'  href="pallobbiswas326@gmail.com">Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
