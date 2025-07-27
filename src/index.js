import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Newsapp from './Components/Newsapp'; // Ensure Newsapp.js exists in src
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Newsapp />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();