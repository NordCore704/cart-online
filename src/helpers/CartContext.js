import React, { createContext, useContext, useReducer, useState } from "react";
import { cartReducer } from "./Reducer";
import '../constants/store.json'

const Cart = createContext()



const CartContext = ({ children }) => {
  const [items, setItems] = useState([])
    const [state, dispatch] = useReducer(cartReducer, {
        cart: [],
    })
  return (
    <Cart.Provider value={{state, dispatch, items, setItems}}>
        {children}
    </Cart.Provider>
  )
}

export default CartContext

export const CartState = () => {
  return useContext(Cart)
}
