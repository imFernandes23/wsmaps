//safe-place-6.0

import React from "react";
import Sidebar from "./components/Sidebar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from "./pages/Main";
import Statistics from "./pages/Statistics";
import About from "./pages/About";
import Credits from "./pages/Credits";



function App() {

  return (
    <>
    <Router>
      <Sidebar />
      <Routes >
        <Route path='statistics' element={<Statistics/>} />
        <Route path='about' element={<About/>} />
        <Route path='credits' element={<Credits/>} />
        <Route path="/wsmaps" exact={true} element={<Main/>}></Route>
        <Route path="/wsmaps" element={<Main/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
