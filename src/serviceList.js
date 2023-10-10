import React, { useState } from 'react';
import './serviceList.css';

const Navbar = () => {
    // State to keep track of the active section
    const [activeSection, setActiveSection] = useState('Services');

    // Define the articles for each section
    const servicesArticles = [
        { image: '/img/article-img.png', title: 'Web Development & Mobile App Development', content: 'Our team of skilled developers thrives on turning your digital dreams into reality. From responsive websites that captivate your audience to feature-rich mobile apps that engage users, we craft solutions that make a lasting impact.' },
        { image: '/img/article-img.png', title: 'Security Solutions', content: 'Your safety is our priority. We specialize in both physical and digital security, offering state-of-the-art security camera systems and software solutions. Our goal is to provide you with peace of mind, knowing that your home or business is protected around the clock.' },
        { image: '/img/article-img.png', title: 'Home Media Solutions', content: "Elevate your entertainment experience with our expertise in home media systems. Whether you're a movie buff, a music enthusiast, or a gaming aficionado, we'll help you design and implement a home media solution that's tailored to your unique preferences and living space." },
        { image: '/img/article-img.png', title: 'GPT 4 & 4 Consultancy', content: 'Coming soon!' },
    ];

    const expertiseArticles = [
        { image: '/img/article-img.png', title: 'Expertise 1', content: 'Content for Expertise 1' },
        { image: '/img/article-img.png', title: 'Expertise 2', content: 'Content for Expertise 2' },
        { image: '/img/article-img.png', title: 'Expertise 3', content: 'Content for Expertise 3' },
        { image: '/img/article-img.png', title: 'Expertise 4', content: 'Content for Expertise 4' },
    ];

    // Function to handle clicking on a section button
    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div className='container' id="service-list-section">
            <div className='service-section'>
                <div className='list-section'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-12'>
                            <div className='service-title d-flex align-items-center justify-content-center'>
                                <button onClick={() => handleSectionClick('Services')} className={`service-header ${activeSection === 'Services' ? 'active' : ''} text-center`}>Services</button>
                                <button onClick={() => handleSectionClick('Expertise')} className={`service-header ${activeSection === 'Expertise' ? 'active' : ''} text-center`}>Expertise</button>
                            </div>
                            {activeSection === 'Expertise' && (
                                <div className='row d-flex justify-content-center'>
                                    <div className='col-6'>
                                        {expertiseArticles.map((article, index) => (
                                            <div className="faq" key={index}>
                                                <input type="checkbox" className="faq-toggle" id={`faq-${index}`} />
                                                <label className="faq-question" htmlFor={`faq-${index}`}>{article.title}</label>
                                                <div className="faq-answer">
                                                    {/* <img src={article.image} className='article-img' alt={article.title} /> */}
                                                    <p className='p-style'>{article.content}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {activeSection === 'Services' && (
                                <div className='row d-flex justify-content-center'>
                                    <div className='col-6'>
                                        {servicesArticles.map((article, index) => (
                                            <div className="faq" key={index}>
                                                <input type="checkbox" className="faq-toggle" id={`faq-${index}`} />
                                                <label className="faq-question" htmlFor={`faq-${index}`}>{article.title}</label>
                                                <div className="faq-answer">
                                                    {/* <img src={article.image} className='article-img' alt={article.title} /> */}
                                                    <p className='p-style'>{article.content}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
