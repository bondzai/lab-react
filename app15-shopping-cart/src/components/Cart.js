import CartItem from "./CartItem";
import { MyCartContext } from "../management/context";
//import {useState} from 'react'

const Cart = () => {
    const {cart} = MyCartContext()
    return (
        <div className = "shopping-cart">
            <div className = "title"> items in cart </div>
            {cart.map((data) => {
                return <CartItem key = {data.id} {...data}/>
            })}
            <div className = "footer"> total price </div>
        </div>
    )
}

export default Cart;