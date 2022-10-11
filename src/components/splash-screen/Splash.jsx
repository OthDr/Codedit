import React from 'react'
import { DiCode } from "react-icons/di";
import { TiArrowRightThick } from "react-icons/ti";

const Splash = () => {
    return (
        <div className='w-full h-screen p-[10%] bg-slate-900'>
            <div className="mb-[12%] w-fit mx-auto flex items-center ">
                <h1 className='w-fit text-indigo-400 text-4xl font-bold '>Codeedit</h1>
                <DiCode className='text-indigo-500' size={65} />
            </div>
            <button className='w-fit mx-auto flex items-center text-indigo-200 text-2xl font-bold animate-bounce'>Start <TiArrowRightThick className='text-indigo-200 mx-2' size={30} /></button>
        </div>
    )
}

export default Splash