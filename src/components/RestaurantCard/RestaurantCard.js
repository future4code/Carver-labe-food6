import React, { useContext } from "react";
import { ContainerPrincipal, Container } from "./styled";
import GlobalContext from "../../Global/GlobalContext";

const RestaurantCard= (props) =>{
    const { restName, setRestName, restaurantList, setReastaurantList } = useContext(GlobalContext)

    // const rest = restaurantList.find((item)=>{
    //     return props.id === item.restaurant.id
    // })

    // console.log(rest)


    return(
        <ContainerPrincipal>
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