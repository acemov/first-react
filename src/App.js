import React from 'react';
import logo from './logo.svg';
import './App.css';
import TiraPeliculas from "./components/TiraPeliculas"

function App() {
  let nombre = "Franco"
  let listaDeNumeros = [1,2,3,23,2,32,3]
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <h1>Mi nombre es: {nombre}</h1>
          <ul>
            {listaDeNumeros.map((numeros,i) => <li key={i+numeros}> {numeros} </li>)}
          </ul>
          <TiraPeliculas />
          
          {/* <TiraPeliculas /> */}
        </main>
      </header>
    </div >
  );
}

export default App;
