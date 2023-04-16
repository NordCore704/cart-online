import React, { useContext, useEffect, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { CartState } from "@/helpers/CartContext";
import { Inter, Poppins } from 'next/font/google'


const inter = Inter({
  subsets: ['latin'],
  weight: '400',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
})

const SingleProduct = ({ item }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className={poppins.className}>
      <div className="p-5 cartoon border border-black rounded-lg item--container card shadow-md flex flex-col gap-3 items-center justify-center">
        <Image
          className=""
          width={100}
          height={100}
          src={item.image}
          alt="product-image"
        />
        <div className={`flex gap-2 ${inter.className}`}>
          <p className="text-schemeDark p-2 text-center rounded-md bg-periwinkle">
            stock ready
          </p>
          <p className="text-schemeDark p-2 text-center rounded-md  bg-periwinkle">
            official store
          </p>
        </div>
        <p className="text-lg self-start uppercase font-semibold">
          {item.title}
        </p>
        <p className="self-start font-semibold text-">${item.price}</p>
        <div className="flex gap-3 items-start w-full">
          {cart.some((p) => p.id === item.id) ? (
            <button
              className="bg-schemeBlue 
               p-2 flex items-center justify-center capitalize rounded-md font-semibold border border-black hover:bg-[#11fc9a] transition-colors duration-300 hover:text-white"
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: item,
                });
              }}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className={`bg-schemeBlue 
               p-2 flex items-center justify-center capitalize rounded-md border border-black hover:bg-[#11fc9a] font-bold transition-colors duration-300 hover:text-schemeWhite ${poppins.className}`}
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: item,
                });
              }}
            >
              Add to Cart
            </button>
          )}

          <Link
            className="bg-schemeRed border border-black p-2 flex items-center justify-center capitalize rounded-md no-shadow font-semibold hover:bg-[#11fc9a] transition-colors duration-300"
            href={`/store/${item.category}/${item.id}`}
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
