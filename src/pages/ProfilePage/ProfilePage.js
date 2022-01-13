import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import GlobalContext from '../../Global/GlobalContext'
import { GetProfile, UseOrderHitory, UseRequestProf } from "../../hooks/useRequest";

const ProfilePage = () => {
    const { restaurantList, setReastaurantList, restName, setRestName, cart, setCart, restId, setRestId, orderActive, setOrderActive, userProfile, setUserProfile } = useContext(GlobalContext)
    const [data, GetProfile] = UseRequestProf({})
    const [data2, GetOrderHistory] = UseOrderHitory([])

    setUserProfile(data)
    console.log(data2)

    const prof = data !== undefined ? userProfile : "Loading..."

    const orderHist = data2 !== undefined ? data2 : "Loading"


    const hist = orderHist.map((order)=>{
       let date = order.createdAt
       let dateTime = new Date(date)
       let options = {
           year: 'numeric', month: 'numeric', day: 'numeric'
       }

       let result = dateTime.toLocaleString('pt', options)

        return (
            <div>                
                <p>{order.restaurantName}</p>
                <p>{order.totalPrice}</p>
                <p>{result}</p>

            </div>
        )
    })



    return (
        <div>
            <Header>Meu Perfil</Header>
            <p>{prof.name}</p>
            <p>{prof.email}</p>
            <p>{prof.cpf}</p>
            <div>
                <p>EndereçoCadastrado</p>
                <p>{prof.address}</p>
            </div>

            {hist}



        </div>
    )
};

export default ProfilePage;