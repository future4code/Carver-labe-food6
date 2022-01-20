import React, { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const GlobalState = (props) => {
    const [restName, setRestName] = useState([])
    const [restaurantList, setReastaurantList] = useState([])
    const [cart, setCart] = useState([])
    const [restId, setRestId] = useState(0)
    const [orderActive, setOrderActive] = useState(false)
    const [userProfile, setUserProfile] = useState({})

    useEffect(()=>{
        const data = localStorage.getItem('cart')
        if (data){
          setCart(JSON.parse(data))
        }
      }, [])
    
      useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
      },[cart, restaurantList])

    const data = {
        restName, 
        setRestName,
        restaurantList,
        setReastaurantList,
        cart,
        setCart,
        restId,
        setRestId,
        userProfile, 
        setUserProfile
    }

    return (
        <GlobalContext.Provider value={data}>
            {props.children}
        </GlobalContext.Provider>
    )

} 

export default GlobalState