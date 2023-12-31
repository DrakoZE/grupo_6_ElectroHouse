function Card(props) {
    const {
        titulo,
        id,
        imagen,
        precio
    } = props
    return (
        <div className="button-div">
            <div className="button-body">
            <h3>{id}</h3>
            <h1>{titulo}</h1>
            <p>{precio}</p>
            <img src={imagen} alt="imagen del producto" style={{maxWidth: "250px"}}/>
            </div>
        </div>
    )
}

export default Card