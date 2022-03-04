import React, { useState } from "react"
import "./Register.css"

const Register = () => {
    const [toggle, setToggle] = useState(false)
    const [person, setPerson] = useState({
        username: "",
        age: "",
        country: "",
        terms: true,
    })

    const handleButtonClick = () => {
        setToggle(!toggle)
    }

    const handleChange = (event) => {
        setPerson({
            ...person,
            [event.target.name]:
                event.target.type === "checkbox"
                    ? event.target.checked
                    : event.target.value,
        })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        if (!person.username) {
            alert("el campo de usuario esta vacio...")
        }
        //si todas las validaciones dan ok ...
        console.log(person)
    }

    return (
        <>
            <div>
                <form
                    onSubmit={(e) => handleOnSubmit(e)}
                    action="/"
                    method="post"
                    className="form-register"
                >
                    <label htmlFor="username">Usuario</label>
                    <input
                        type="text"
                        placeholder="Ingrese nombre de usuario"
                        name="username"
                        onChange={(e) => handleChange(e)}
                        value={person.username}
                    />
                    <label htmlFor="age">Edad</label>
                    <input
                        type="number"
                        placeholder="Ingrese su edad"
                        name="age"
                        onChange={(e) => handleChange(e)}
                        value={person.age}
                    />
                    <label htmlFor="terms">Términos y condiciones</label>
                    <label htmlFor="terms">
                        <input
                            type="checkbox"
                            name="terms"
                            checked={person.terms}
                            onChange={(e) => handleChange(e)}
                        />
                        Terms and conditions
                    </label>
                    <label htmlFor="country">País</label>
                    <select
                        name="country"
                        value={person.country}
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="Argentina">Argentina</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Peru">Peru</option>
                    </select>
                    <button type="submit" onClick={(e) => handleButtonClick(e)}>
                        Registrarse
                    </button>
                </form>
            </div>
        </>
    )
}

export default Register
