import { React, useState } from 'react';


const SideBar = () => {
  const [sideBar, setSideBar] = useState(true);

  return (
    <aside className="w-44 border-l border-sky-600 bg-[#011627] absolute right-0 h-full">
      <h1 className="text-lg font-semibold uppercase text-center">
        AwsomeProject
      </h1>
    </aside>
  );
};

export default SideBar;
