import { useState, useEffect } from "react"
import { FormularioPociones } from "./FormularioPociones"
import {ListaPociones} from "./ListaPociones"

export const Gestion = () => {
    /* Carga pociones almacenadas en localStorage */
    const [pociones, setPociones] = useState([]);
  
    useEffect(() => {
      try {
        const pocionesGuardadas = JSON.parse(localStorage.getItem("pociones"));
        console.log("pociones cargadas desde localstorage", pocionesGuardadas);
  
        pocionesGuardadas ? setPociones(pocionesGuardadas) : null;
      } catch (error) {
        console.error("A ocurrido un error al cargar las pociones", error);
      }
    }, []);
  

    /* Almacena pociones en localStorage */
    useEffect(()=>{
        localStorage.setItem('pociones', JSON.stringify(pociones))
    }, [pociones])

    /* Agregar una nueva poción a la lista de pociones*/
    const agregarPocion= (nombre)=>{
        const nuevaPocion={
            id : Date.now,
            nombre : nombre,
            completada: false
        }
        setPociones([...pociones, nuevaPocion])
    }

    /* Eliminar Poción */
    const eliminarPocion= (id)=>{
      const nuevasPociones= pociones.filter((pocion) =>
      pocion.id !== id)
      setPociones(nuevasPociones)
    }

    /* Manejo del estado para saber si se completo la poción o no */
    const completarPocion= (id)=>{
      const nuevasPociones= pociones.map((pocion) =>
        pocion.id === id ? {...pocion, completada: !pocion.completada}: pocion
      )
      setPociones(nuevasPociones)
    }


    return(
        <div className="contenedor-pociones">
            <h1 className="titulo">Gestión de pociones en Hogwarts</h1>
            <ListaPociones pociones={pociones}
            completarPocion= {completarPocion}
            eliminarPocion= {eliminarPocion}
            />
            <FormularioPociones agregarPocion={agregarPocion}/>   
        </div>
    )
}