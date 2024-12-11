import React from "react";

const HomeScreen = () => {
  return (
    <>
      {/* Header Section */}
      <div className="sm:flex sm:items-center grid justify-center p-4 border-b bg-white">
        <div className="flex items-center mb-5 sm:mb-0 lg:ml-60 flex-1">
          <img src="/src/assets/LOGO.svg" alt="logo" className="h-12 ml-4" />
          <div className="ml-4">
            <h1 className="text-xl font-semibold text-gray-800">
              Referral Buddy
            </h1>
            <p className="text-sm text-gray-500">Your Referral Partner</p>
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="flex w-full max-w-md">
            <input
              type="text"
              placeholder="Search Jobs..."
              className="flex-grow h-10 p-3 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="h-10 bg-blue-500 text-white px-4 rounded-r-full hover:bg-blue-600">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-wrap justify-center  min-h-screen">
        <div className="flex">
          {/* Left Section */}
          <div className="flex-1 md:border-r max-w-xs p-4 hidden md:block">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="relative">
                <img
                  src="https://avatars.githubusercontent.com/u/41060734?v=4"
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg mx-auto"
                />
              </div>
              <div className="text-center mt-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Shriyash Parandkar
                </h2>
                <p className="text-sm text-gray-500">
                  Software Engineer at FIS Global
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-800">
                Preferences
              </h3>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700">Location</h4>
                <div className="mt-2 space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">Pune</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">Mumbai</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">Delhi</span>
                  </label>
                </div>

                <h4 className="text-sm font-medium text-gray-700 mt-4">
                  Experience
                </h4>
                <div className="mt-2 space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">&gt; 5 years</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">2-5 years</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">0-2 years</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex-1 md:border-r md:flex-[2] p-4">
            <div className="bg-white max-w-[800px] rounded-2xl shadow-lg p-6">
              <div className="flex gap-4 items-center">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-amazon-logo-icon-download-in-svg-png-gif-file-formats--brand-social-media-card-pack-logos-icons-1583154.png?f=webp"
                  alt="Company Logo"
                  className="w-12 h-12 rounded-full border p-1"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Software Engineer
                  </h3>
                  <p className="text-sm text-gray-500">Amazon</p>
                  <p className="text-sm text-gray-400">Sydney, NSW, AUS</p>
                </div>
              </div>
              <div className="mt-4 text-gray-600 text-sm">
                <p>
                  <strong>Job ID:</strong> 2538128
                </p>
                <p className="mt-2">
                  <strong>Description:</strong> Bachelor's
                  degree in Computer Science or related technical field, or
                  equivalent practical experience. 3+ years relevant experience
                  in software development. Experience working with algorithms,
                  data structures, complexity analysis, and object-oriented
                  software design in Linux/Unix environments. Proficiency with
                  one or more general purpose programming languages including
                  but not limited to: Python, Java, Typescript, Scala, Golang,
                  C++, or C#.
                </p>
              </div>

              <div className="mt-4 flex justify-between border-t-2 align-middle pt-4">
                <a
                  href="https://www.amazon.jobs/en/jobs/2538128/software-engineer"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Share
                </a>
                <a
                  href="https://www.amazon.jobs/en/jobs/2538128/software-engineer"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  View Job Posting
                </a>
                <a
                  href="https://www.amazon.jobs/en/jobs/2538128/software-engineer"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Request for Referral
                </a>
              </div>
             
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden lg:block flex-1 max-w-xs p-4">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800">
                Saved Posts
              </h3>
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                Notifications
              </h3>
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                Connections
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
