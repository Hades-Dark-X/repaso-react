import Casa from './Casa';
import casas from './DatosCasas';

const ListaCasas= ()=>{
    return(
        <div>
            {casas.map((casa, index)=> (
                <Casa 
                key={index}
                nombre={casa.nombre}
                valores={casa.valores}
                animal={casa.animal}
                color={casa.color}
                director={casa.director}
                ubicacion={casa.ubicacion}
                />
            ) )}
        </div>
    )
}

export default ListaCasas