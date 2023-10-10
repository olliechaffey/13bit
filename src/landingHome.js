import React, { useState, useEffect } from 'react';
import './landingHome.css';

const Navbar = () => {
    const options = ["Web Development", "Mobile App Development", "Security Solutions", "Home Media Expertise"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            const targetText = options[currentIndex];
            let currentText = typedText;
            if (currentText === targetText) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % options.length);
                setTypedText('');
            } else {
                currentText = targetText.substring(0, currentText.length + 1);
                setTypedText(currentText);
            }
        }, typedText === options[currentIndex] ? 3000 : 50);

        return () => {
            clearTimeout(timeout);
        };
    }, [currentIndex, typedText]);

    return (
        <div className='home'>
            <div className='bodyHome'>
                <div className='vertical-center'>
                    <h1 className='body-title mb-3 d-cursor'>13bit</h1>
                    <h5 className='body-sub d-cursor'>
                        Resolving your <span className='sub-style'>{typedText}</span> issues.
                    </h5>
                </div>
            </div>
            <div className='bottom-section'>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    <div className='container-fluid text-center'>
                <span className='scroll-text d-cursor'>Scroll down</span> 
                </div>
            </div>
        </div>
    );
}

export default Navbar;
