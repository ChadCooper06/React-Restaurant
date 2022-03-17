import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <nav
        style={{
          display: '-ms-flexbox',
          backgroundColor: 'lightgreen',
          borderBottom: "solid 1px",
        }}
        >
          <h1>AC</h1>
        <Link to="/">Home</Link> |{" "}
        <Link to="/Menu">Menu</Link> |{" "}
        
      </nav>
      <div className="hero-image">
        <div 
        className="hero-text"
        style={{

          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")',
        }}>
          <h1>Awesome Cuisine</h1>
          <p>348 E Main St Lexington KY</p>
            <p>(xxx)xxx-xxxx</p>
            <p>M-F 11-9 S-S 11-10</p>
        </div>

      </div>
      <Outlet />
    </div>
  );
}
