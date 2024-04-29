import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import cleaningAnimation from '../media/Animation - 1713913052497.json';
import './HeroSection.css';

const HeroSection = () => {
    const [step, setStep] = useState(0);
    const [houseType, setHouseType] = useState('condo');
    const [bedrooms, setBedrooms] = useState(2);
    const [bathrooms, setBathrooms] = useState(1);
    const [cleaningType, setCleaningType] = useState('basic');
    const [price, setPrice] = useState(180);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [extraRequests, setExtraRequests] = useState('');

    useEffect(() => {
        updateDefaults();
    }, [houseType]);

    useEffect(() => {
        updatePrice(); // Update price when any of these variables change
    }, [bedrooms, bathrooms, cleaningType, houseType]);


    const updateDefaults = () => {
        switch (houseType) {
            case 'condo':
                setBedrooms(2);
                setBathrooms(2);
                break;
            case 'townhouse':
                setBedrooms(3);
                setBathrooms(4);
                break;
            case 'house':
                setBedrooms(4);
                setBathrooms(5);
                break;
            default:
                break;
        }
    };

    const updatePrice = () => {
        let basePrice = 0;
        // 基础价格计算
        switch (houseType) {
            case 'condo':
                if (bedrooms === 1) {
                    basePrice = 150;  // 假设1卧室公寓的价格
                } else if (bedrooms === 2) {
                    basePrice = 180;
                } else if (bedrooms === 3) {
                    basePrice = 210;  // 假设3卧室公寓的价格
                } else {
                    basePrice = bedrooms * 50;  // 超过3卧室的情况，每增加一个卧室增加70
                }
                break;
            case 'townhouse':
                if (bedrooms === 2) {
                    basePrice = 180;
                } else if (bedrooms === 3) {
                    basePrice = 210;
                } else if (bedrooms === 4) {
                    basePrice = 240;
                } else {
                    basePrice = 240 + (bedrooms - 3) * 40;  // 超过4卧的联排屋
                }
                break;
            case 'house':
                if (bedrooms === 4) {
                    basePrice = 300;
                } else {
                    basePrice = 300 + (bedrooms - 4) * 50;  // 大房子的价格计算
                }
                break;
            default:
                break;
        }
        // 浴室价格调整
        basePrice += (bathrooms - 1) * 10;  // 每增加一个浴室增加10
        // 清洁类型调整
        const extraCharge = cleaningType === 'enhanced' ? (houseType === 'house' ? 70 : 50) : 0;  // 增强清洁的额外费用
        setPrice(basePrice + extraCharge);
    };
    

    const handleHouseTypeChange = (event) => {
        setHouseType(event.target.value);
        updateDefaults();
    };

    const handleSubmit = () => {
        // Here, handle the logic for form submission, such as sending data to your server or an email service.
        console.log("Form Submitted with:", { name, address, phone, extraRequests });
        alert("Information submitted! We will contact you soon.");
        setStep(0);  // Reset the form
    };

    const renderQuestion = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <label>House Type:</label>
                        <select value={houseType} onChange={handleHouseTypeChange}>
                            <option value="condo">Condo</option>
                            <option value="townhouse">Townhouse</option>
                            <option value="house">House</option>
                        </select>
                    </>
                );
            case 2:
                return (
                    <>
                        <label>Bedrooms:</label>
                        <input type="number" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} min="1" max="12" />
                        <label>Bathrooms:</label>
                        <input type="number" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} min="1" max="5" />
                    </>
                );
            case 3:
                return (
                    <>
                        <label>Cleaning Type:</label>
                        <select value={cleaningType} onChange={(e) => setCleaningType(e.target.value)}>
                            <option value="basic">Basic Cleaning</option>
                            <option value="enhanced">Enhanced Cleaning</option>
                        </select>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="hero-container">
            {step === 0 ? (
                <div className="left-side">
                    <h1>Breathe Easy with Gleam Home</h1>
                    <p>Life's too short for housework. 🐾 Paws and Relax.</p>
                    <p>Book a clean and take a break with Gleam Home. We'll handle the dirt, you handle the rest!</p>
                    <button onClick={() => setStep(1)}>See Price</button>
                </div>
            ) : step === 4 ? (
                <>
                    <div className="left-side">
                        <h2>Estimated Price: ${price}</h2>
                        <button onClick={() => setStep(0)}>Exit</button>
                        <button onClick={() => setStep(5)}>Book a Clean</button>
                    </div>
                </>
            ) : step === 5 ? (
                <div className="left-side">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" />
                    <textarea value={extraRequests} onChange={(e) => setExtraRequests(e.target.value)} placeholder="Extra Requests"></textarea>
                    <button onClick={handleSubmit}>Submit</button>
                    <button onClick={() => setStep(0)}>Exit</button>
                </div>
            ) : (
                <div className="left-side">
                    {renderQuestion()}
                    {step > 0 && <button onClick={() => setStep(step - 1)}>Back</button>}
                    {step < 4 && <button onClick={() => setStep(step + 1)}>Next</button>}
                </div>
            )}
            <div className="right-side">
                <Lottie animationData={cleaningAnimation}/>
            </div>
        </div>
    );
};

export default HeroSection;
