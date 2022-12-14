

import React, {Fragment, useEffect} from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/layout/Navbar'
import { Provider } from 'react-redux'
import store from './store'
import Landing from './components/layout/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'
import Dashboard from './components/dashboard/Dashboard'

import './App.css'

if(localStorage.token) {
  setAuthToken(localStorage.token)
}


const App = () => {

  useEffect(()=>{
      store.dispatch(loadUser())
  
  }, [] );

  return (
      <Provider store={store}>
          <Fragment>
              <Navbar />
              <Routes>
                  <Route path="/" element={<Landing />} />
                  <Route path="register" element={<Register />} />
                  <Route path="login" element={<Login />} />
                  <Route path="dashboard" element={<Dashboard />} />
                
              </Routes>
          </Fragment>
      </Provider>

  
  );

  
}

export default App;
