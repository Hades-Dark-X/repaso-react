import React, { useState, useEffect } from 'react';

function ListaCasas() {
  const [datos, setDatos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const peticion = async () => {
      try {
        const response = await fetch('https://hp-api.onrender.com/api/characters/house/gryffindor');
        const data = await response.json();
        setDatos(data);
      } catch (error) {
        setError(error);
        console.error('Error:', error);
      }
    };

    peticion();
  }, []);

  if (error) {
    const errorMessage = getErrorMessage(error); 
    return <div className="error-message">{errorMessage}</div>;
  }

  return (
    <div>
      {datos.map((dato) => (
        <div key={dato.id}>
          <li>{dato.name}</li>
          <li>{dato.house}</li>
        </div>
        
      ))}
    </div>
  );
}

function getErrorMessage(error) {
  if (error.code === 'ENOTFOUND') {
    return 'No se pudo encontrar el servidor.';
  } else if (error.code === 'ECONNRESET') {
    return 'Se perdió la conexión con el servidor.';
  } else {
    return 'Ocurrió un error inesperado.';
  }
}

export default ListaCasas;
