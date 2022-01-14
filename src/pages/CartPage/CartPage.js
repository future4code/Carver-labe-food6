import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../Global/GlobalContext";
import CartCard from "../../components/CartCard/CartCard"
import { PlaceOrder } from "../../hooks/useRequest";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/img/radiobutton-unchecked.png"
import Logo2 from "../../assets/img/radiobutton-checked.png"
import Footer from "../../components/Footer/Footer"
import { Img } from "./Styled"
import useProtectedPatge from "../../hooks/useProtected"

const CartPage = () => {
    useProtectedPatge()
    const { restaurantList, setReastaurantList, restName, setRestName, cart, setCart, restId, setRestId, orderActive, setOrderActive } = useContext(GlobalContext)
    const [order, setOrder] = useState([])
    const [payment, setPayment] = useState("")
    const [moneyCheck, setMoneyCheck] = useState(false)
    const [cardCheck, setCardCheck] = useState(false)
    const [cont, setCont] = useState("")
    const history = useHistory()
    let paymentMethod = ""

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
                setOrder(products)
                
            })
            console.log("payment", payment)
            
            PlaceOrder(products, restId, history, setCart, setOrderActive, payment)

            
                 
                       
        }

        const money = "money"
        const card = "creditcard"
        
        // useEffect(()=>{
        //     setPayment()
        // }, [payment])
        const update = () =>{

        }
        
        const aux = () =>{
            setCardCheck(false)
            setMoneyCheck(true)
            setPayment(money)
            // setStatePayment()
            update()
            console.log(payment)
        }

        const aux2 = () =>{
            setCardCheck(true)
            setMoneyCheck(false)
            setPayment(card)
            update()
            console.log(payment)
        }
        console.log(payment)

        // const setStatePayment = () =>{
        //     if(payment === money){
        //         setMoneyCheck(true)
        //         setCardCheck(false)
        //     }else if(payment === card){
        //         setCardCheck(true)
        //         setMoneyCheck(false)
        //     }else {
        //         setCardCheck(false)
        //         setMoneyCheck(false)
        //     }
        // }

        

        

return (
    <div>
        {cartList}
        <p>Total: {valorTotal()}</p>

         <div>   
         {moneyCheck ? <span><Img src={Logo2} onClick={()=>aux()}/> Dinheiro </span> : <span><Img src={Logo} onClick={()=>aux()}/> Dinheiro </span>} 
         </div>
         <div>
         {cardCheck ? <span><Img src={Logo2} onClick={()=>aux2()}/> Cartão de credito </span> : <span><Img src={Logo} onClick={()=>aux2()}/> Cartão de credito </span>} 
         </div>
        
         

        <button onClick={()=>sendOrder()}>Confirmar</button>

        <Footer
        imgCart={true}
        imgHome={false}
        />
    </div>
    
)
};

export default CartPage;