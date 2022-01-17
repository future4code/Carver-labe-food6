import React from 'react'
import { ScreenContainer } from './styled';
import Logo from '../../assets/img/logo-4Future.png';

const Loading = () => {

    return(
        <ScreenContainer>
            <img src={Logo} alt='logo'/>
        </ScreenContainer>
    )
}

export default Loading;