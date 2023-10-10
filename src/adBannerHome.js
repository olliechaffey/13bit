import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './adBanner.css';

const Navbar = () => {
  return (
    <div className=''>
        <div className='topBanner d-flex align-items-center justify-content-center'>
            <h1 className='font-ad'>13bit STANDS WITH UKRAINE!</h1>
        </div>
        <div className='bottomBanner d-flex align-items-center justify-content-center'>
        <a href='#' className='ad-link'>READ MORE</a>
        </div>
    </div>
  );
}

export default Navbar;
