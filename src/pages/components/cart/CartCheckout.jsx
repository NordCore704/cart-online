import React, { useEffect, useState } from "react";
import { CartState } from "@/helpers/CartContext";
import Link from "next/link";
import { Inter, Poppins } from 'next/font/google'


const inter = Inter({
  subsets: ['latin'],
  weight: '400',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500',
})


const CartCheckout = () => {
  const [total, setTotal] = useState();

  const {
    dispatch,
    state: { cart },
  } = CartState();

  useEffect(() => {
    setTotal(cart.reduce((acc, current) => acc + Number(current.price) * current.qty, 0));
  }, [cart]);
  return (
    <div className={`${poppins.className} cart--checkout cartoon flex flex-col  bg-periwinkle w-[40%] p-3 gap-4`}>
      <p className="font-bold capitalize text-3xl text-center">
        Subtotal ({cart.length}) items
      </p>
      <p className={`font-semibold lg:self-center ${inter.className}`}>Total: ${total}</p>
      <button
        disabled={cart.length === 0}
        className="bg-schemeRed lg:self-center lg:w-[70%] p-1 rounded-md text-black border-black border hover:bg-[#5dbb] transition-colors duration-300 hover:text-white disabled:bg-[#ff0033a2] disabled:text-white"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default CartCheckout;
