import styled from "styled-components";

export const Head = styled.div`
  min-width: 360px;
  width: 100%;
  height: 2.75rem;
  margin-bottom: 1.5rem;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: none;
    background-color: white;
  }

  img{
    width: 23px;
  height: 24px;
  object-fit: contain;
  }
  .space{
    width: 23px;
  height: 24px;
  object-fit: contain;
  }
`