import { useState } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import GitPage from "./pages/GitPage";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import DPage from "./pages/DonationPage";
import WedPage from "./pages/WeddingsPage";
import NewsPage from "./pages/NewsPage";
import CelPage from "./pages/CelebratePage";
import DonutsPage from "./pages/DoughnutsPage";
import MDPage from "./pages/MothersDayPage";
import SpringPage from "./pages/SpringPage";
import AnPage from './pages/AnniversaryPage';
import LovePage from "./pages/LovePage";
import ServicesPage from "./pages/ServicesPage";

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
        <Route path="/contact" element={<GitPage />} />
        <Route path="/weddings" element={<WedPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/services" element={<ServicesPage />}/>
        <Route path="/donation-request" element={<DPage />} />
        <Route path="/celebrate-america" element={<CelPage />} />
        <Route path="/doughnuts-and-dads" element={<DonutsPage />} />
        <Route path="/mothers-day" element={<MDPage />} />
        <Route path="/spring" element={<SpringPage />} />
        <Route path="/anniversary" element={<AnPage />} />
        <Route path="/love" element={<LovePage />} />
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
