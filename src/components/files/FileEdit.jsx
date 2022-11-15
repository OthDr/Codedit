import React from 'react';
import { useState } from 'react';
import BottomBar from '../main/inc/BottomBar';
import SideBar from '../main/inc/SideBar';
import TopBar from '../main/inc/TopBar';
import Main from '../main/Main';

const FileEdit = () => {
  const [data, setData] = useState({});

  const childToParent = (fileName, fileExtension, fileContent, folderPath) => {
    setData({
      fileName: fileName,
      fileExtension: fileExtension,
      fileContent: fileContent,
      folderPath: folderPath,
    });
  };
  // childToParent();
  const FileToBar = () => {};
  console.log(data);
  return (
    <div className="bg-slate-900/90 text-white flex flex-col justify-between h-screen">
      <TopBar
        fileName={data.fileName}
        fileExtension={data.fileExtension}
        folderPath={data.folderPath}
      />
      <SideBar childToParent={childToParent} />

      {/* {data.fileContent ? (
        <div className="flex-auto mr-32 pr-4">
          <textarea
            className="text-sm block w-full h-full  bg-transparent placeholder-gray-300 text-white border-1 ring-transparent focus:ring-0 focus:border-sky-500"
            value={data.fileContent}
            spellCheck={false}
          />
        </div>
      ) : (
        ''
      )} */}
      <textarea
            className="text-sm block w-full h-full  bg-transparent placeholder-gray-300 text-white border-1 ring-transparent focus:ring-0 focus:border-sky-500"
            value={data.fileContent}
            spellCheck={false}
          />
        
      <BottomBar />
    </div>
  );
};

export default FileEdit;
