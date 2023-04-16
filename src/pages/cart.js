import React from 'react'
import { Cart, CartCheckout } from './components'

const cart = () => {
  return (
    <section className='cart--main flex w-full p-2 min-h-screen justify-between'>
        <Cart />
        <CartCheckout />
    </section>

  )
}

export default cart