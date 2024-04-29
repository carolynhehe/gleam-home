import React from 'react';
import { useNavigate } from 'react-router-dom';  // 引入 useNavigate 钩子

const NavBar = () => {
    const navigate = useNavigate(); // 获取 navigate 函数

    // 函数用于处理点击事件，导航到 Portfolio 页面
    const goToPortfolio = () => {
        navigate('/portfolio');
    };

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
            <div>
                <h1>Gleam Home</h1>
            </div>
            <div>
                {/* 使用按钮触发导航 */}
                <button onClick={goToPortfolio} style={{ marginRight: '10px' }}>Portfolio</button>
                <button onClick={() => window.open('https://wa.me/yourwhatsappnumber', '_blank')}>WhatsApp Us</button>
            </div>
        </nav>
    );
};

export default NavBar;
