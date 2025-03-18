import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Footer from './components/Footer';
import WhatToCook from './pages/WhatToCook';
import Recipes from './pages/Recipes';
import Ingredients from './pages/Ingredients';
import Occasions from './pages/Occasions';
import AboutUs from './pages/AboutUs';
import './App.css'
import UserProfile from './pages/UserProfile';
import YourRecipesBox from './pages/YourRecipesBox';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/whattocook' element={<WhatToCook />}/>
        <Route path='/recipes' element={<Recipes />}/>
        <Route path='/ingredients' element={<Ingredients />}/>
        <Route path='/occasions' element={<Occasions />}/>
        <Route path='/aboutUs' element={<AboutUs />}/>
        <Route path='/user-profile' element={<UserProfile />} />
        <Route path='/your-recipes-box' element={<YourRecipesBox />}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;