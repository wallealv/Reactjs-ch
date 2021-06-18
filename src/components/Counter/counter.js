import React, { useState } from 'react';

function Contador() {
  const [onAdd, setonAdd] = useState(1);
  const stock = 5

  return (
    <div>
      <p>You clicked {onAdd} times</p>
    
      <button onClick={ ()=>{ onAdd < stock ? setonAdd(onAdd+1) : console.log(onAdd)}}> click </button>
    </div>
  );
}

  export default Contador