import React, { Component } from "react"

export default class ProductCard extends Component {
    render() {
        const { product } = this.props
        const { image, title, category, description, price } = product
        return (
            <>
                <div>
                    <img src={image} alt="productPic" />
                    <h4>{title}</h4>
                    <h5>{category}</h5>
                    <p>{description}</p>
                    <p>$ {price}</p>
                </div>
            </>
        )
    }
}
