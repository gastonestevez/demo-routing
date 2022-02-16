import React, { Component } from "react"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"

class Product extends Component {

    handleOnClickContact(){
        this.props.history.push('/contact')
    }
    
    handleGoBack(){
        this.props.history.goBack()
    }

    render() {
        return <>
            <div>
            <button onClick={() => this.handleGoBack()}> <strong>{'< '} Back</strong></button>

                <p>Usted esta visualizando el producto: {this.props.match.params.id}</p>
                <button onClick={() => this.handleOnClickContact()}>Go to Contact!</button>
            </div>
        </>
    }
}

export default withRouter(Product)