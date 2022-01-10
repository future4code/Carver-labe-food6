import React from "react";
import { useHistory } from "react-router-dom";
import logo2x from "../../assets/logo2x.png";
import { goToSignUp } from "../../routes/coordinator";
import LoginForm from "./LoginForm";


const LoginPage = () => {
  const history = useHistory();
  return (
    <div>
      <img src={logo2x} alt="Logo FourFood" />
      <LoginForm />
      <button
        onClick={() => goToSignUp(history)}
        type={"submit"}
        fullWidth
        variant={"text"}
        color={"primary"}
      >
        Não possui conta? Cadastre-se
      </button>
    </div>
  );
};

export default LoginPage;
