import styled from "styled-components";
import { secondaryColor } from "../../constants/colors";

export const ContainerPrincipal = styled.div`
display: flex;
flex-direction: column;

 .dados-basicos{
     display: grid;
     grid-template-columns: 1fr 1fr;
     margin-top: 0.5rem;
     padding:0;
 }

 .dados2{
     display: flex;
     flex-direction: column;
 }

 .div-logo{
     display: flex;
     flex-direction: row;
     justify-content: flex-end
 }

 #logo{
     width: 24px;
     height: 24px;
 }

 .endereco-cadastrado{
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #eeeeee;

 }

 #titulo-endereco{
     color: ${secondaryColor};
 }
`
