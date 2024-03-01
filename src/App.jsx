import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import MainPage from './MainPage';
import AboutUs from './AboutUs';
import Reviews from './Reviews';
import Blog from './Blog';
import Footer from './Footer';
import './App.css';
import '../components/Header.css';

import './MainPage.css';

const App = () => {
  return (
    <Router>
      <img src={'/images/bg.png'} className='
      absolute
      top-0
      left-0
      w-full
      h-full
      z-[-1]
      object-cover
      ' alt="Momos Point background" />
      <Header />
  
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<MainPage />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
