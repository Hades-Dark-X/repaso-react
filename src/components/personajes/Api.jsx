export const fetchPersonajes= async()=> {
    const url= 'https://hp-api.onrender.com/api/characters'

    try {
        const response= await fetch(url)
        const data= await response.json()
        return data
    } catch (error) {
        console.error('error al solicitar los personajes desde la api', error)
    }
}

export const fetchPersonajesById= async()=> {
    const url= 'https://hp-api.onrender.com/api/characters/'

    try {
        const response= await fetch(`https://hp-api.onrender.com/api/characters/${id}`)
        const data= await response.json()
        return data[0]
    } catch (error) {
        console.error('error al solicitar los personajes desde la api por id', error)
    }
}