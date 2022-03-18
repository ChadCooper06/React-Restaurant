import React, { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../Utils/localStorage';
import { getData } from '../Utils/data';

export default function Dishes() {
  
  const URL = 'https://sheltered-refuge-85246.herokuapp.com/api/json'
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
      backgroundImage: 'url("https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      }}>
        
      <div className="container">
        <div className="row justify-content-center text-center">
          <h1 style={{
            textShadow: '1px 1px white',
          }}>Menu Items</h1>
          <div className="list" style={{ maxwidth: '600px' }}>
            
            <div>
              {items.map((item, idx) => <Dish key={item.id} idx={idx} item={item} />)}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const Dish = ({ item }) => {
  return (
    
    <div className='card col-3'>
      <div className="card-body">
        <h2 className='card-title'>{item.title}</h2>
        <div><strong>${item.price}</strong></div>
        <div><strong>Description: {item.description}</strong></div>
        
      </div>
    </div>
  )
}

