import CartItem from "./CartItem";
import CartData from '../data/CartData'
//import {useState} from 'react'

const Cart = () => {
    return (
        <div className = "shopping-cart">
            <div className = "title"> items in cart </div>
            {CartData.map((data) => {
                return <CartItem key = {data.id} {...data}/>
            })}
            <div className = "footer"> items in cart </div>
        </div>
    )
}

export default Cart;