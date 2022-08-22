

import React, {Fragment} from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'


import './App.css'
const App = () => {
  return (
      <Fragment>
          <Navbar />
           <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                
            </Routes>
      </Fragment>
  
  );

  
}

export default App;
