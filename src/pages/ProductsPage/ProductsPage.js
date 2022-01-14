import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import GlobalContext from "../../Global/GlobalContext";
import useProtectedPage from "../../hooks/useProtected";

const ProductsPage = () => {
    useProtectedPage()
    const { restName, setRestName, restaurantList, setReastaurantList, cart, setCart, restId, setRestId } = useContext(GlobalContext)
    const { id } = useParams()
    const history = useHistory()
    const list = restaurantList
    


    const getProducts = list.find((item) => {
        return item.id === id
    })

    const productsList = getProducts !== undefined ? getProducts['products'] : undefined

    console.log(productsList)

    const product = getProducts && productsList.map((prod) => {
        console.log(prod.id)
        return (
            <ProductsCard
                name={prod.name}
                description={prod.description}
                price={prod.price}
                id={prod.id}
                photoUrl={prod.photoUrl}
                restaurantId={id}
            />
        )
    })



    return (
        <div>
            <Header
                state={5}
                back={history.goBack}
            />
            {product}
        </div>

    )
}

export default ProductsPage;