import logo from './logo.svg';
import React from 'react';

import {Routes ,Route } from 'react-router-dom';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Price from './components/Price';
import FAQ from './components/FAQ';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';

function App() {
  return (
   <>
   <Menu/>
   <Routes>
     <Route exact path="/" element={<About/>}/>
     <Route exact path="/contact" element={<Contact/>}/>
     <Route exact path="/price" element={<Price/>}/>
     <Route exact path="/faq" element={<FAQ/>}/>
   </Routes>
   </>
  );
}

export default App;
