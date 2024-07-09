import { useState } from "react";

export const FormularioPociones= ({agregarPocion})=>{
    const [nuevaPocion, setNuevaPocion] = useState('')
    const handleSubmit= (e) => {
        e.preventDefault()

        if (nuevaPocion.trim() !== '') {
            agregarPocion(nuevaPocion)
            setNuevaPocion('')
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={nuevaPocion}
            placeholder="Nueva Poción"
            onChange={(e) => setNuevaPocion(e.target.value)}/>
            <button type="submit">Agregar</button>
        </form>
    )   
}

