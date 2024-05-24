import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Nav from './layout/Nav'
import { BrowserRouter } from 'react-router-dom';
import Footer from './layout/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav/>
      <App />
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
