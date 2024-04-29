import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className="app-container">
                <NavBar />
                <Routes>
                    <Route path="/" element={<HeroSection />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
