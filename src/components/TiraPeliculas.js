import React from 'react';
import Pelicula from './Pelicula';

function TiraPeliculas() {
    return (
        <div className="App">
            <p>-----------------</p>
            <Pelicula genero={["acción", "acentura"]} nombres="Logan" descripcion="muy buena :)" >
                <p>- hacemos uso de children😎</p>
            </Pelicula>
            <Pelicula genero={["tegnologia", "errores", "ia"]} nombres="ERROR" descripcion="muy mala :(" >
                <p>- childreeeen🤣</p>
            </Pelicula>
        </div >
    );
}

export default TiraPeliculas;