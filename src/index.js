import React from 'react';
import { render } from 'react-router-dom';
//import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import {
  BrowserRouter,
  Route,
  Routes
} from react-router-dom

//import { render } from '@testing-library/react';

const rootElement = document.getElementById("app");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="menu" element={<Menu />} />
        <Route path="about" element={<About />} />

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
