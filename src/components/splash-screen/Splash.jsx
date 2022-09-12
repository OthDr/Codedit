import React from 'react';
import { DiCode } from 'react-icons/di';
import { TiArrowRightThick } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const Splash = () => {
  return (
    <div className="w-full h-screen p-[10%] bg-[#011627]">
      <div className="mb-[12%] w-fit mx-auto flex items-center ">
        <h1 className="w-fit text-sky-500 text-4xl font-bold ">Codeedit</h1>
        <DiCode className="text-sky-600" size={65} />
      </div>
      <Link
        to="/file"
        className="w-fit mx-auto flex items-center text-sky-300 text-2xl font-bold animate-bounce"
      >
        Start <TiArrowRightThick className="text-sky-300 mx-2" size={30} />
      </Link>
    </div>
  );
};

export default Splash;
