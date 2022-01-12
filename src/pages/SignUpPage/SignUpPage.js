import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { signUp } from "../../hooks/useRequest";
import { useState } from "react";
import { ScreenContainer, ButtonForm } from "./Styled"
import Logo from '../../assets/img/logo-4Future.png';
import Header from "../../components/Header/Header"

const SingUpPage = () => {
  const [form, handleInputChange] = useForm({
    email: "",
    password: "",
    name: "",
    cpf: "",
  });

  const [form3, handleInputChange2] = useForm({ password2: "" })
  const history = useHistory();

  const sendForm = (event) => {

    
    if (form.password === form3.password2) {
      event.preventDefault();
      signUp(form, history)
    } else  {
      alert("Senhas não são iguais")
    }

  };


  return (
    <ScreenContainer>
      <Header/>
      {/* <div class="bar"></div> */}

      <img src={Logo} alt="Logo FourFood" />
      <p> Cadastrar </p>
      <form onSubmit={sendForm}>

        <div>
          <fieldset><legend>Nome*</legend>
            <input
              placeholder={"Nome e Sobrenome"}
              type={"text"}
              name={"name"}
              value={form.name}
              onChange={handleInputChange}
              required
            />
          </fieldset>
        </div>

        <div>
          <fieldset><legend>E-mail*</legend>
            <input
              placeholder={"email@email.com"}
              type={"email"}
              name={"email"}
              value={form.email}
              onChange={handleInputChange}
              required
            />
          </fieldset>
        </div>

        <div>
          <fieldset><legend>CPF*</legend>
            <input
              placeholder={"000.000.000-00"}
              type={"text"}
              name={"cpf"}
              value={form.cpf}
              onChange={handleInputChange}
              required
            />
          </fieldset>
        </div>

        <div>
          <fieldset><legend>Senha*</legend>
            <input
              placeholder={"Minimo 6 caracteres"}
              type={"password"}
              name={"password"}
              value={form.password}
              onChange={handleInputChange}
              id={"s1"}
              required
            />
          </fieldset>
        </div>

        <div>
          <fieldset><legend>Confirmar*</legend>
            <input
              placeholder={"confirme a senha anterior"}
              type={"password"}
              name={"password2"}
              value={form3.password2}
              onChange={handleInputChange2}
              id={"s2"}
              required
            />
          </fieldset>
        </div>

        <ButtonForm >
          <button type={"submit"}>Criar</button>
        </ButtonForm >

      </form>
    </ScreenContainer>
  );
};

export default SingUpPage;
