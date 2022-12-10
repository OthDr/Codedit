import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import BottomBar from '../main/inc/BottomBar';
import SideBar from '../main/inc/SideBar';
import TopBar from '../main/inc/TopBar';
import Main from '../main/Main';

const FileEdit = () => {
  const [display, setDisplay] = useState(true);
  const [data, setData] = useState({});
  const [fileContent, setFileContent] = useState('');
  const [options, setOptions] = useState([
    'let',
    'var',
    'if',
    'console',
    'console.log()',
    'import',
    'document',
    '.getElementById',
    'await',
    'break',
    'case',
    'catch',
    'class',
    'const',
    'continue',
    'debugger',
    'default',
    'delete',
    'do',
    'else',
    'enum',
    'export',
    'extends',
    'false',
    'finally',
    'for',
    'function',
    'if',
    'import',
    'in',
    'instanceof',
    'new',
    'null',
    'return',
    'super',
    'switch',
    'this',
    'throw',
    'true',
    'try',
    'typeof',
    'var',
    'void',
    'while',
    'with',
    'yield',
  ]);
  const [searchInput, setSearchInput] = useState('');
  const [searchFilter, setSearchFilter] = useState([]);
  // const [searchFocus, setSearchFocus] = useState(false);
  const searchFocus = useRef();

  const handleFilter = (event) => {
    const searchKeyWord = event.target.value;
    setSearchInput(searchKeyWord);
    const newSearch = options.filter((value) => {
      if (value === searchKeyWord) {
        return value;
      } else {
        return value.includes(searchKeyWord);
      }
    });
    if (searchKeyWord === '') {
      setSearchFilter([]);
    } else {
      setSearchFilter(newSearch);
      console.log(searchFilter);
    }
  };
  const childToParent = (fileName, fileExtension, fileContent, folderPath) => {
    setData({
      fileName: fileName,
      fileExtension: fileExtension,
      fileContent: fileContent,
      folderPath: folderPath,
    });
    setFileContent(fileContent);
  };
  // childToParent();

  useEffect(() => {
    const callback = (event) => {
      // event.metaKey - pressed Command key on Macs
      // event.ctrlKey - pressed Control key on Linux or Windows
      // if ((event.metaKey || event.ctrlKey) && event.code === 'Space') {
      //   setDisplay(display === true ? false : true);
      //   console.log(display);
      // }
      if ((event.metaKey || event.ctrlKey) && event.code === 'Space') {
        // setDisplay(display === true ? false : true);
        console.log('Slash key pressed');
        searchFocus.current.focus();
      }
    };
    document.addEventListener('keydown', callback);
    return () => {
      document.removeEventListener('keydown', callback);
    };
  }, []);

  const updateCodeArea = (code) => {
    setFileContent(fileContent + code);
    setDisplay(false);
  };

  // const input = document.getElementById('myInput');

  // function showposition(event) {
  //   document.getElementById('output').innerHTML +=
  //     ' ' + event.target.selectionStart;
  // }
  return (
    <div className="relative bg-slate-900/90 text-white flex flex-col justify-between h-screen">
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
      <div className="flex justify-start items-start h-full">
        <div className="w-1/6 h-full">
          <input
            type="text"
            className="text-sm block w-full p-2 bg-transparent placeholder-gray-300 text-white border-1 ring-transparent focus:ring-0 focus:border-sky-500"
            value={searchInput}
            onChange={handleFilter}
            placeholder="Press 'Ctrl + Space' to search code"
            spellCheck={false}
            ref={searchFocus}
          />
          <div className="border-gray-600 shadow-lg shadow-sky-600">
            {searchFilter.map((value, key) => {
              switch (value) {
                case 'class':
                  const class1 = 'class MyClass { }\n';
                  const class2 = 'public class MyClass { }\n';
                  const class3 = 'private class MyClass { } \n';
                  return (
                    <>
                      <span className="text-white text-lg p-">{value}</span>
                      <div
                        onClick={() => updateCodeArea(class1)}
                        className="flex flex-col border border-b border-gray-600 p-2 cursor-pointer hover:bg-gray-700"
                        key={key}
                        tabIndex="0"
                      >
                        <span className="px-1 text-gray-400">{class1}</span>
                      </div>
                      <div
                        onClick={() => updateCodeArea(class2)}
                        className="flex flex-col border border-b border-gray-600 p-2 cursor-pointer hover:bg-gray-700"
                        key={key}
                        tabIndex="0"
                      >
                        <span className="px-1 text-gray-400">{class2}</span>
                      </div>
                      <div
                        onClick={() => updateCodeArea(class3)}
                        className="flex flex-col border border-b border-gray-600 p-2 cursor-pointer hover:bg-gray-700"
                        key={key}
                        tabIndex="0"
                      >
                        <span className="px-1 text-gray-400">{class3}</span>
                      </div>
                    </>
                  );
                  break;

                case 'function':
                  const function1 = 'function myFunction() { }\n';
                  const function2 = 'function myFunction(params) { }\n';
                  const function3 = 'const myFunction = (params) => { } \n';
                  return (
                    <>
                      <span className="text-white text-lg">{value}</span>
                      <div
                        onClick={() => updateCodeArea(function1)}
                        className="flex flex-col border border-b border-gray-600 p-2 cursor-pointer hover:bg-gray-700"
                        key={key}
                        tabIndex="0"
                      >
                        <span className="px-1 text-gray-400">{function1}</span>
                      </div>
                      <div
                        onClick={() => updateCodeArea(function2)}
                        className="flex flex-col border border-b border-gray-600 p-2 cursor-pointer hover:bg-gray-700"
                        key={key}
                        tabIndex="0"
                      >
                        <span className="px-1 text-gray-400">{function2}</span>
                      </div>
                      <div
                        onClick={() => updateCodeArea(function3)}
                        className="flex flex-col border border-b border-gray-600 p-2 cursor-pointer hover:bg-gray-700"
                        key={key}
                        tabIndex="0"
                      >
                        <span className="px-1 text-gray-400">{function3}</span>
                      </div>
                    </>
                  );
                  break;

                default:
                  return (
                    <div
                      onClick={() => updateCodeArea(value)}
                      className="flex flex-col border border-b border-gray-600 p-2 cursor-pointer hover:bg-gray-700"
                      key={key}
                      tabIndex="0"
                    >
                      <span className="px-1 text-gray-400">{value}</span>
                    </div>
                  );
                  break;
              }
            })}
          </div>
        </div>{' '}
        <textarea
          className="text-sm block flex-auto h-full  bg-transparent placeholder-gray-300 text-white border-1 ring-transparent focus:ring-0 focus:border-sky-500"
          value={fileContent}
          onChange={(e) => setFileContent(e.target.value)}
          spellCheck={false}
        />
      </div>
      <BottomBar />
    </div>
  );
};

export default FileEdit;
