import React from "react";
import { useHistory } from "react-router-dom";
import Logo from '../../assets/img/logo-4Future.png';
import { goToSignUp } from "../../routes/coordinator";
import LoginForm from "./LoginForm";
import { ScreenContainer, LogoImage, SignUpContainer, ClickToSignUp } from "./styled";

const LoginPage = () => {
  const history = useHistory();
  return (
    <ScreenContainer>
      <LogoImage src={Logo} alt="Logo FourFood" />
      <p>Entrar</p>

      <LoginForm />

      <SignUpContainer>
        <ClickToSignUp>
          <span>Não possui conta? </span><span onClick={() => goToSignUp(history)}>Clique aqui.</span>
        </ClickToSignUp>
      </SignUpContainer>   

    </ScreenContainer>
  );
};

export default LoginPage;

