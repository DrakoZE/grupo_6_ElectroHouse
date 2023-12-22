import Card from "../card/card"

function ContentDiv(props) {
    const {
        product
    } = props

    // useEffect(() => {

    //     async function getProducts() {
            
    //             const result = await fetch(`http://localhost:3001/api/users`)
    //             const data = await result.json();
    //             if(result.status == 200) {
    //                 setLoading(false)
    //                 setProduct(data)
    //             }
    //     }
    //     getProducts()
    // }, [product]) 

    return (
        <section className="container">
        <h1>LISTADO DE PRODUCTOS</h1>
        {Array.isArray(product.products) && product.products.map((product, i) => <Card key={i + product.producto} titulo={product.producto} id={product.id} imagen={product.foto} precio={product.precio}></Card> )}
        </section>
    )
}

export default ContentDiv