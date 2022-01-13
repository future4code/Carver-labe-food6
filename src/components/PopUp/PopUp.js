import React from "react";
import {PopUpContainer, BackPopUp} from "./styled"
import { useState } from "react";
const PopUp =(props)=>{

    const [cont , setCont] = useState(0)

    const aux = (value) => {
        props.closepopUp()
        props.amauntCart(value) 
        props.AddProduct(props.id, value)
    }

    const contCart = (e) => {
        setCont(e.target.value)
    }

    return(
        <BackPopUp>
        <PopUpContainer>
            <p>selecione a quantidade desejada</p>

            <select value={cont} onChange={contCart}>
                <option value={Number(0) } >0</option>
                <option value={Number(1) } >1</option>
                <option value={Number(2) } >2</option>
                <option value={Number(3) } >3</option>
                <option value={Number(4) } >4</option>
                <option value={Number(5) } >5</option>
                <option value={Number(6) } >6</option>
                <option value={Number(7) } >7</option>
                <option value={Number(8) } >8</option>
                <option value={Number(9) } >9</option>
                <option value={Number(10) } >10</option>
            </select>

            <button onClick={()=>aux(cont)}>ADICIONAR AO CARRINHO</button>
        </PopUpContainer>
        </BackPopUp>
    )
}

export default PopUp;