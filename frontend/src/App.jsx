import React, { useState } from 'react'
import './App.css'
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Deshboard from './components/Deshboard';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/deshboard' element={ <Deshboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
