//safe-place-2.0

import React from "react";
import Sidebar from "./components/Sidebar";
import { Routes ,Route } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import Main from "./pages/Main";
import Statistics from "./pages/Statistics";
import About from "./pages/About";
import Credits from "./pages/Credits";

function App() {
  return (
    <>
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/' exact element={<Main/>} />
        <Route path='/statistics' element={<Statistics/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/credits' element={<Credits/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
