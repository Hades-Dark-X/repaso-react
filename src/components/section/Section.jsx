import "./Section.css"
import hogwarts from "../../assets/img/hogwarts.jpg"
import Button from "../button/Button"

const Section= ()=>{
    return(
        <section className="section">
            <h2>Información sobre Hogwarts</h2>
            <p>La escuela de mágia y hechicería de Hogwarts, es un lugar magíco donde los jóvenes magos y brujas aprendenden a controlar sus poderes.</p>
            <img src= {hogwarts} alt="hogwarts" />
            <Button/>
        </section>
    )
}

export default Section