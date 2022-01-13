import styled from 'styled-components'

export const PopUpContainer = styled.div`
  width: 328px;
  height: 216px;
  background-color: #ffffff; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.75rem;
  padding: 1rem 0 ;

  select{
  width: 296px;
  height: 56px;
  border-radius: 4px;
  border: solid 1px #b8b8b8;
  }

  option{
  width: 24px;
  height: 24px;
  object-fit: contain;
  align-items: center;
  }

  button{
  min-width: 183px;
  width: 100%;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.4px;
  text-align: right;
  color: #4f81a8;
  border: none;
  background-color: white;
  }
  
`
export const BackPopUp = styled.div`
  min-width: 360px;
  width: 100%;
  min-height: 640px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5) ;
  overflow: hidden;
`