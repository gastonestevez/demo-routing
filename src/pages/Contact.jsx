import React from "react"
import { useHistory } from "react-router-dom"

const Contact = () => {
    const history = useHistory()

    return (
        <>
            <h1>Contact</h1>
            <button onClick={() => history.goBack()}>
                {" "}
                <strong>{"< "} Back</strong>
            </button>
        </>
    )
}

export default Contact
