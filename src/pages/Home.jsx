import React from "react"
import { Link } from "react-router-dom"
import { useProduct } from "../hooks/useProduct"

const Home = () => {
    const [products] = useProduct()

    return (
        <>
            <h1>Home</h1>
            <div>
                {products.all.length ? (
                    <ul>
                        {products.all.map((product) => {
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

export default Home
