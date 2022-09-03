import React, { useState } from 'react';
import TopBar from './inc/TopBar';
import BottomBar from './inc/BottomBar';
import SideBar from './inc/SideBar';

const Main = (props) => {
  const [content, useContent] = useState('');
  return (
    <main className="bg-[#011627] text-white flex flex-col justify-between h-screen">
      <TopBar />
      <SideBar />
      {/* <button onClick={readFile('Welcome.jsx')}>Click</button> */}
      {/* <h1>{content}</h1> */}
      <section className="flex-auto">{props.children}</section>
      <BottomBar />
    </main>
  );
};

export default Main;
