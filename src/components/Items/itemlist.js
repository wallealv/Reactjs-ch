import { users } from './items';

function itemlist() {
        return (
            <div>
                <ul>
                    {users.map((item, index) => {
                        return (
                            <li key={index}> <p>Nombre: {item.nombre} <p></p>Altura: {item.altura}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    };
export default itemlist;