import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import './index.css';
import App from './App';
import Home from './Routes/Hero';
import Menu from './Routes/Menu.js';
import Specials from './Routes/Specials';

const rootElement = document.getElementById('root')

ReactDOM.render(
  
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Home" element={<Home />} />
        <Route path="Menu" element={<Menu />} />
        <Route path="Specials" element={<Specials />} />
      </Route>
    </Routes>
  </Router>,
  rootElement
);
