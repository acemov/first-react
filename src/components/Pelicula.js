import React from 'react';

function Pelicula(props) {
    return (
        <div className="App">
            <h1>Nombre de la pelicula: {props.nombres}</h1>
            <p>Descripcion: {props.descripcion} </p>
            <ul>
                {props.genero.map((genero, i) => <li key={i + genero}>{genero}</li>)}
            </ul>
            {props.children}
        </div >
    );
}

export default Pelicula;