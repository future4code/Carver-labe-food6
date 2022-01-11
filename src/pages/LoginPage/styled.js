import react from 'react'
import styled from 'styled-components'
import { primaryColor, secondaryColor, neutralColor } from '../../constants/colors'

export const ScreenContainer = styled.div`
display: flex;
flex-direction: column;
width: 360px;
height: 100vh;
align-items: center;
/* justify-content: center; */
justify-content: space-evenly;
`
export const InputContainer = styled.div`
    width: 360px;
    height: 150px;
`

export const InputEmail = styled.input`
    width: 328px;
    height: 56px;
    // border-radius: 2px;
    /* border: solid 1px ${secondaryColor}; */
    
`
export const InputPassword = styled.input`
    width: 328px;
    height: 56px;
    // border-radius: 2px;
    /* border: solid 1px ${secondaryColor}; */
`

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`

export const SignUpContainer = styled.div`
width: 360px;
height: 42px;
`
export const ClickToSignUp = styled.div`
width: 360px;
height: 42px;
`
export const SendButtonContainer = styled.div`
width: 360px;
height: 42px;
`
export const SendButton = styled.button`
width: 328px;
height: 42px;
border-radius: 2px;
background-color: ${primaryColor};
`

export const LogoImage = styled.img`
width: 6.5rem;
height: 3.625rem;
margin: 4.25rem 8rem 1rem;
object-fit: contain;
`

export const Form = styled.form`
height: 100%;
`
