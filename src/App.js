import React from "react";
import Sidebar from "./components/Sidebar";
import { Routes ,Route } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" />
      </Routes>
    </Router>

    </>
  );
}

export default App;
