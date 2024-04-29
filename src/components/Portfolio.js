import React from 'react';
import { useNavigate } from 'react-router-dom'; // 导入 useNavigate 钩子
import './Portfolio.css'; // 确保创建这个 CSS 文件来为组件添加样式
import beforeCleaningImg1 from '../media/m1.jpg';
import afterCleaningImg1 from '../media/m1.jpg';
import beforeCleaningImg2 from '../media/ubc1.gif';
import afterCleaningImg2 from '../media/ubc2.gif';

const Portfolio = () => {
    const navigate = useNavigate(); // 获取 navigate 函数

    return (
        <div className="portfolio-container">
            <h1>Our Work</h1>
            <p>Check out some of our amazing transformations!</p>
            <div className="image-gallery">
                <div className="image-set">
                    <h2>8189 Cambie Street</h2>
                    <div className="before-after">
                        <img src={beforeCleaningImg1} alt="Before Cleaning" />
                        <img src={afterCleaningImg1} alt="After Cleaning" />
                    </div>
                </div>
                <div className="image-set">
                    <h2>UBC Student Dormitory</h2>
                    <div className="before-after">
                        <img src={beforeCleaningImg2} alt="Before Cleaning" />
                        <img src={afterCleaningImg2} alt="After Cleaning" />
                    </div>
                </div>
            </div>
            <button onClick={() => navigate('/')} className="home-button">Back to Home</button> {/* 添加返回主页按钮 */}
        </div>
    );
};

export default Portfolio;
