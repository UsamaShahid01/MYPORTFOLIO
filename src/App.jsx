import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components//Pages/Home';
import Project from './Components/Pages/Project';
import Contact from './Components/Pages/Contact';
// import ContactForm from './Components/Pages/ContactForm';
import Services from './Components/Pages/Services';


function App() {

  return (
    <div className='starting-page'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/contactform" element={<ContactForm />} /> */}
      </Routes>
    </div>
  )
}

export default App
