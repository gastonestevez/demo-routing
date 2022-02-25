import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { setLoggedUser } from "../redux/reducers/userReducer"

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            errorMessage: false,
        }
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnSubmit(event) {
        event.preventDefault()
        // fetch("https://fakestoreapi.com/auth/login", {
        //     method: "POST",
        //     body: JSON.stringify({
        //         username: this.state.username,
        //         password: this.state.password,
        //     }),
        // })
        //     .then((res) => res.json())
        //     .then((json) => {
        //         console.log('hola')
        //         console.log(json)
        //     })
        //     .catch((e) => console.log(e))

        //todo lo que sea fake, hagamos de cuenta que lo devuelve el backend
        const fakeUsername = "gaston7"
        const fakePassword = "1234"
        const fakeToken = "TRX-TOKEN-1234"
        const fakeFirstName = "Gastón"

        if (
            fakePassword === this.state.password &&
            fakeUsername === this.state.username
        ) {
            this.setState({
                errorMessage: false,
            })

            this.props.login({
                username: fakeUsername,
                token: fakeToken,
                firstName: fakeFirstName,
            })
            this.props.history.push("/")
        } else {
            this.setState({
                errorMessage: true,
            })
        }
    }

    handleOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    componentDidMount(){
        if(this.props.userReducer.token){
            this.props.history.goBack()
        }
    }

    render() {
        return (
            <>
                <div>
                    <form
                        onSubmit={this.handleOnSubmit}
                        action="/"
                        method="post"
                        className="form-register"
                    >
                        <label htmlFor="username">Nombre de usuario</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Ingrese su nombre de usuario"
                            onChange={this.handleOnChange}
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Ingrese su password"
                            onChange={this.handleOnChange}
                        />
                        <button type="submit">Submit</button>
                    </form>
                    {this.state.errorMessage && (
                        <small>Credenciales inválidas...</small>
                    )}
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userReducer: state.userReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(setLoggedUser(user)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
