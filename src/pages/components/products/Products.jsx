import Link from "next/link";
import React from "react";
import { Inter, Poppins } from 'next/font/google'


const inter = Inter({
  subsets: ['latin'],
  weight: '400',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500',
})

const Products = ({ data }) => {
  return (
    <section className="p-4 flex gap-12 flex-col items-center justify-center">
      <div className="intro--shop mt-5">
        <p className="font-bold uppercase text-3xl text-center text-black">
          The cart-O Store, Go through our categories below:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center w-full gap-5">
        {data.map((category, index) => {
          return (
            <div
              className="shop--grid border relative p-5 rounded-md bg-schemeBlue border-black flex flex-col overflow-hidden cursor-pointer items-center justify-center group"
              key={index}
            >
              <div className="h-96 w-72 flex flex-col  gap-3 items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-schemeDarkBlue group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="w-full flex justify-center items-center gap-3 flex-col absolute inset-0 px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-3xl font-bold uppercase text-black text-center">
                    {category}
                  </p>
                  <p className="text-black text-lg italic mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.description}
                  </p>
                  <Link
                    className={`text-black capitalize flex items-center justify-center border border-black p-2  w-24 bg-schemeRed rounded-full hover:text-white hover:bg-[#5dbb75] transition-colors duration-300 ${poppins.className}`}
                    href={`/store/${category}`}
                  >
                    See Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
