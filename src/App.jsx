import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import './App.css';
import TechNews from './news/News';
import Home from './home/Home';
import ContactForm from './contact/ContactForm';
import Shop from './shop/Shop'
import Footer from './footer/Footer'

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<TechNews />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/products" element={<Shop />} />
        </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
