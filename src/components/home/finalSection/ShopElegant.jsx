import React from "react";
import { cartBoy } from "@/images";
import Image from "next/image";

const ShopElegant = () => {
  return (
    <section className="elegant--section flex items-center justify-center gap-2 p-3 overflow-hidden">
      <div className="self-start h-[70vh] flex flex-col">
        <div className=" text-center flex flex-col  items-center justify-center p-4 h-1/2 bg-[#48acf0] border border-black rounded-md ">
        <p className="text-3xl uppercase text-black">Shop Elegant</p>
        <p className="text-4xl uppercase font-semibold text-black">Shop how you like</p>
        </div>
        <div className="text-center p-4 mt-3 h-1/2 bg-gradient-to-b from-[#ff0035] to-[#ff0035] border-[1.5px] border-black rounded-md flex flex-col items-center justify-center red--card">
          <p className="text-3xl uppercase font-semibold underline text-black">Cart-O will let you do it the way you like it</p>
        </div>
      </div>
      <div className="relative h-[70vh]">
        <div className="h-full flex items-center justify-center bg-red-500 rounded-md border border-black">
          <Image
            alt="cart-boy"
            src={cartBoy}
            className="cart--boy saturate-0 outline-2 outline-black"
          />
        </div>
        <div className="cartoon bg-[#ff0035] absolute bottom-[30%] rounded-sm empty"></div>
      </div>
    </section>
  );
};

export default ShopElegant;
