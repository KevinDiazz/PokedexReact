import React, {useState } from "react";
import '../css/Nombre.css'
/* Componente Name , hace una llamada a la API, recibe el nombre del pokemon a traves de los props
-incluye una funcion que crea una ul con los movimientos del pokemon
*/
function Name(props){
    const url="https://pokeapi.co/api/v2/pokemon/" + `${props.nombrePoke}`
    const  [datos,setDatos] = useState("")
        if(props.nombrePoke!==datos.name){
    const fetchData = () => {
        fetch(url)
          .then((response) => response.json())
          .then((jsonData) => {
            setDatos(jsonData);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };
      fetchData()
      console.log(datos)
    }


const datosLista=()=>{
    return (
   <ul className="list-moves"> 
    {datos.moves.map((value)=> <li key={value.move.name}>{value.move.name}</li>)}
    </ul>
    )
  }
    return(
        <div className="containerPokemon">
         {datos ? <>  
        <h1>{datos.name}</h1>
        <img src={datos.sprites.other.dream_world.front_default}></img>
         <p><strong>Type:</strong>{datos.types[0].type.name}</p>
         <h2>Moves</h2>
        {datosLista()}
       
       </> : <p>"loading"</p>}
        </div>
    )
}
export default Name