import { useState } from "react";
import Name from "./Nombre";
import '../css/Label.css'

/*Componente formado por un formulario , con un elemento select donde su opciones son mapeadas y sacadas de la Api.
 -incluye dos funciones handle la cual se encargan de actualizar el estado,que esta definido por la elecion del select 
 -anida otro componente(Name)*/
function SelectPokemon(props) {
  const [valor, setValor] = useState("pikachu");

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(valor);
  };

  const handleSelectChange = (event) => {
    if(event.target.value!==valor){
    setValor(event.target.value);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokemon" id="formulario"></label>
        <select
          onChange={handleSelectChange}
          name="select"
          size="1"
        >
            <option key="vacio" value="vacio"></option>
          {props.list.map((value) => (
            <option key={value.url} value={value.name}>
              {value.name}
            </option>
          ))}
        </select>
      </form>
      <Name nombrePoke={valor} />
    </>
  );
}

export default SelectPokemon;
