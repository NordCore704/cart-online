import React, { useState } from "react";
import { FaShoppingCart, FaArrowDown } from "react-icons/fa";
import { BiDownArrow } from "react-icons/bi";
import { CartState } from "@/helpers/CartContext";
import { MiniCartDisplay } from "..";
import { Inter, Poppins } from 'next/font/google'


const inter = Inter({
  subsets: ['latin'],
  weight: '400',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500',
})

const CartHeader = ({ item }) => {
  const [showMiniCart, setShowMiniCart] = useState(false);
  const {
    state: { cart },
  } = CartState();

  const toggleDropDown = () => {
    setShowMiniCart((prev) => !prev);
  };
  return (
    <div
      className="p-1 h-10 lg:w-[5%] sm:w-[10%] w-[15%] bg-schemeDarkBlue right-5 flex rounded-md items-center justify-center cursor-pointer border-2 border-black hover:bg-[#11fc9a] transition-colors duration-300 z-10"
      onClick={toggleDropDown}
    >
      <button className="w-full h-full flex items-center justify-center">
        <FaShoppingCart className="text-white" />
        <p className={`text-white ml-1 ${inter.className}`}>{cart.length}</p>
        <BiDownArrow className="text-white ml-1" />
      </button>
      {showMiniCart ? <MiniCartDisplay inter={inter} poppins={poppins} cart={cart} item={item} /> : <></>}
    </div>
  );
};

export default CartHeader;
