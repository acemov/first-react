import React, { Component } from 'react';
import Pelicula from './Pelicula';

class TiraPeliculas extends Component {
    constructor(props) {
        super(props);
        this.lanzarAlerta = this.lanzarAlerta.bind(this);
        this.cambiarNegro = this.cambiarNegro.bind(this);
        this.cambiarBlanco = this.cambiarBlanco.bind(this);
    }

    lanzarAlerta() {
        alert("Hola, soy una alerta");
    }

    cambiarNegro() {
        document.querySelector("body").style.backgroundColor = "black";
    }

    cambiarBlanco() {
        document.querySelector("body").style.backgroundColor = "white";
    }

    render() {
        return (
            <div className="App">
                <h1 onClick={this.lanzarAlerta}>Que ondaaaaaa 😎</h1>
                <p>-----------------</p>
                <Pelicula genero={["acción", "acentura"]} nombres="Logan" descripcion="muy buena :)">
                    <p>- hacemos uso de children😎</p>
                </Pelicula>
                <Pelicula genero={["tegnologia", "errores", "ia"]} nombres="ERROR" descripcion="muy mala :(">
                    <p>- childreeeen🤣</p>
                </Pelicula>
            </div>
        );
    }
}

export default TiraPeliculas;