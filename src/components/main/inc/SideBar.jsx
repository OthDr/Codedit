import { useState } from 'react';
import axios from '../../../api/axios';

const FOLDER_URL = '/files';
const FILE_URL = '/files/file';

const SideBar = (props) => {
  const [folderPath, setFolderPath] = useState('');
  const [folder, setFolder] = useState('');
  const [files, setFiles] = useState();

  const submitFolderPath = async (e) => {
    e.preventDefault();
    if (folderPath) {
      try {
        const response = await axios.post(
          FOLDER_URL,
          JSON.stringify({
            folderPath,
          }),
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        console.log(response.data);
        setFolder(folderPath.split('/').pop());
        setFiles(response.data.files);
      } catch (err) {
        console.log(err.response);
      }
    } else alert('Folder Path is Empty');
  };

  const submitFile = async (fileName) => {
    if (fileName) {
      try {
        const response = await axios.post(
          FILE_URL,
          JSON.stringify({ fileName, folderPath }),
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        console.log(response.data);
        props.childToParent(fileName, response.data.fileExtension, response.data.fileContent, folderPath);
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  return (
    <aside className="w-44 border-l border-sky-800 bg-[#011627] absolute right-0 h-full">
      {files ? (
        <h1 className="text-lg font-semibold uppercase text-center border-b border-sky-800 py-7">
          {folder}
        </h1>
      ) : (
        <form className="p-1 space-y-2" onSubmit={submitFolderPath}>
          <div>
            <input
              className="text-sm block w-full bg-gray-700 border-gray-600 placeholder-gray-300 text-white ring-sky-500 focus:border-sky-500"
              type="text"
              id="folderPath"
              onChange={(e) => setFolderPath(e.target.value)}
              value={folderPath}
              placeholder="Folder Path"
            />
          </div>
          <div className="flex justify-end">
            <input
              type="submit"
              value="Open"
              className="w-full bg-gray-600 hover:bg-gray-500 text-gray-200 text-sm cursor-pointer font-bold py-1 rounded focus:outline-none focus:shadow-outline transition-all ease-in-out duration-300"
            />
          </div>
        </form>
      )}

      {files ? (
        <div className="flex flex-col border-y border-gray-600 space-y-1 divide-y divide-gray-600">
          {files.map((file, key) => (
            <div
              onClick={() => {
                submitFile(file);
              }}
              key={key}
              className="p-1 cursor-pointer hover:bg-gray-600"
            >
              <h1>{file}</h1>
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
    </aside>
  );
};

export default SideBar;
