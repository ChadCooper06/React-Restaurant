import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>React Restaurant</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
        >
        <Link to="/">Home</Link> |{" "}
        <Link to="/menu">Menu</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
      </nav>
      <Outlet />
    </div>
  );
}
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
        //  Edit <code>src/App.js</code> and save to reload.
        

export default App;
