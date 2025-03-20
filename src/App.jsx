import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import ExperienceCategories from "./components/experience-categories/ExperienceCategories";
import HeroSection from "./components/hero-section/HeroSection";
import Footer from "./components/footer/Footer";
import Catalog from "./pages/Catalog";
import AuthForm from "./components/authform/AuthForm";
import "./styles/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ExperienceCategories />
              </>
            }
          />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/login" element={<AuthForm />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
