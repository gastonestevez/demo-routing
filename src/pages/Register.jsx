import React, { Component } from "react"
import './Register.css'

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: false,
            username: "",
            age: "",
            country: "",
            terms: true,
        }
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)

    }

    handleButtonClick() {
        this.setState({
            toggle: !this.state.toggle,
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]:
                event.target.type === "checkbox"
                    ? event.target.checked
                    : event.target.value,
        })
    }

    handleOnSubmit(event) {
        event.preventDefault()
        if(!this.state.username) {
            alert('el campo de usuario esta vacio...')
        }
        //si todas las validaciones dan ok ...
        const { username, age, terms, country } = this.state
        console.log({
            username, age , terms, country
        })
    }

    render() {
        return (
            <>
                <div >
                    <form onSubmit={this.handleOnSubmit} action="/" method="post" className="form-register">
                        <label htmlFor="username">Usuario</label>
                        <input
                            type="text"
                            placeholder="Ingrese nombre de usuario"
                            name="username"
                            onChange={this.handleChange}
                            value={this.state.username}
                        />
                        <label htmlFor="age">Edad</label>
                        <input
                            type="number"
                            placeholder="Ingrese su edad"
                            name="age"
                            onChange={this.handleChange}
                            value={this.state.age}
                        />
                        <label htmlFor="terms">Términos y condiciones</label>
                        <label htmlFor="terms">
                            <input
                                type="checkbox"
                                name="terms"
                                checked={this.state.terms}
                                onChange={this.handleChange}
                            />
                            Terms and conditions
                        </label>
                        <label htmlFor="country">País</label>
                        <select
                            name="country"
                            value={this.state.country}
                            onChange={this.handleChange}
                        >
                            <option value="Argentina">Argentina</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Peru">Peru</option>
                        </select>
                        <button type="submit" onClick={this.handleButtonClick}>
                            Registrarse
                        </button>
                    </form>
                </div>
            </>
        )
    }
}
