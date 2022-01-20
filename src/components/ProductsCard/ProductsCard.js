import React, { useContext, useState } from "react";
import GlobalContext from "../../Global/GlobalContext";
import { AddAddress } from "../../hooks/useRequest";
import { Container, ContainerPrincipal } from './styled'
import PopUp from "../PopUp/PopUp";
import Header from "../../components/Header/Header"
import { useHistory } from "react-router-dom";

const ProductsCard = (props) => {
    const { restaurantList, setReastaurantList, restName, setRestName, cart, setCart, restId, setRestId } = useContext(GlobalContext)
    const { quantity, setQuantity } = useState(0)
    const [cont, setCont] = useState()
    const [popUp, setPopUp] = useState(false)
    const history = useHistory()

    const AddProduct = (id, cont) => {
        setRestId(props.restaurantId)
        console.log(restId)
        
        let onCart = false
        console.log(id)
        for (let prod of cart) {
            if (id === prod.id) {
                onCart = true
            }
        }

        if (onCart) {
            const newCart = cart.map((list) => {
                if (id === list.id) {
                    return { ...list, quantity: cont }
                }
                return list
            })
            setCart(newCart)
        } else {
            const productAdd = {
                name: props.name,
                description: props.description,
                price: props.price,
                id: props.id,
                quantity: cont
            }
            const newCart = [...cart, productAdd]

            setCart(newCart)
            // setQuantity()
        }
    }

    const RemoveProduct = (id) => {
        const index = cart.findIndex((prodIndex) =>
            prodIndex.id === props.id
        )
        console.log(index)
        const newCart = [...cart]
        newCart.splice(index, 1)
        setCart(newCart)
    }

    const openPopUp = () => {
        setPopUp(true)
    }
    const closePopUp = () => {
        setPopUp(false)
    }

    const amauntCart = (val) => {
        setCont(val)
    }

    const aux = (id, cont) => {
        AddProduct(id, cont)
        

        openPopUp()
    }

    return (
        <ContainerPrincipal>
            

            <Container>


                <img src={props.photoUrl} />

                <p class="titulo">{props.name}</p>


                <p class="description">{props.description}</p>
                <p>R${props.price}</p>

                <button onClick={() => aux(props.id, cont)}>adicionar</button>
                <button onClick={() => RemoveProduct(props.id)}>Remover</button>

                {popUp ? <PopUp closepopUp={closePopUp} amauntCart={amauntCart} AddProduct={AddProduct} id={props.id} /> : null}
            </Container>
        </ContainerPrincipal>
    )
}

export default ProductsCard;