import React from 'react';
import logo from './logo.svg';
import './App.css';
import TiraPeliculas from "./components/TiraPeliculas"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <TiraPeliculas />
          <TiraPeliculas />
          <TiraPeliculas />
        </main>
      </header>
    </div >
  );
}

export default App;
