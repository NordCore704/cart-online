import React from 'react'
import Image from 'next/image'
import { CartHeader } from '..'
import { CartState } from '@/helpers/CartContext'

import { Inter, Poppins } from 'next/font/google'


const inter = Inter({
  subsets: ['latin'],
  weight: '400',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500',
})

const ProductInfo = ({data}) => {
    const {
        state: { cart },
        dispatch,
      } = CartState();
    
  return ( 
    <div className='flex flex-col'>
      <div className="p-2 flex items-end justify-end">
      <CartHeader item={data}/>
      </div>
        
        {data.map((item) => {
            return (
                <div key={item.id} className={`p-5 flex flex-col gap-3 text-black ${poppins.className}`}>
                    <Image src={item.image} alt="product-image" width={100} height={100}/>
                    <h2 className='text-3xl font-bold capitalize'>{item.title}</h2>
                    <p className='text-2xl font-semibold'>${item.price}</p>
                    <p className={`${inter.className} text-schemeDark`}>{item.description}</p>
                    <div className="flex flex-row-reverse gap-3 items-center justify-center">
                    <button
                className="bg-schemeRed 
                mb-3 p-2 flex items-center justify-center capitalize rounded-md font-semibold text-black border border-black hover:bg-[#e311ffa2] transition-colors duration-300  disabled:bg-[#ff0033a2] disabled:text-white"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: item,
                  });
                }}
                disabled={cart.length === 0}
              >Remove From Cart</button>
                            <button
                className="bg-schemeBlue 
                mb-3 p-2 flex items-center justify-center capitalize rounded-md font-semibold text-black border border-black hover:bg-[#22ff85e0] transition-colors duration-300"
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: item,
                  });
                }}
              >
                Add to Cart
              </button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default ProductInfo