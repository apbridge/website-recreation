import { useState } from 'react';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer"

const App = () => {

return (
  <HashRouter>
    <header>
      <Navbar />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <footer>
      <Footer />
    </footer>
  </HashRouter>
);
};

export default App
