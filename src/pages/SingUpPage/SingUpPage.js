import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { signUp } from "../../hooks/useRequest";

const SingUpPage = () => {
  const [form, handleInputChange] = useForm({
    email: "",
    password: "",
    name: "",
    cpf: "",
  });
  // const [form2, setForm2] = useState({ password1: "", password2: "" });
  // const [form3, setForm3] = useState({})
  const history = useHistory();
  const sendForm = (event) => {
    event.preventDefault();
    let s1 = document.getElementById("s1")
    let s2 = document.getElementById("s2")
    // signUp(form, history);
   
   
   
    if(s1 === s2){
    signUp(form, history)
    }else if(form.password1 !== form.password2){
        alert("Senhas não são iguais")
    }
 
};

console.log(document.getElementById("s1"))
//   const validation = (e) => {
//     const { value, name } = e.target;
//     setForm2({ ...form, [name]: value });
//     if(form2.password1 === form2.password2){
//         return form2.password2
//     }else {
        
//         return alert("senhas sao diferentes")
//     }
//   };

  return (
    <div>
      <form onSubmit={sendForm}>
        <input
          placeholder={"Nome e Sobrenome"}
          type={"text"}
          name={"name"}
          value={form.name}
          onChange={handleInputChange}
          required
        />

        <input
          placeholder={"email@email.com"}
          type={"email"}
          name={"email"}
          value={form.email}
          onChange={handleInputChange}
          required
        />

        <input
          placeholder={"000.000.000-00"}
          type={"text"}
          name={"cpf"}
          value={form.cpf}
          onChange={handleInputChange}
          required
        />

        <input
          placeholder={"Minimo 6 caracteres"}
          type={"password"}
          name={"password"}
          value={form.password}
          onChange={handleInputChange}
          id={"s1"}
          required
        />

        <input 
                placeholder={"confirme a senha anterior"}
                type={"password"}
                name={"password2"}
                
                onChange={handleInputChange}
                id={"s2"}
                required
                />

        <button type={"submit"}>Criar</button>
      </form>
    </div>
  );
};

export default SingUpPage;
