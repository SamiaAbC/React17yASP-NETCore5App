import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const imagenURL =
  "https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg";
  let texto = "";


  const handleClick = () => console.log('click');
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    texto = e.currentTarget.value;
  };


  return (
    <>
      <h1 className="rojo">¡Hola Mundo desde App.tsx!</h1>   

      <button 
      onMouseEnter={() => console.log('Entrando')}
      onClick={() => console.log('click desde el botón')}>¡Clickame!</button>
      <br />
      <input type="text" 
      onKeyUp={(e) => handleKeyUp(e)}/>

      <div>Aquí el contenido: {texto}</div>

      <br />
      <img alt="logo react" src={imagenURL} />
      <div>
        <input type="checkbox" checked={false} /> Este es un checkbox
      </div>   
    </>
  );
}

export default App;
