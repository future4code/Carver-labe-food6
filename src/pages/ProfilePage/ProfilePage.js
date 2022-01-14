import React, { useContext } from "react";
import GlobalContext from '../../Global/GlobalContext'
import { GetProfile, UseOrderHitory, UseRequestProf } from "../../hooks/useRequest";
import { ContainerPrincipal } from "./Styled";
import Logo from '../../assets/img/edit.png'
import { goToAddress, goToHome, goToProfile, goToProfileEdit } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import useProtectedPage from "../../hooks/useProtected";

const ProfilePage = () => {
    useProtectedPage()
    const { restaurantList, setReastaurantList, restName, setRestName, cart, setCart, restId, setRestId, orderActive, setOrderActive, userProfile, setUserProfile } = useContext(GlobalContext)
    const [data, GetProfile] = UseRequestProf({})
    const [data2, GetOrderHistory] = UseOrderHitory([])
    const history = useHistory()

    setUserProfile(data)
    

    const prof = data !== undefined ? userProfile : "Loading..."

    const orderHist = data2 !== undefined ? data2 : "Loading"


    const hist = orderHist.map((order) => {
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
        <ContainerPrincipal>
            <Header
            state={5}
            back={goToHome}
            />


            <div class="dados-basicos">
                <div class="dados2">
                    <span>{prof.name}  </span>
                    <span>{prof.email}</span>
                    <span>{prof.cpf}</span>
                </div>
                <div class="div-logo">
                    <img id="logo" src={Logo} onClick={() => goToProfileEdit(history)} />
                </div>
            </div>


            <div class="endereco-cadastrado">
                <div>
                    <p id="titulo-endereco">Endereço Cadastrado</p>
                    <p>{prof.address}</p>
                </div>
                <div class="div-logo">
                    <img id="logo" src={Logo} onClick={() => goToAddress(history)} />
                </div>
            </div>

            <div>
                <p>Histórico de pedidos</p>
                {hist.length > 0 ? hist : <p>Você não reazlizou nenhum pedido</p>}
            </div>



        </ContainerPrincipal>
    )
};

export default ProfilePage;