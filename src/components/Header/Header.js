import React from "react";
import { Head } from "./styled";
import LogoBack from '../../assets/img/back.png'
import { useHistory } from "react-router-dom";

const Header = (props) => {
    const history = useHistory()

    const screenHeader = (state) => {

        if (state === 5) {
            return (
            <div>
                <img id="back-logo" src={LogoBack} onClick={() => props.back(history)} alt="voltar"/>
            </div>
            )
        }
    }


    return (
        <Head>
            {screenHeader(props.state)}
        </Head>
    )
};

export default Header;