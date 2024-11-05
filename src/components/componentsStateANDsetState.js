import React, { Component } from "react"

class Contador extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numero: props.inicial
        }
    }
    incrementer() {
        this.setState({ numero: this.state.numero + 1 })
    }
    decrementar() {
        this.setState({ numero: this.state.numero - 1 })
    }
    render() {
        return (
            <div>
                <p>Soy el numeros: { this.state.numero }</p>
                <button onClick={() => this.incrementer()}> incrementer</button>
                <button onClick={() => this.decrementar()}> decrementar</button>
            </div>
        )
    }
}
export default Contador;