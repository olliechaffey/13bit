import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

const links = [
  { text: 'Our Services', target: 'service-list-section' },
  { text: 'Projects', target: 'projects-section' },
  { text: 'Blog', target: 'blog-section' },
  { text: 'Contact us', target: 'contact-section' },
];

const Navbar = () => {
  const scrollToSection = (targetId) => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='container style-nav'>
      <nav className='navbar'>
        {links.map((link, index) => (
          <div className='nav-item' key={index}>
            <a
              href={`#${link.target}`}
              className='font-nav'
              onClick={(e) => scrollToSection(link.target, e)}
            >
              {link.text}
            </a>
          </div>
        ))}
        <button className='btn-nav'>Join our Newsletter</button>
      </nav>
    </div>
  );
};

export default Navbar;
