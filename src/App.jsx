import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/NavBar';
import ExperienceCategories from './components/experience-categories/ExperienceCategories';
import HeroSection from './components/hero-section/HeroSection';
import Footer from './components/footer/Footer';
import './styles/App.css';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Navbar />
                <HeroSection />
                <ExperienceCategories />
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
