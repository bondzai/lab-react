//action management
const reducer = (state, action) => {
    if (action.type === "REMOVE_ITEM") {
        return {
            ...state,
            cart : state.cart.filter((item) => item.id !== action.payload)
        }
    }
    if (action.direction === "TOGGLE_QUANTITY") {
        let newCart = state.cart.map((item) => {
            if (item.id === action.payload.id) {
                if (action.payload.direction === "increment") {
                    console.log("increase" + action.payload.id)
                    return {
                        ...item,
                        quantity:item.quantity<5 ? item.quantity + 1 : item.quantity
                    }
                } else {
                    console.log("decrease" + action.payload.id)
                    return {
                        ...item,
                        quantity:item.quantity - 1
                    }
                }
            }
        })
        console.log(newCart)
        return {
            ...state
        }
    }
}

export default reducer;