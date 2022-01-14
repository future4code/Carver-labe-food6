import styled from "styled-components";

export const ContainerPrincipal = styled.div`
/* display: flex;
flex-direction: column; */
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 328px;
  min-height: 188px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin: 0 1rem;

img{
  width: 328px;
  height: 120px;
  object-fit: contain;
}

.titulo{
    margin: 0;
    margin-top: 1rem;
  width: 296px;
  height: 18px;
  color: #e8222e;
}

.description{
    margin: 0;
    margin-bottom: 1rem;
  width: 148px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.4px;
  color: #b8b8b8;
}

.frete{
    margin: 0;
    margin-bottom: 1rem;
  width: 140px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.4px;
  text-align: right;
  color: #b8b8b8;
}

`

