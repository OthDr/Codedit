import React from 'react';
import TopBar from './inc/TopBar';
import BottomBar from './inc/BottomBar';
import SideBar from './inc/SideBar';

const Main = () => {
  return (
    <div>
      <TopBar />
      <SideBar />

      <BottomBar />
    </div>
  );
};

export default Main;
