import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { setAllProducts } from "../redux/reducers/productReducer"

export const useProduct = () => {
    const productReducer = useSelector((state) => state.productReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!productReducer.all.length) {
            fetch("https://fakestoreapi.com/products")
                .then((res) => res.json())
                .then((data) => {
                    dispatch(setAllProducts(data))
                })
        }
    }, [productReducer.all.length, dispatch])

    return [productReducer]
}