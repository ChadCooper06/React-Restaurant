import React from 'react';
import { Link, Outlet } from 'react-router-dom';


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
        justifyContent: 'space-around',
        position: 'relative',
        width: '100%',
        backgroundColor: 'lightgreen',
        margin: '0',
      }}
      >
        <>
        <div>
          <h1 style={{
            fontWeight: 'bold',
            alignSelf: 'start',
            
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
    <Hero />
    </>
  );
}
    

function Hero() {
  return (
  <div className="hero-image">
        <div 
        className="hero-text"
        style={{
          height: '75vh',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")',
          margin: '0',
          textAlign: 'center',
        
        }}>
          <h1 style={{margin: '0'}}>Awesome Cuisine</h1>
          <p>348 E Main St Lexington KY</p>
            <p>(xxx)xxx-xxxx</p>
            <p>M-F 11-9 S-S 11-10</p>
        </div>
      </div>
  )
}