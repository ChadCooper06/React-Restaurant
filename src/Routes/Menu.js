import React, { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../Utils/localStorage';
import { getData } from '../Utils/data';

export default function Dishes() {
  
  const URL = 'https://sheltered-refuge-85246.herokuapp.com/api/json';
  const [items, setItems] = useState([]);
  

  useEffect(() => {
    let data = getLocalStorage(URL);
    if (data.length > 0) {
      setItems(data);
    } else {
      getData(URL)
        .then((data) => {
          setItems(data);
          setLocalStorage(URL, data);
        })
    }
    console.log(data)
  }, []);

  return (
    <main style={{ 
      padding: '1rem 0',
      color: '#BFB7AA',
      //backgroundImage: 'url("https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")',
      // backgroundPosition: 'center',
      // backgroundSize: 'contain',
      // backgroundRepeat: 'no-repeat',
      }}>
        
      <div className="container">
        <div className="row justify-content-center text-center">
          <h1 style={{
            textShadow: '1px 1px white',
            color: 'black',
            fontFamily: 'cursive',
            textAlign: 'center',
            fontSize: '40px',
          }}>Menu Items</h1>
          <div className="list" style={{ maxwidth: '600px' }}>
            {items.filter(item => item.category.title === 'House Favorites' && parseFloat(item.price) > 10.00)
            .map(item => <HouseFavorites key={item.id} item={item} />)}
            <div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

//displays the menu items I have limited via filter to be those above a certain price
const HouseFavorites = ({ item }) => {
  return (
    
    <div className='card col-3'>
      <div className="card-body">
        <h2 className='card-title' style={{color: 'black', paddingLeft: '10px'}}>{item.title}</h2>
        <div style={{
          paddingLeft: '5px',
          color: 'darkgrey',
        }}><strong>${item.price}</strong></div>
        <div style={{
          paddingLeft: '5px',
          color: 'darkgrey',
        }}><strong>{item.description}</strong></div>
      </div>
    </div>
  )
}

