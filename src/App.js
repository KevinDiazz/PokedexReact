import { useEffect, useState } from "react";
import SelectPokemon from "./Components/LabelPokemon";
import './App.css' 
import imagenLogo from './img/4-Pokemon-logo-SVG-betterstudio.com_.svg'
/*Componente App,hace una llamada a la Api, usando useEffect , retorna un div cuando el state contiende info*/ 
function App() {
  const [state, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=70&limit=150")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="container-principal">
      {state ?<>
      <img className="logoPoke" src={imagenLogo} />
      <SelectPokemon list={state.results}   />
  </> 
        :
       <p>Loading data...</p>}
       {console.log(state)}
    </div>
  );
}
export default App;
