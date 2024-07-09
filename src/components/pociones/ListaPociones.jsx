import { Pocion } from "./Pocion";

export const ListaPociones= ({pociones, completarPocion, eliminarPocion})=>{
    return(
        <div>
            <h2>Inventario de pociones</h2>
            {pociones.map((pocion)=>(
                <Pocion
                key={pocion.id}
                pocion={pocion}
                completarPocion={completarPocion}
                eliminarPocion={eliminarPocion}
                />
            ))}
        </div>
    )
}