export const Pocion = ({ pocion, completarPocion, eliminarPocion }) => {
      const { id, nombre, completada } = pocion;
      
    const completar = () => {
      completarPocion(id);
    };

    const eliminar = () => {
      eliminarPocion(id);
    };
    
      return (
        <div className="pocion"> 
          <span className={completada ? 'completada' : ''}>{nombre}</span>

          <button onClick={completar}>
            {completada ? 'pendiente' : 'Completar'}
          </button>
          
          <button onClick={eliminar}>Eliminar</button>
        </div>
      );
    };