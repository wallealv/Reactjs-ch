import { users } from './itemlistdetail';

const Itemlist = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Nombre")
    },3000)
})

Itemlist.then((resolve) => {
    return(
    <div>
        <ul>
            {users.map((item, index) => {
            return (
            <li key={index}> <p>${resolve[0]}: {item.nombre} <p></p>precio: {item.precio}</p>
            </li>
            )})}
        </ul>
    </div>
)},[])
export default Itemlist