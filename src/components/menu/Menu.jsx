import {Link} from 'react-router-dom'
import './Menu.css'

export const Menu= ()=>{
    return(
        <nav className="menu">
            <ul>
                <li><Link to= '/'>Inicio</Link></li>
                <li><Link to= '/casas'>Casas</Link></li>
                <li><Link to= '/pociones'>Pociones</Link></li>
                <li><Link to= '/personajes'>Personajes</Link></li>
            </ul>
        </nav>
    )
}
