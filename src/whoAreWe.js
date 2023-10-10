import React from 'react';
import './whoAreWe.css';

const Navbar = () => {
    return (
        <div className='container-fluid'>
            <div className='main-section'>
                <div className='waw-section'>
                    <div className=''>
                        <h1 className='heading-style'>Who are we</h1>
                        <p className='p-style'>Welcome to 13Bit, where innovation meets excellence. We are not just another IT company; we are your partners in harnessing the power of technology to enrich your life and protect your assets.</p>
                        <p className='p-style'>At 13Bit, our vision is to empower individuals and businesses with cutting-edge technology solutions that enhance their digital presence, safeguard their environments, and elevate their entertainment experiences. We believe in a world where technology seamlessly integrates into your daily life, making it simpler, more secure, and infinitely more enjoyable.</p>
                        <button className='btn-rm'>Read More (blog)</button>
                    </div>
                </div>
                <div className='satisfied-section'>
                    <div className='row'>
                        <div className='col-6'>
                            <article className='waw-article'>
                                <h2 className='heading-style-a'>0</h2>
                                <p className='p-style'>statistics coming soon</p>
                            </article>
                        </div>
                        <div className='col-6'>
                            <article className='waw-article'>
                                <h2 className='heading-style-a'>0</h2>
                                <p className='p-style'>statistics coming soon</p>
                            </article>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <article className='waw-article'>
                                <h2 className='heading-style-a'>0</h2>
                                <p className='p-style'>statistics coming soon</p>
                            </article>
                        </div>
                        <div className='col-6'>
                            <article className='waw-article'>
                                <h2 className='heading-style-a'>0</h2>
                                <p className='p-style'>statistics coming soon</p>
                            </article>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <article className='waw-article'>
                                <h2 className='heading-style-a'>0</h2>
                                <p className='p-style'>statistics coming soon</p>
                            </article>
                        </div>
                        <div className='col-6'>
                            <article className='waw-article'>
                                <h2 className='heading-style-a'>0</h2>
                                <p className='p-style'>statistics coming soon</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
