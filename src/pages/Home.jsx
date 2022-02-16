import React, { Component } from "react"

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
            .then(data => {
                this.setState({
                    products: data
                })
            })
    }

    render() {
        return (
            <>
                <h1>Home</h1>
                <div>
                    {
                        this.state.products.length ? (
                            <ul>
                                {
                                    this.state.products.map(product => {
                                        return <li>{product.title}</li>
                                    })
                                }
                            </ul>

                        ) : (
                            <p>Cargando...</p>
                        )
                    }
                </div>
            </>
        )
    }
}
