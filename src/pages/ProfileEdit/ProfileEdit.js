import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { signUp } from "../../hooks/useRequest";
import { useState } from "react";
import { ScreenContainer, ButtonForm } from "./styled"
import Logo from '../../assets/img/logo-4Future.png';
import Header from "../../components/Header/Header"
import { goToProfile } from "../../routes/coordinator";
import useProtectedPage from "../../hooks/useProtected";

const ProfileEdit = () => {
  useProtectedPage()
  const [form, handleInputChange] = useForm({
    name: "",
    email: "",
    cpf: "",
  });

  const [form3, handleInputChange2] = useForm({ password2: "" })
  const history = useHistory();

  const sendForm = (event) => {

      event.preventDefault();
    //   signUp(form, history)
  };


  return (
    <ScreenContainer>
      <Header
      state={5}
      back={goToProfile}
      />
      

      
      <p> Editar </p>
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

                

        <ButtonForm >
          <button type={"submit"}>Criar</button>
        </ButtonForm >

      </form>
    </ScreenContainer>
  );
};

export default ProfileEdit;