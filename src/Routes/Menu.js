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
    <main style={{ padding: "1rem 0" }}>
      <div className="container">
        <div className="row justify-content-center text-center">
          <h2 className='mb-4'>Menu Items</h2>
          <table className="table table-hover" style={{ maxwidth: '600px' }}>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => <Dish key={item.id} idx={idx} item={item} />)}
            </tbody>
          </table>
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
        <div><strong>Price: {item.price}</strong></div>
        <div><strong>Description: {item.description}</strong></div>
        
      </div>
    </div>
  )
}

