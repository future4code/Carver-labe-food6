import React from "react";
import { useHistory } from "react-router-dom";
import { Head } from "./styled";
import back from "../../assets/img/back.png"



const Header = ({children}) => {
    const history = useHistory()
    return (
        <Head>
            <button onClick={history.goBack}>
                <img src={back} alt="Botão voltar"/>
            </button>
            <div>
                {children}
            </div> 

            <div class="space"></div>
        </Head>
    )
};

export default Header;