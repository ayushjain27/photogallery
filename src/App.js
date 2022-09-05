import React from 'react';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import Architecture from './Components/Architecture/Architecture';
import Heading from './Components/Heading';
import Main from './Components/Main';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Heading />
        <Main />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/architecture' element={<Architecture />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;