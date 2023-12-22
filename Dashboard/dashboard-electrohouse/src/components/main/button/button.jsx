function Button(props) {
    const {
        texto,
        color,
        numero,
        icono
    } = props
    return (
        <div className="button-div">

            <div className="button-body" style={{backgroundColor: color}}>
                <div className="button-text">
                    <h3>TOTAL DE {texto}: {numero}</h3>
                </div>

                <div className="button-icon">
                    <i class={`fa-solid ${icono}`}></i>
                </div>
            </div>
        </div>
    )
}

export default Button;