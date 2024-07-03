import { useEffect, useState } from "react";
import { fetchPersonajes } from "./api";

function ListaPersonajes() {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true); // Se cambió "loading" a "cargando" para mejor legibilidad en español

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPersonajes();
        setPersonajes(data); // Actualizar el estado de "personajes" con los datos obtenidos
        setCargando(false);
      } catch (error) {
        console.error(error); // Manejar el error de forma adecuada
        setCargando(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Listado de Personajes</h2>
      <p>Listado de Personajes</p>
      {cargando ? (
        <p>Cargando Personajes...</p>
      ) : (
        <ul className="personajes-lista">
          {personajes.map((personaje) => (
            <li key={personaje.name} className="personaje-item">
              <h3>{personaje.name}</h3>
              <p>Casa: {personaje.house}</p>
              <p>Actor: {personaje.actor}</p>
              <a href={`/DetallesPersonajes/${personaje.id}`}>Ver Detalle</a>
              {/* Usar etiqueta 'a' para la navegación */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaPersonajes;
