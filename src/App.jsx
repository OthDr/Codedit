import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/main/Main';
import Welcome from './components/main/Welcome';
import FileEdit from './components/files/FileEdit';
import Splash from './components/splash-screen/Splash';

function App() {
  return (
    <Routes>
      <Route index element={<Splash />} />
      <Route path="welcome" element={<Welcome />} />
      <Route path="file" element={<FileEdit />} />
    </Routes>
  );
}

export default App;
