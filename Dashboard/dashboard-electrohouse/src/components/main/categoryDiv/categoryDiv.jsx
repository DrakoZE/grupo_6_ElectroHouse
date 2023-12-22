import react, {useState, useEffect} from "react"
import CardCategory from "./cardCategory"

function ContentDiv(props) {
    const {
        category
    } = props

    return (
        <section className="container">
        <h1>LISTA DE CATEGORIAS</h1>
        {console.log(category)}
        {Array.isArray(category.categorias) && category.categorias.map((category, i) => <CardCategory key={i + category.category} titulo={category.category} id={category.id}></CardCategory> )}

        </section>
    )
}

export default ContentDiv