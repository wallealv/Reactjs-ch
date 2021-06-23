import React, { useState } from 'react';

export function Contador(props) {

  const [total, setTotal] = useState(props.initial);
  
  
  const suma = () => {
    let sumaclick = total + 1;
    setTotal(sumaclick);
  }
  
  const resta = () => {
    let restaclick = total - 1;
    setTotal(restaclick);
  }
  
      return (
        <div>
          <p>You clicked {total} times</p>
          <button onClick={ ()=>{ total < props.stock ? suma() : console.log(props.onAdd)}}> + </button>
          <button onClick={ ()=>{ total > 0 ? resta() : console.log(props.onAdd)}}> - </button>
          <button onClick={() => props.onAdd(total)}> sumar al carrito </button>
      
        </div>
      )
    
};