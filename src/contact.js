import React, { useState, useEffect } from 'react';
import './contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
    budget: '',
  });

  const [showDropdown, setShowDropdown] = useState(false); // To control the visibility of the custom dropdown

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (value) => {
    setFormData({ ...formData, budget: value });
    setShowDropdown(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    // Close the custom dropdown when clicking outside of it
    const handleClickOutside = (e) => {
      if (showDropdown && !e.target.closest('.custom-dropdown')) {
        setShowDropdown(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div className='container-fluid'>
      <div className='contact-section'>
        <div className='d-flex align-items-center justify-content-center'>
          <form className='form-contact' onSubmit={handleSubmit}>
            <h1 className='text-center'>Let's Get In Touch</h1>
            <div className='form-group'>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-row row'>
              <div className='form-group col'>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  placeholder='Subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-group col'>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className='form-group'>
              <textarea
                id='message'
                name='message'
                placeholder='How can we help you?'
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className='form-group'>
              <div className='custom-dropdown'>
                <div
                  className={`selected-option ${
                    showDropdown ? 'open' : ''
                  }`}
                  onClick={handleDropdownClick}
                >
                  {formData.budget || 'Select a budget'}
                </div>
                <div
                  className={`options ${showDropdown ? 'open' : ''}`}
                >
                  <div
                    className='option'
                    onClick={() => handleOptionClick('$100 - $500')}
                  >
                    $100 - $500
                  </div>
                  <div
                    className='option'
                    onClick={() => handleOptionClick('$500 - $1000')}
                  >
                    $500 - $1000
                  </div>
                  <div
                    className='option'
                    onClick={() => handleOptionClick('$1000 - $5000')}
                  >
                    $1000 - $5000
                  </div>
                  <div
                    className='option'
                    onClick={() => handleOptionClick('$5000+')}
                  >
                    $5000+
                  </div>
                  <div
                    className='option'
                    onClick={() => handleOptionClick('n/a')}
                  >
                    n/a
                  </div>
                </div>
              </div>
            </div>

            <button type='submit'>Submit (onclick needed)</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
