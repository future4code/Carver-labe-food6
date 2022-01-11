import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { BASE_URL } from "../constants/urls";
import { goToAddress, goToHome } from "../routes/coordinator";

   export const Login = (body, history) => {
    let userData = {}
    const newList = {}
        axios
            .post(`${BASE_URL}/login`, body, 
                {headers: {
                    contentType: "application/json"
                }
            }
            )
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                userData =  response.data.user.hasAddress
                
                alert("login realizado com sucesso!")
                if(userData === false){
                    goToAddress(history)
                }else {
                        goToHome(history)
                }

            })
            .catch((error) => {
                alert(error)

            });
    };

   export const signUp = (body, history) => {

        axios
            .post(`${BASE_URL}/signup`, body, 
                {headers: {
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
                alert(error)
 
            });
    };


//     return [data, Login]

// }

// export const useRequestData3 = (setIsLoading, url) => {
//     const [data, setData] = useState();
 
//     const GetPokemons = () => {

//         axios
//             .get(`${url}`)
//             .then((response) => {
//                 setData(response.data);

//                 setIsLoading(false);

//             })
//             .catch((error) => {
//                 setIsLoading(false);


//             });
//     };

//     useEffect(() => {
//         GetPokemons();
//     }, []);

//     return [data, GetPokemons]

// }