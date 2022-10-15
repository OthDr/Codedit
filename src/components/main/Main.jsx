import React from 'react';
import TopBar from './inc/TopBar';
import BottomBar from './inc/BottomBar';
import SideBar from './inc/SideBar';

const Main = (props) => {
  return (
    <div>
      <TopBar />
      <SideBar />
      <div>{props.children}</div>
      <BottomBar />
    </div>
  );
};

export default Main;
