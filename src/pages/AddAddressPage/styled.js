import react from 'react'
import styled from 'styled-components'

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 360px;
  min-height: 640px;

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

div{
  min-width: 360px;
  min-height: 72px;
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
  min-width: 328px;
  min-height: 42px;
  border-radius: 2px;
  background-color: #e8222e;
  button{
  min-width: 296px;
  min-height: 18px;
  text-align: center;
  }
`