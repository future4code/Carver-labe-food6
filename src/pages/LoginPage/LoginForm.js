import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { Login } from "../../hooks/useRequest";
import { InputContainer, InputEmail, InputPassword,  SendButtonContainer, Form, SendButton} from "./styled.js"

const LoginForm = () => {
  const [form, handleInputChange] = useForm({ email: "", password: "" });
  const history = useHistory();
  
  const sendForm = (event) => {
    event.preventDefault();
    Login(form, history);
  };

  return (
  
      <Form onSubmit={sendForm}>
    
        {/* <InputContainer> */}
        <fieldset><legend>E-mail*</legend>
          <InputEmail
            placeholder={"email@email.com"}
            type={"email"}
            name={"email"}
            value={form.email}
            onChange={handleInputChange}
            required
          />
        </fieldset>
      

        <fieldset><legend>Senha*</legend>
          <InputPassword
            placeholder={"Minimo 6 caracteres"}
            type={"password"}
            name={"password"}
            value={form.password}
            onChange={handleInputChange}
            required
          />
        </fieldset>
        {/* </InputContainer> */}

        <SendButtonContainer>
          <SendButton type={"submit"}>Entrar</SendButton>
        </SendButtonContainer>

      </Form>

      
  
  );
};

export default LoginForm;

