import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { BASE_URL } from "../constants/urls";
import { goToAddress, goToHome } from "../routes/coordinator";



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

            alert("login realizado com sucesso!")
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
            alert("Cadastro realizado com sucesso!")
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
            alert("Cadastro realizado com sucesso!")
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

    console.log(payment)
    console.log(id)
    console.log(body)

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
            alert("Pedido realizado com sucesso!")
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
                // alert(error)

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
                // alert(error)

            });

    };

    useEffect(() => {
        GetOrderHistory()
    }, [])

    return [data2, GetOrderHistory]
}

