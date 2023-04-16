import React, { useContext, useEffect, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { CartState } from "@/helpers/CartContext";
import { SingleProduct, CartHeader } from "../../exports";

const ProductCategory = ({ data, pageName }) => {

  return (
    <section>
      <div className="w-full p-3 flex items-end justify-end">
      <CartHeader />
      </div>
       
      <section className="p-5 grid grid-auto-fit gap-8 h-full relative overflow-hidden">
   
     
      {data.map((item) => {
        return (<SingleProduct item={item} key={item.id}/>)
      })}
    </section>
    </section>

  );
};

export default ProductCategory;
