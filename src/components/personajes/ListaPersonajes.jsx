import { useEffect, useState } from "react";
import {fetchPersonajes} from "./Api"
import { Link } from "react-router-dom";
import './Personajes.css'

export const ListaPersonajes= ()=> {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPersonajes()
        setPersonajes(data)
        setCargando(false);
      } catch (error) {
        console.error(error)
        setCargando(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Listado de Personajes</h2>
      {cargando ? (
        <p>Cargando Personajes...</p>
      ) : (
        <ul className="personajes-lista">
          {personajes.map((personaje) => (
            <li key={personaje.id} className="personaje-item">
              <h3>{personaje.name}</h3>
              <p>Casa: {personaje.house}</p>
              <p>Actor: {personaje.actor}</p>
              <Link to={`/detallePersonaje/${personaje.id}`}>Ver Detalles</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

