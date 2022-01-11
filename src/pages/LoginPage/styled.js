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
`

export const SendButton = styled.button`
width: 328px;
height: 42px;
border-radius: 2px;
background-color: ${primaryColor};
`

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center
height: 100%;
gap: 10px;
`
