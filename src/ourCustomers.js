import React from 'react';
import './ourCustomers.css';

const Navbar = () => {
    return (
        <div className='container-fluid'>
            <div className='main-section'>
                <div className='waw-section'>
                    <img className="img-cust" src='\img\customers-stock.jpg'></img>
                </div>
                <div className='satisfied-section'>
                <div className=''>
                        <h1 className='heading-style'>Our Customers</h1>
                        <p className='p-style'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus sapien elementum semper eleifend. Praesent mollis metus eu ex finibus mattis. Mauris auctor volutpat suscipit. Donec tristique consectetur eros, laoreet sollicitudin lacus viverra feugiat. Aenean viverra libero sed viverra mattis. Sed nisl libero, congue sed leo nec, sagittis congue lorem. Nunc ac ligula id justo vehicula feugiat ut vel tortor. Phasellus varius nunc nec justo congue, in tempus mauris condimentum. Aenean eget egestas lectus.</p>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <article className='waw-article'>
                                <h2 className='heading-style-a'>Tesco</h2>
                                <p className='p-style'>Lorem ipsum dolor</p>
                            </article>
                        </div>
                        <div className='col-4'>
                            <article className='waw-article'>
                                <h2 className='heading-style-a'>IBM</h2>
                                <p className='p-style'>Lorem ipsum dolor</p>
                            </article>
                        </div>
                        <div className='col-4'>
                            <article className='waw-article'>
                                <h2 className='heading-style-a'>BlackRock</h2>
                                <p className='p-style'>Lorem ipsum dolor</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
