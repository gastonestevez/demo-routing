import React, { Component } from "react"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"
import ProductCard from "../components/ProductCard/ProductCard"

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: undefined,
        }
    }

    handleOnClickContact() {
        this.props.history.push("/contact")
    }

    handleGoBack() {
        this.props.history.goBack()
    }

    /*
        Estrategias:
            - Fetch a un producto en especifico /products/50 
            - Pasar por props a el componente de Product el objeto entero
            - Pasar el array entero a Redux y en este componente leer el estado.
    */

    componentDidMount() {
        if (this.props.match.params.id) {
            fetch(
                `https://fakestoreapi.com/products/${this.props.match.params.id}`
            )
                .then((res) => res.json())
                .then((data) => {
                    this.setState({
                        product: data,
                    })
                })
        }
    }

    render() {
        const { product } = this.state
        return (
            <>
                <div>
                    <button onClick={() => this.handleGoBack()}>
                        {" "}
                        <strong>{"< "} Back</strong>
                    </button>
                    {product ? (
                        <ProductCard product={product} />
                    ) : (
                        <p>Cargando...</p>
                    )}

                    <button onClick={() => this.handleOnClickContact()}>
                        Go to Contact!
                    </button>
                </div>
            </>
        )
    }
}

export default withRouter(Product)
