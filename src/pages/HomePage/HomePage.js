import React, { useContext } from "react";
import { useState } from "react";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import GlobalContext from "../../Global/GlobalContext";
import { ContainerPrincipal} from "./Styled";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import {NavScroll} from "./Styled";
import Footer from "../../components/Footer/Footer";
import { FooterSpace } from "./Styled";
import useProtectedPage from "../../hooks/useProtected";
import { useRequest } from "../../hooks/useRequest";

const HomePage = () => {
    useProtectedPage()
    const { cont, setCont } = useState(false)
    const { restaurantList, setReastaurantList, restName, setRestName, cart, setCart } = useContext(GlobalContext)
    const {data, data2} = useRequest()

    const newList = restaurantList

    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("")
    const restList = restaurantList


    const list = restList
        .filter(restaurant => {
            return restaurant.name.toLowerCase().includes(search.toLowerCase())
        })
        .filter(restaurant => {
            return restaurant.category.toLowerCase().includes(category.toLowerCase())
        })
        .map((item) => {
            return (
                <div key={item.id}>
                    {/* <p>{item.name}</p> */}
                    <RestaurantCard
                        rest={item}
                    />
                </div>
            )
        })

    const updateSearch = (e) => {
        setSearch(e.target.value)
    }

    const categoryArabe = () => {
        setCategory("Árabe")
    }

    const categoryHamburguer = () => {
        setCategory("Hamburguer")
    }

    const categoryItaliana = () => {
        setCategory("Italiana")
    }

    const categorySorvetes = () => {
        setCategory("Sorvetes")
    }

    const categoryCarnes = () => {
        setCategory("Carnes")
    }

    const categoryBaiana = () => {
        setCategory("Baiana")
    }

    const categoryPetiscos = () => {
        setCategory("Petiscos")
    }

    const categoryAsiatica = () => {
        setCategory("Asiática")
    }

    const categoryMexicana = () => {
        setCategory("Mexicana")
    }

    const categoryAll = () => {
        setCategory("")
    }

    return (
        <ContainerPrincipal>
            <input
                placeholder={"Restaurante"}
                value={search}
                onChange={updateSearch}
            />


            {/* <div class="scroll"> */}
                <NavScroll>
                    <button onClick={categoryAll}>Todos</button>
                    <button onClick={categoryArabe}>Árabe</button>
                    <button onClick={categoryHamburguer}>Hamburguer</button>
                    <button onClick={categoryItaliana}>Italiana</button>
                    <button onClick={categorySorvetes}>Sorvetes</button>
                    <button onClick={categoryCarnes}>Carnes</button>
                    <button onClick={categoryBaiana}>Baiana</button>
                    <button onClick={categoryPetiscos}>Petiscos</button>
                    <button onClick={categoryAsiatica}>Asiática</button>
                    <button onClick={categoryMexicana}>Mexicana</button>
                </NavScroll>
            {/* </div> */}

            {restaurantList.length === 10 ? list : "Loading..."}
            <FooterSpace/>
            <Footer 
            imgHome={true}
            imgCart={false}
            />
        </ContainerPrincipal>
    )
};

export default HomePage;