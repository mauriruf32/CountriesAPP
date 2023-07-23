const Card = (props) =>{
    return(
        <div>
        <p>Nombre:{props.name}</p>
        <p>Telefono:{props.phone}</p>
        <p>Email:{props.email}</p>
        </div>
    )
}

export default Card;