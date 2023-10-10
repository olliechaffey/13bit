import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './homePage';

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
