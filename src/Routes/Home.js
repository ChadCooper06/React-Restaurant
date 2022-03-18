import React from 'react';

export default function Hero() {
    return (
    <div className="hero-image">
          <div 
          className="hero-text"
          style={{
            height: '80vh',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            color: 'white',
            backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")',
            margin: '0',
            textAlign: 'center',
            justifyContent: 'center',
          
          }}>
            <h1 style={{
                margin: '0',
                textShadow: '2px 2px grey',
                fontSize: '80px',
                fontFamily: 'cursive',
                }}>Awesome Cuisine</h1>
          </div>
        
            <div style={{
                margin: '0',
                paddingTop: '100px',
                color: 'black',
                backgroundColor: '#BFB7AA',
                fontSize: '20px',
                fontFamily: 'Helvetica, sans-serif',
                justifyContent: 'center',
                alignItems: 'center',
                height: '500px',
            }}>
                <h2 style={{
                  marginBottom: '2px', 
                  textAlign: 'center',}}>348 E Main St Lexington KY</h2>
                <h2 style={{
                  marginTop: '5px', 
                  textAlign: 'center',}}>(xxx)xxx-xxxx</h2>
                <h2 style={{
                  marginTop: '5px', 
                  textAlign: 'center',}}>M-F 11-9 S-S 11-10</h2>
            </div>
        </div>
    )
  }