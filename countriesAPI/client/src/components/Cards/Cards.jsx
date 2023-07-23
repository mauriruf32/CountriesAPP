import Card from "../Card/Card";
import  { useSelector } from "react-redux"

const Cards = () =>{


    const users = useSelector(state=>state.users)

    return(
        <div>
            {users.map(user=>{
                return <Card 
                id={user.id}
                name={user.name}
                phone={user.phone}
                email={user.email}
                />
            })}
        </div>
    )
}

export default Cards;