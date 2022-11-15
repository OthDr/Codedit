import { useState } from 'react';
import { TiDocument } from 'react-icons/ti';

const TopBar = (props) => {
  return (
    <nav className="bg-[#011627] w-full shadow-sm shadow-sky-900 py-2 ">
      <div className="flex items-center">
        {/* Title Section */}
        <h1 className="w-fit text-left font-bold text-xl p-2 text-sky-500">
          {'</ '}CodeEdit{' >'}
        </h1>
        {/* Project Directory Section */}
        <div className="flex-auto text-gray-300 flex justify-center">
          <span>
            {props.folderPath ? `${props.folderPath}/${props.fileName}` : ''}
          </span>
        </div>
      </div>

      {/* Opened Files Section */}
      {props.fileName ? (
        <div className="flex justify-start items-center">
          <div className="flex justify-evenly items-center p-2 border-t border-r border-sky-900 rounded-t">
            {props.fileExtension === '.js' ? (
              <span className="p-2">
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
            ) : (
              <TiDocument className="p-2 text-gray-500" size={40} />
            )}
            <span className="text-sky-500 py-1 px-2">{props.fileName}</span>
            <span className="p-2">
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
      ) : (
        ''
      )}
    </nav>
  );
};

export default TopBar;
