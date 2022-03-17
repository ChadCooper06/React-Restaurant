import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import './index.css';
import App from './App';
import Menu from './Routes/Menu.js';
import Specials from './Routes/Specials';

const rootElement = document.getElementById('root')

ReactDOM.render(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route path="Menu" element={<Menu />} />
      <Route path='Specials' element={<Specials />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);