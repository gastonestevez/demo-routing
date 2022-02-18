import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    products: data,
                })
            })
    }

    render() {
        return (
            <>
                <h1>Home</h1>
                <div>
                    {this.state.products.length ? (
                        <ul>
                            {this.state.products.map((product) => {
                                return (
                                    <li key={`${product.id}-${product.category}`}>
                                        <Link to={`/product/${product.id}`}>
                                            {product.title}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    ) : (
                        <p>Cargando...</p>
                    )}
                </div>
            </>
        )
    }
}
