import React from "react";
import { FaTrash } from "react-icons/fa";
import { CartState } from "@/helpers/CartContext";
import Link from "next/link";

const MiniCartDisplay = ({ cart, item, poppins, inter }) => {
  const { dispatch } = CartState();
  return (
    <div className="w-64 absolute top-28 right-5 z-10 bg-periwinkle cartoon rounded-md p-2 flex flex-col items-center">
      {cart.length > 0 ? (
        cart.map((item) => {
          return (
            <div key={item.id} className="w-full border-b border-black mb-1 p-2 flex items-center gap-3 justify-between">
              <p className={inter.className}>{item.title}</p>
              <p className={inter.className}>${item.price}</p>
              <button
                className="hover:text-schemeRed"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: item,
                  });
                }}
              >
                <FaTrash />
              </button>
            </div>
          );
        })
      ) : (
        <p className={`text-lg mb-3 font-semibold text-black ${inter.className}`}>Cart is empty!</p>
      )}
      {cart.length > 0 ? (
        <Link href={'/cart'} className={`w-[90%] p-1 capitalize font-semibold border border-black bg-schemeBlue rounded-md text-center ${poppins.className}`}>
          Go to cart
        </Link>
      ) : (
        <>
        <button className={`${[poppins.className]} w-[90%] p-1 capitalize font-semibold border border-black bg-schemeBlue rounded-md`}>
        Go back
      </button></>
      )}
    </div>
  );
};

export default MiniCartDisplay;
