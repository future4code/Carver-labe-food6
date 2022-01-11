import React from "react";
import {ScreenContainer, ButtonForm} from "./styled"
import useForm from "../../hooks/useForm";
// import {ScreenContainer, ButtonForm} from "./Styled"


const AddAddressPage = () => {
  
       
        const [form, handleInputChange] = useForm({
          street: "",
          number: "",
          neighbourhood: "",
          city: "",
          state: "",
          complement: ""
        });      
      
        const sendForm = (event) => {     
            event.preventDefault();
        //     signUp(form, history)     
        };
      
      return(
          <ScreenContainer>
            {/* <img src={Logo} alt="Logo FourFood"/> */}
            <p> Meu endereço </p>
            <form onSubmit={sendForm}>
              
              <div>
              <fieldset><legend>Logradouro*</legend>
              <input
                placeholder={"Rua / Av."}
                type={"text"}
                name={"street"}
                value={form.street}
                onChange={handleInputChange}
                required
              />
              </fieldset>
              </div>
      
              <div>
              <fieldset><legend>Número*</legend>
              <input
                placeholder={"Número"}
                type={"number"}
                name={"number"}
                value={form.number}
                onChange={handleInputChange}
                required
              />
              </fieldset>
              </div>
      
              <div>
              <fieldset><legend>Complemento*</legend>
              <input
                placeholder={"Apto. / Bloco"}
                type={"text"}
                name={"complement"}
                value={form.complement}
                onChange={handleInputChange}
                required
              />
              </fieldset>
              </div>
      
              <div>
              <fieldset><legend>Bairro*</legend>
              <input
                placeholder={"Bairro"}
                type={"text"}
                name={"neighbourhood"}
                value={form.neighbourhood}
                onChange={handleInputChange}
                required
              />
              </fieldset>
              </div>
      
              <div>
              <fieldset><legend>Cidade*</legend>
              <input
                placeholder={"Cidade"}
                type={"text"}
                name={"Cidade"}
                value={form.city}
                onChange={handleInputChange}
                required
              />
              </fieldset>
              </div>

              <div>
              <fieldset><legend>Estado*</legend>
              <input
                placeholder={"Estado"}
                type={"text"}
                name={"Estado"}
                value={form.state}
                onChange={handleInputChange}
                required
              />
              </fieldset>
              </div>
      
              <button type={"submit"}>Criar</button>
      
            </form>
          </ScreenContainer>
        );
        
      };

export default AddAddressPage;