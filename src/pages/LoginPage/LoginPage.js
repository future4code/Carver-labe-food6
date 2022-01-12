import React from "react";
import { useHistory } from "react-router-dom";
import Logo from '../../assets/img/logo-4Future.png';
import { goToSignUp } from "../../routes/coordinator";
import LoginForm from "./LoginForm";
import { ScreenContainer, LogoImage, SignUpContainer, ClickToSignUp, P } from "./styled";

const LoginPage = () => {
  const history = useHistory();
  return (
    <ScreenContainer>
      <LogoImage src={Logo} alt="Logo FourFood" />
      <P>
        <p>Entrar</p>
      </P>

      <LoginForm />

      <SignUpContainer>
        <ClickToSignUp>
          <span onClick={() => goToSignUp(history)}>Não possui conta? Clique aqui.</span>
        </ClickToSignUp>
      </SignUpContainer>

    </ScreenContainer>
  );
};

export default LoginPage;

