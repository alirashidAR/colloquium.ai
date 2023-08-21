import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import ContactUs from './pages/contact';
import Video from './pages/video';
import Login from './pages/login';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import axios from 'axios';
import SignUp from './pages/signup'
import Home from './components/Home/Home'
import Features from './components/Features/Features'
import AboutUs from './components/AboutUs/AboutUs'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/video' element={< Video/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/login' element={<SignUp/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    <NavBar/>
    <Home />
    <Features />
    <AboutUs />
    <Footer />
    </BrowserRouter>
    </>
  );
};



export default App;
