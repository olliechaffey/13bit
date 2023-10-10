import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6 f-letter'>
                        <p className='p-bold'>Join our newsletter</p>
                        <button type='submit'>Subscribe</button>
                        <p className='p-small mt-3'>Gain a competitive edge with the latest AI breakthroughs and updates - all in a 5 minute email. Our AI experts sift through the clutter, honing in on the news that truly matters.</p>
                    </div>
                    <div className='col-3'>
                        <p className='p-bold'>Address</p>
                        <p>Brighton, United Kingdom</p>
                    </div>
                    <div className='col-3'>
                        <p className='p-bold'>Contact</p>
                        <p>email@email.com</p>
                    </div>
                </div>
                < hr/>
                <div className='row mt-4'>
                    <div className='col-12'>
                        <div className='footer-container'>
                            <p className='p-small'>&copy; {new Date().getFullYear()} 13bit</p>
                            <div className='footer-right'>
                                <a className="footer-link p-right p-small" href='#'>Privacy Policy</a>
                                <a className="footer-link p-right p-small" href='#'>Terms of Service</a>
                                <a className="footer-link p-small" href='#'>Cookie Settings</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
