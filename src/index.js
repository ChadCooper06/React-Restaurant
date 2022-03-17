import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import './index.css';
import App from './App';
import Menu from './Routes/Menu';

const rootElement = document.getElementById('root')

ReactDOM.render(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Menu" element={<Menu />} />
      
    </Routes>
  </BrowserRouter>,
  rootElement
);