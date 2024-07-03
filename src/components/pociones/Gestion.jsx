import { useState, useEffect } from "react"
import { FormularioPociones } from "./FormularioPociones"


export const Gestion= ()=>{
    cosnt [pociones, setPociones] = useState([])
    
    /* Cargar Pociones */
    useEffect(()=>{
        try {
            const pocionesGuardadas= JSON.parse(localStorage.getItem('pociones'))
            console.log('pociones cargadas', pocionesGuardadas)

            if (pocionesGuardada) {
                setPociones(pocionesGuardadas)
            }
        } catch (error) {
            console.error('Ocurrio un error al cargar las pociones guadadas')
        }
    })

    /* Almacenar Pociones */
    useEffect(()=>{
        localStorage.setItem('pociones', JSON.stringify(pociones))
    }, [pociones])

    /* Agregar Pociones */
    const agregarPocion= (nombre) =>{
        const nuevaPocion= {
            id: Date.now(),
            nombre
        }
        setPociones([...pociones, nuevaPocion])
    }

    return(
        <div className="contenedorPociones">
            <h1 className="titulo">Gestión de Pociones en Hogwarts</h1>
            <FormularioPociones agregarPocion={agregarPocion}/>
        </div>
    )
}