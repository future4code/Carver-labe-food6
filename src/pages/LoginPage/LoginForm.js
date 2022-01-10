import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { Login } from "../../hooks/useRequest";

const LoginForm = () => {
  const [form, handleInputChange] = useForm({ email: "", password: "" });
  const history = useHistory();
  const sendForm = (event) => {
    event.preventDefault();
    Login(form, history);
  };

  return (
    <div>
      <form onSubmit={sendForm}>
        <input
          placeholder={"email@email.com"}
          type={"email"}
          name={"email"}
          value={form.email}
          onChange={handleInputChange}
          required
        />

        <input
          placeholder={"Minimo 6 caracteres"}
          type={"password"}
          name={"password"}
          value={form.password}
          onChange={handleInputChange}
          required
        />

        <button type={"submit"}>Entrar</button>
      </form>
    </div>
  );
};

export default LoginForm;
