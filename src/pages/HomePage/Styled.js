import React from "react";
import styled from "styled-components";

export const ContainerPrincipal = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
align-items: center;
justify-content: center;

input{
  width: 328px;
  height: 56px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
}

`

export const FooterSpace = styled.div`
  min-width: 360px;
  width: 100%;
  height: 49px;
`

export const NavScroll = styled.div`
    background-color: white;
    overflow: auto;
    white-space: nowrap;
    width: 360px;
    height: 42px;
  
  button {
    display: inline-block;
    width: 87px;
    height: 18px;
    text-align: center;
    border: none;
    background-color: white;
  } 

  button:active{
      color: #e8222e;
  }

  `