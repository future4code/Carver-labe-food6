import React, { useContext, useState } from "react";
import GlobalContext from "../../Global/GlobalContext";
import { AddAddress } from "../../hooks/useRequest";
import PopUp from "../PopUp/PopUp";


const CartCard = (props) => {
    const { restaurantList, setReastaurantList, restName, setRestName, cart, setCart } = useContext(GlobalContext)
    const { quantity, setQuantity } = useState(0)
    const { cont, setCont } = useState(false)

    const AddProduct = (id) => {



        let onCart = false
        
        for (let prod of cart) {
            if (id === prod.id) {
                onCart = true
            }
        }

        if (onCart) {
            const newCart = cart.map((list) => {
                if (id === list.id) {
                    return { ...list, quantity: list.quantity + 1 }
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
                quantity: 1
            }
            const newCart = [...cart, productAdd]

            setCart(newCart)
            
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

    return (
        <div>




            <p>{props.name}</p>
            <p>{props.quantity}</p>
            <p>R${props.price}</p>

            <button onClick={() => AddProduct(props.id)}>adicionar</button>
            <button onClick={() => RemoveProduct(props.id)}>Remover</button>

        </div>
    )
}

export default CartCard;