import React, { useContext } from "react";
import { ContainerPrincipal, Container } from "./styled";
import GlobalContext from "../../Global/GlobalContext";
import { goToProducts } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

const RestaurantCard= (props) =>{
    const { restName, setRestName, restaurantList, setReastaurantList } = useContext(GlobalContext)
    const history = useHistory()
    // const rest = restaurantList.find((item)=>{
    //     return props.id === item.restaurant.id
    // })

    // console.log(rest)


    return(
        <ContainerPrincipal onClick={()=>goToProducts(history, props.rest.id)}  key={props.rest.id}>
            <img src={props.rest.logoUrl}/>
            <p class="titulo">{props.rest.name}</p>
            <Container>
                <p class="entrega">tempo de entrega: {props.rest.deliveryTime}</p>
                <p class="frete">Frete: R${props.rest.shipping},00</p>
            </Container>
        </ContainerPrincipal>
    )
}

export default RestaurantCard;