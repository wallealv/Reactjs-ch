import { users } from './dbitem';

const Itemlist = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Nombre")
    },3000)
})

Itemlist.then((plata) => {
    <div>
        <ul>
            {users.map((item, index) => {
            return (
            <li key={index}> <p>${plata[0]}: {item.nombre} <p></p>Altura: {item.altura}</p>
            </li>
            )})}
        </ul>
    </div>
})
export default Itemlist