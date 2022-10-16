import React from 'react';

const TopBar = () => {
  return (
    <nav className="w-full shadow-sm shadow-sky-900 mb-2">
      <div className="flex items-center">
        {/* Title Section */}
        <h1 className="w-fit text-left font-bold text-xl p-2 text-sky-500">
          {'</ '}CodeEdit{' >'}
        </h1>
        {/* Project Directory Section */}
        <div className="flex-auto text-gray-300 flex justify-center">
          <span>~/Documents/AwsomeProject/app.js</span>
        </div>
      </div>

      {/* Opened Files Section */}
      <div className="flex justify-start items-center">
        <div className="flex justify-evenly items-center w-1/12 p-2 border-t border-r border-sky-900 rounded-t">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-yellow-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
          </span>
          <span className="text-sky-500 stroke-1">app.js</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>
        <div className="flex justify-evenly items-center w-1/12 p-2 border-t border-r border-sky-900 rounded-t">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
          </span>
          <span className="text-sky-500">index.html</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
