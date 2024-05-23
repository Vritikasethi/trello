import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Center from './components/Center.js';
import Sidebar from './components/Sidebar.js';
import React, { useState } from 'react';
function App()
 {
  
  return (
    <>
    <div>
    <div>
      <Navbar/>
    </div>
    
    <div>
      <Center></Center>
    </div>
    <div>
      <Sidebar></Sidebar>
    </div>
   
    </div>
    
  </>
  )
}

export default App;
