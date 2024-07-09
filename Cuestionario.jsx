import React from 'react'

export const Cuestionario= () =>{
    return(
        <div className="cuestionario">
            <h1>Cuestionario sobre conceptos fundamentales de React</h1>

            <h2>Conceptos básicos de React</h2>

            <p>¿Qué es React y qué problemas resuelve en el desarrollo web?</p>

            <p>React es una libreria de JavaScript desarrollada por Facebook que se utiliza para construir interfaces de usuario interactivas y eficientes. Se centra en la creación de interfaces de usuario declarativas, lo que significa que se describe cómo debería lucir la interfaz en un estado determinado y React se encarga de actualizar automáticamente la interfaz cuando los datos cambian.</p>

            <p>Describe las diferencias entre componentes funcionales y componentes de clase en React.</p>

            <ul>
                <li>La sintaxis es distinta para un componente de clase y uno funcional</li>
                <li>
                Manejan de manera distinta el estado del componente
                </li>
                <li>Un componente de clase tiene un ciclo de vida definido y el funcional no</li>
                </ul>
        
            <p>Explica qué es el estado (state) en React y cómo se diferencia de las props (props).</p>

            <p>El estado Se refiere a un dato que es dinamico, el estado cambia en respuesta a un evento en la interfaz o una interación</p>

            <p>Las props por otro lado son las propiedades o atributos que se le pasan a un componete para configurar la manera en que este componente se comporta</p>

            <h2>Hooks en React</h2>

            <p>¿Qué son los hooks en React y por qué son útiles?</p>
           
            <p>Son funciones especiales dentro de React, que seenlazan al estado de un componente o a sus ciclo de vida, se suelen usar por su simplicidad en su sintaxis y flexibilidad</p>

            <p>Explica el uso del hook useState en React. Proporciona un ejemplo práctico de su implementación.</p>
            <p>Use State permite manejar el estado de un componente
            ¿Cómo funciona useState?

            useState toma un valor inicial como argumento y devuelve un array que contiene dos elementos:

            El estado actual: Este es el valor actual del estado que puede ser leído en cualquier parte del componente.

            Un setEstado para actualizar el estado: Esta función te permite actualizar el valor del estado.
            </p>

            <p>¿Cuál es el propósito del hook useEffect en React y cuándo deberías usarlo en tus componentes?</p>

            <p>El proposito de useffect es ejecutar código en un momento especifico es decir; sí una condición se cumple entonces ejecuta este código</p>

            <p>cuando debe ser usado: Cuando necesitas realizar una acción en respuesta a cambios en el estado o las props:</p>
        </div>
    )
}