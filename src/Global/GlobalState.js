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
    


    useEffect(()=>{
        getRestaurant()
    }, [])

    useEffect(() => {
        const newList = []
        
        restName.forEach((item) => {
            axios
                .get(`${BASE_URL}/restaurants/${item.id}`,
                    {
                        headers: {
                            auth: localStorage.getItem("token"),
                            contentType: "application/json"
                        }
                    }
                )
                .then((response)=>{
                    const newList2 = {...response.data.restaurant}
                    newList.push(newList2)
                    
                    if (newList.length === 10) {
                        const newList3 = newList.sort((a, b) => {
                            return a.id - b.id
                        })
                        setReastaurantList(newList3)
                    }

                    
                   
                })
                .catch((error)=> console.log("deu ruim"))
        })
    }, [restName])



    const getRestaurant = ()=>{

        axios.
            get(`${BASE_URL}/restaurants`,
                {
                    headers: {
                        auth: localStorage.getItem("token"),
                        contentType: "application/json"
                    }
                }
            )
            .then((response) => {
                setRestName(response.data.restaurants)
                
            })
            .catch((error) => console.log("deu ruim"))
    }

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