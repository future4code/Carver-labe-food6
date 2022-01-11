import React from "react";
import {ScreenContainer, ButtonForm} from "./styled"
import useForm from "../../hooks/useForm";
import { AddAddress } from "../../hooks/useRequest";
import { useHistory } from "react-router-dom";
// import {ScreenContainer, ButtonForm} from "./Styled"


const AddAddressPage = () => {
        const history = useHistory()
  
       
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
            AddAddress(form, history)     
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
                name={"city"}
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
                name={"state"}
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