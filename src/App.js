import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Hero from './Routes/Home';


export default function App() {
  return (
      <>
    <div>
      <nav className='navBar'
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        position: 'relative',
        width: '100%',
        backgroundColor: '#E5A561',
        margin: '0',
      }}
      >
        <>
        <div>
          <h1 style={{
            fontFamily: 'cursive',
            fontSize: '35px',
            fontWeight: 'bold',
            alignSelf: 'start',
            textShadow: '1px 1px white',
            color: '#FF372D',
            margin: '10px',
            }}>AC</h1>
        </div>
        <div className='buttons'>
          <Link to="/"><button>Home</button></Link> {" "}
          <Link to="/Menu"><button>Menu</button></Link> {" "}
          <Link to="/Specials"><button>Specials</button></Link> {" "}

        </div>
        </>
      </nav>
      <Outlet />
    </div>
    <div>
      <Hero />
    </div>
    <footer>
      <p style={{
        margin: '0',
        fontSize: '20px',
        backgroundColor: '#EAB37A',
        textAlign: 'center',
      }}>Copyright 2022. This site made with React by Awesome Inc. student.</p>
    </footer>
    </>
  );
}
