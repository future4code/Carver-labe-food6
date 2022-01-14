import styled from 'styled-components'

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 360px;
  min-height: 640px;
  /* padding-top: 1.5rem; */

  img{
  width: 104px;
  height: 58px;
  object-fit: contain;

  }

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
}

p{
  width: 296px;
  height: 18px;
  text-align: center;
}

div{
  min-width: 360px;
  min-height: 56px;
}

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

input{
  border: transparent;
  min-width: 264px;
  min-height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.4px;
  color: #d0d0d0;
}
`


export const ButtonForm = styled.div`
  width: 360px;
  height: 42px;
  display: flex;
  justify-content: center;
  
  button{
  width: 360px;
  height: 42px;
  text-align: center;
  border-radius: 2px;
  background-color: #e8222e;
  
  }
`