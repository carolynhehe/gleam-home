import React from 'react';
import './Footer.css';  // 引入外部 CSS

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a>
            </div>
            <div className="reserve-info">
                <p>© 2024 Gleam Home. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
