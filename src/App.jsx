import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./components/NotFound/NotFound"
import Navbar from "./components/Navbar/Navbar"
import Product from "./pages/Product"
import Register from "./pages/Register"
import Login from "./pages/Login"

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/product/:id">
                        <Product />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    
                    <Route path="*">
                        <NotFound />
                    </Route>
                    
                </Switch>
            </Router>
        </>
    )
}

export default App
