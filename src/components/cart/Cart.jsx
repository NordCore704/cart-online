import React from "react";
import Image from "next/image";
import { CartState } from "@/helpers/CartContext";
import { FaTrash } from "react-icons/fa";
import { Inter, Poppins } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="w-[65%] flex gap-3 flex-col items-center cart--body">
      {cart.length > 0 ? (
        cart.map((item) => {
          return (
            <div
              key={item.id}
              className="w-[90%] p-4 rounded-md border border-black flex flex-col"
            >
              <div className="mb-2 flex gap-3 self-start items-center justify-center">
                <Image
                  width={50}
                  height={50}
                  src={item.image}
                  alt="product image"
                  className="avatar rounded-full"
                />
                <p
                  className={`${poppins.className} uppercase font-semibold text-black text-xl`}
                >
                  {item.title}
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <p className={inter.className}>${item.price}</p>
                <label htmlFor="quantity"></label>
                <select
                  className="w-20 text-center border border-schemeDark cursor-pointer rounded-md bg-schemeWhite"
                  name="qty"
                  id="qty"
                  value={item.qty}
                  onChange={(e) =>
                    dispatch({
                      type: "CHANGE_CART_QTY",
                      payload: {
                        id: item.id,
                        qty: e.target.value,
                      },
                    })
                  }
                >
                  <option className="text-center" value={item.qty}>
                    1
                  </option>
                  <option className="text-center" value="2">
                    2
                  </option>
                  <option className="text-center" value="3">
                    3
                  </option>
                  <option className="text-center" value="4">
                    4
                  </option>
                  <option className="text-center" value="5">
                    5
                  </option>
                </select>

                <button type="button"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: item,
                    });
                  }}
                >
                  <FaTrash className="hover:text-schemeRed" />
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <>
          <p
            className={`${inter.className} text-2xl uppercase text-black self-center justify-self-center`}
          >
            The Cart is empty!
          </p>
          <p className={inter.className}>
            Would you like to order something immediately?
          </p>
          <div className="flex gap-3">
            <Link
              href={"/"}
              className={`${poppins.className} p-2 text-center bg-schemeBlue border-2 border-black rounded-md hover:bg-schemeDarkBlue hover:text-white transition-colors duration-300`}
            >
              Go Home
            </Link>
            <Link
              href={"/store"}
              className={`${poppins.className} p-2 text-center hover:bg-schemeDarkBlue hover:text-white transition-colors duration-300 bg-schemeRed text-black border-2 border-black rounded-md`}
            >
              Order Something
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
