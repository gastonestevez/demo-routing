import React, { Component } from "react"
import { Link } from "react-router-dom"
import './Navbar.css'
import { logoutUser } from "../../redux/reducers/userReducer"
import { connect } from "react-redux"

class Navbar extends Component {

    constructor(props){
        super(props)
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout(){
        this.props.logout()
    }

    render() {
        return (
            <>
                <div className="navbar-container">
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="navbar-item">
                            {
                                this.props.userReducer.token ? (
                                    <>
                                        <p>Bienvenid@ {this.props.userReducer.firstName}</p>
                                        <button onClick={this.handleLogout}>Logout</button>
                                    </>
                                ) : (
                                    <Link to="/login">Login</Link>
                                )
                            }
                        </li>
                    </ul>
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
        logout: () => dispatch(logoutUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)