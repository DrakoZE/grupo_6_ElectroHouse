import Button from "./button/button";
import ContentDiv from "./contentDiv/contentDiv";
import { getProducts } from "../../services/Products";
import CategoryDiv from "./categoryDiv/categoryDiv"
import react, {useState, useEffect} from "react"

function Main() {

    const [ category, setCategory ] = useState({})
    const [ product, setProduct ] = useState({})
    useEffect(() => {

        async function getProducts() {
            
                const result = await fetch(`http://localhost:3001/api/products`)
                const data = await result.json();
                if(result.status == 200) {
                    setProduct(data)
                }
        };
        async function getCategories() {
            
            const result = await fetch(`http://localhost:3001/api/categories`)
            const data = await result.json();
            if(result.status == 200) {
                setCategory(data)
            }
    }
        getCategories()
        getProducts()
    }, [])

    const datos = [
        {
            texto: "PRODUCTOS",
            color: "#A4CAE1",
            numero: 4,
            icono: "fa-cart-shopping"
        },
        {
            texto: "USUARIOS",
            color: "green",
            numero: 2,
            icono: "fa-users"
        },
        {
            texto: "CATEGORIAS",
            color: "yellow",
            numero: 10,
            icono: "fa-layer-group"
        }
    ];

    return (
        <main className="App-main">
            <section className="section-buttons">
                {console.log(getProducts())}
                {!Array.datos && datos.map((dato,i)=>  <Button key={i+dato.texto} texto={dato.texto} color={dato.color} numero={dato.numero} icono={dato.icono} />)}
            </section>

            <section className="section-info">
                <ContentDiv product={product}/>
                <CategoryDiv category={category}/>
            </section>
        
        </main>
    )
}

export default Main;