import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from 'react-dom';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import App from './App';
import Dishes from './Routes/Menu';
//import Contacts from './Routes/About';

import './index.css';
//import { render } from '@testing-library/react';



const rootElement = document.getElementById("app");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="dishes" element={<Dishes />} />
        
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);





//import reportWebVitals from './reportWebVitals';
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
