import {React, useState} from 'react';
const [sideBar, setSideBar] = useState(true);

const SideBar = () => {
  return 
  <aside className='absolute top-0 left-0 h-screen w-80 bg-[#011627]'>
    <h1>SideBar</h1>
  </aside>;
};

export default SideBar;
