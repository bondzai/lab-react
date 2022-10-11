import CartItem from "./CartItem";
import { MyCartContext } from "../management/context";
//import {useState} from 'react'

const Cart = () => {
    const {cart, total, formatNumber} = MyCartContext()
    if (cart.length === 0) {
        return (
            <div className = "shopping-cart">
                <div className = "empty"> No item in cart </div>
            </div>
        )
    } else {
        return (
            <div className = "shopping-cart">
                <div className = "title"> items in cart </div>
                {cart.map((data) => {
                    return <CartItem key = {data.id} {...data}/>
                })}
                <div className = "footer"> total price = {formatNumber(total)} </div>
            </div>
        )
    }
}

export default Cart;