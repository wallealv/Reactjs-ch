import React, { useState } from 'react';

function Contador() {

  const [total, setTotal] = useState(0);
  const stock = 5
  
  
  const suma = () => {
    let sumaclick = total + 1;
    setTotal(sumaclick);
  }
  
  const resta = () => {
    let restaclick = total - 1;
    setTotal(restaclick);
  }
  
  const onAdd = () => {
    let agregarcarrito = total * 0;
    setTotal(agregarcarrito)
  }

      return (
        <div>
          <p>You clicked {total} times</p>
          <button onClick={ ()=>{ total < stock ? suma() : console.log(onAdd)}}> + </button>
          <button onClick={ ()=>{ total > 0 ? resta() : console.log(onAdd)}}> - </button>
          <button onClick={() => onAdd()}> sumar al carrito </button>
      
        </div>
      )
    
};
export default Contador
