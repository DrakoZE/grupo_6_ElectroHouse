function CardCategory(props) {
    const {
        titulo,
        id
    } = props
    return (
        <div className="button-div">
            <div className="button-body">
            <h3>{id}</h3>
            <h1>{titulo}</h1>
            </div>
        </div>
    )
}

export default CardCategory