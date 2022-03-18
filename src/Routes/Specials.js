import React, { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../Utils/localStorage';
import { getData } from '../Utils/data';

    //the specials menu gets data from the API and shows only vietnamese items below a set price

export default function Specials() {
  
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
      <div className="container">
        <div className="row justify-content-center text-center">
          <h1 style={{
            textShadow: '1px 1px white',
            color: 'black',
            fontFamily: 'cursive',
            textAlign: 'center',
            fontSize: '40px',
          }}>Specials</h1>
          <h3 style={{ textAlign: 'center' }}>Specials come with free adult beverage!</h3>
          <h5 style={{ textAlign: 'center', marginTop: '5px', marginBottom: '70px' }}>Must be 21 or older</h5>
            
          <div className="list" style={{ maxwidth: '600px' }}>
            {items.filter(item => item.cuisine.label === 'Vietnamese' && parseFloat(item.price) < 20.00)
            .map(item => <Special key={item.id} item={item} />)}
            
          </div>
        </div>
      </div>
  );
}
//filters the items to be by cuisine and label then parses them to show those less than a specified price and displays them

const Special = ({ item }) => {
    
      return (
        <div className='card col-3'>
        <div className="card-body">
          <h2 style={{
            color: 'black', 
            paddingLeft: '10px',
            textAlign: 'center'}}>{item.title}</h2>
          <div style={{
            paddingLeft: '5px',
            color: 'darkgrey',
            textAlign: 'center'
          }}><strong>${item.price}</strong></div>
          <div style={{
            paddingLeft: '5px',
            color: 'darkgrey',
            textAlign: 'center'
          }}><strong>{item.description}</strong></div>
        </div>
        </div>
      )  
}