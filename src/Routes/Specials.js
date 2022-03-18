import React, { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../Utils/localStorage';
import { getData } from '../Utils/data';

export default function Specials() {
  
  const URL = 'https://sheltered-refuge-85246.herokuapp.com/api/json'
  const [items, setItems] = useState([]);

  useEffect(() => {
    let data = getLocalStorage(URL);
    if (data.length > 0) {
      setItems(0, 20);
    } else {
      getData(URL)
        .then((data) => {
          setItems(0, 20);
          setLocalStorage(URL, data);
        })
    }
    console.log(data)
  }, []);

  return (
      <div className="container">
        <div className="row justify-content-center text-center">
          <h2 className='mb-4'>Specials</h2>
          <div className="table" style={{ maxwidth: '600px' }}>
            <div>
              {items.map((item, idx) => <Special key={item.id} idx={idx} item={item} />)}
            </div>
          </div>
        </div>
      </div>
  );
}

const Special = ({ item }) => {
    
      return (
      <div className='card col-3'>
        <div className="card-body">
          <h2 className='card-title'>{item.title}</h2>
          <div><strong>{item.description}</strong></div>
        </div>
      </div>
        )
     
    
}