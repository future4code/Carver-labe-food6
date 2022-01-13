import React, { useContext, useState } from "react";
import GlobalContext from "../../Global/GlobalContext";
import CartCard from "../../components/CartCard/CartCard"
import { PlaceOrder } from "../../hooks/useRequest";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";

const CartPage = () => {
    const { restaurantList, setReastaurantList, restName, setRestName, cart, setCart, restId, setRestId, orderActive, setOrderActive } = useContext(GlobalContext)
    const [order, setOrder] = useState([])
    const history = useHistory()

    const cartList = cart.map((item) => {
        return (
            <CartCard
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            />
            
            )
        })

        const valorTotal = () => {
            let total = 0
    
            for (let prod of cart) {
                total = (total + (prod.price * prod.quantity))
            }
            
            return total
        }

        const sendOrder =()=>{
            let products = []
            let obj = {}
            
            cart.forEach((item)=>{
                const quantity = item.quantity
                const id = item.id

                const newList = {...obj, id, quantity}
                products.push(newList)
                console.log(products)
                setOrder(products)
                
            })
            console.log(products)
            console.log(restId)
            
            PlaceOrder(products, restId, history, setCart, setOrderActive)
                 
                       
        }
        


return (
    <div>
        <Header>Carrinho</Header>
        {cartList}
        <p>Total: {valorTotal()}</p>

        <button onClick={()=>sendOrder()}>Confirmar</button>
    </div>
)
};

export default CartPage;