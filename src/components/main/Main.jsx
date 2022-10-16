import React from 'react';
import TopBar from './inc/TopBar';
import BottomBar from './inc/BottomBar';
import SideBar from './inc/SideBar';

const Main = (props) => {
  return (
    <main className="bg-[#011627] text-white">
      <TopBar />
      <SideBar />
      <section>{props.children}</section>
      <BottomBar />
    </main>
  );
};

export default Main;
