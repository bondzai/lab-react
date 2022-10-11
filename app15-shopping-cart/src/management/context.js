//create contect API (global variable)
import {createContext, useContext, useReducer} from "react"
import CartData from "../data/CartData"
import reducer from "./reducer"

const initialState = {
    cart : CartData,
    total : 110,
    amount : 10
}
const CartContext = createContext()

export const MyCartContext = () => {
    return useContext(CartContext)
}

const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const removeItem = (id) => {
        dispatch({type:"REMOVE_ITEM", payload : id})
    }

    return (
        <CartContext.Provider value = {{...state, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}