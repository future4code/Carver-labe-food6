import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { BASE_URL } from "../constants/urls";
import { goToAddress, goToHome } from "../routes/coordinator";
import GlobalContext from "../Global/GlobalContext";

export const useRequest = () =>{
    const { restaurantList, setReastaurantList, restName, setRestName, cart, setCart } = useContext(GlobalContext)
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])

    

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
                        setData(restaurantList)
                    }

                    
                   
                })
                .catch((error)=>{

                })
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
                setData2(restName)
                
            })
            .catch((error)=>{

            }) 
    }

    useEffect(()=>{
        getRestaurant()
    }, [])

    return [data, data2]

}

export const Login = (body, history) => {
    let userData = {}

    axios
        .post(`${BASE_URL}/login`, body,
            {
                headers: {
                    contentType: "application/json"
                }
            }
        )
        .then((response) => {
            localStorage.setItem('token', response.data.token)
            userData = response.data.user.hasAddress

            
            if (userData === false) {
                goToAddress(history)
            } else {
                goToHome(history)
            }

        })
        .catch((error) => {
            

        });
};

export const signUp = (body, history) => {

    axios
        .post(`${BASE_URL}/signup`, body,
            {
                headers: {
                    contentType: "application/json"
                }
            }
        )
        .then((response) => {
            localStorage.setItem('token', response.data.token)
            goToHome(history)

        })
        .catch((error) => {
            

        });
};

export const AddAddress = (body, history) => {

    axios
        .put(`${BASE_URL}/address`, body,
            {
                headers: {
                    auth: localStorage.getItem("token"),
                    contentType: "application/json"
                }
            }
        )
        .then((response) => {
            localStorage.setItem('token', response.data.token)
            goToHome(history)

        })
        .catch((error) => {
            

        });
};

export const UpdateProfile = (body, history) => {

    axios
        .put(`${BASE_URL}/profile`, body,
            {
                headers: {
                    auth: localStorage.getItem("token"),
                    contentType: "application/json"
                }
            }
        )
        .then((response) => {
            goToHome(history)

        })
        .catch((error) => {
           

        });
};

export const PlaceOrder = (body2, id, history, setCart, setOrderActive, payment) => {

    const body = {
        products: body2,
        paymentMethod: payment
    }


    axios
        .post(`${BASE_URL}/restaurants/${id}/order`, body,
            {
                headers: {
                    auth: localStorage.getItem("token"),
                    contentType: "application/json"
                }
            }
        )
        .then((response) => {
            goToHome(history)
            setCart([])
            setOrderActive(true)


        })
        .catch((error) => {
            

        });
};

export const UseRequestProf = (initialState) => {
    const [data, setData] = useState(initialState)

    const GetProfile = (setUserProfile) => {


        axios
            .get(`${BASE_URL}/profile`,
                {
                    headers: {
                        auth: localStorage.getItem("token"),
                        contentType: "application/json"
                    }
                }
            )
            .then((response) => {
                setData(response.data.user)
                setUserProfile(data)


            })
            .catch((error) => {
                

            });



    };

    useEffect(() => {
        GetProfile()
    }, [])

    return [data, GetProfile]
}

export const UseOrderHitory = (initialState) => {
    const [data2, setData2] = useState(initialState)

    const GetOrderHistory = () => {


        axios
            .get(`${BASE_URL}/orders/history`,
                {
                    headers: {
                        auth: localStorage.getItem("token"),
                        contentType: "application/json"
                    }
                }
            )
            .then((response) => {
                setData2(response.data.orders)
                


            })
            .catch((error) => {
                

            });

    };

    useEffect(() => {
        GetOrderHistory()
    }, [])

    return [data2, GetOrderHistory]
}

