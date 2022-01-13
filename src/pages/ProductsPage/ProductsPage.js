import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import GlobalContext from "../../Global/GlobalContext";

const ProductsPage = () => {
    const { restName, setRestName, restaurantList, setReastaurantList, cart, setCart, restId, setRestId } = useContext(GlobalContext)
    const { id } = useParams()
    const list = restaurantList
    setRestId(id)


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
            />
        )
    })



    return (
        <div>
            <Header><p>Produtos</p></Header>
            {product}
        </div>

    )
}

export default ProductsPage;