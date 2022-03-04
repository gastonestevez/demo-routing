import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import { logoutUser } from "../../redux/reducers/userReducer"
import { useSelector, useDispatch } from "react-redux"

const Navbar = () => {
    const { token, firstName } = useSelector((state) => state.userReducer)
    const dispatch = useDispatch()

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
                        {token ? (
                            <>
                                <p>Bienvenid@ {firstName}</p>
                                <button onClick={() => dispatch(logoutUser())}>
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link to="/login">Login</Link>
                        )}
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
