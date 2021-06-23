import React from 'react'
import { Contador } from '../itemCount/itemCount'

function ItemListContainer(props) {
    
    const onAdd = () => {
        
            alert('Agregar al carrito!')
        } 
    return (
        <div>
            {props.greetings}
            <Contador initial={1} stock={5} onAdd={onAdd} />
        </div>
    )
}
export default ItemListContainer