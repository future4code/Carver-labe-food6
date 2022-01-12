import styled from 'styled-components'
import { primaryColor } from '../../constants/colors'

export const ScreenContainer = styled.div`
display: flex;
gap: 10px;
flex-direction: column;
align-items: center;
min-width: 360px;
min-height: 640px;
justify-content: flex-start;
`
export const LogoImage = styled.img`
width: 104px;
height: 58px;
object-fit: contain;
margin-top: 5.5rem;
`

export const InputEmail = styled.input`
border: solid 1px white;
`
export const InputPassword = styled.input`
border: solid 1px white;
`

export const SignUpContainer = styled.div`
width: 360px;
height: 42px;
`
export const ClickToSignUp = styled.div`
display: flex;
justify-content: flex-end;
width: 296px;
height: 18px;
text-align: center;
margin-top: 15px;
`

export const SendButton = styled.button`
width: 360px;
height: 42px;
margin-top: 1rem;
border-radius: 2px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 1rem;
font-weight: normal;
color: black;
background-color: ${primaryColor};
`

export const Form = styled.form`
display: flex;
flex-direction: column;
/* align-items: center; */
height: 100%;
/* gap: 1rem; */

fieldset{
    min-width: 328px;
    min-height: 56px;
    border-radius: 2px;
    border: solid 1px #b8b8b8;
  }
  
  legend{
    min-width: 78px;
    min-height: 18px;
    font-family: Roboto;
    font-size: 12px;
    letter-spacing: -0.3px;
    color: #b8b8b8;
  }
`

export const P = styled.div`
/* margin-top: 1rem; */
/* height: 2.625rem; */
display: flex;
align-content: center;
`
