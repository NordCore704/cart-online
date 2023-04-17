import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { FaCartPlus, FaShoppingCart,  } from 'react-icons/fa'
import { gsap, Power3 } from 'gsap'

const CartButton = () => {
    const tl = gsap.timeline()
    const mainRef = useRef()

    useEffect(() => {
        gsap.to(mainRef.current, {
            opacity: 1,
            transition: Power3.easeInOut,
            ease: 'ease-in',
            duration: .3,
            scale: 1,
            delay: 2,
        })
    }, [])
  return (
    <div className='h-10 w-10 border-2 border-black rounded-md absolute sm:left-10 top-20 right-5 cursor-pointer group hover:border-schemeDarkBlue bg-schemeDarkBlue opacity-0 scale-0 transition-colors duration-300 overflow-hidden' ref={mainRef}>
        <Link href={'/cart'} className='rounded-md group-hover:bg-[#53ddb4] w-full h-full flex items-center transition-colors duration-200 justify-center text-center'><FaShoppingCart className='text-white text-center group-hover:text-schemeDarkBlue'/></Link>
    </div>
  )
}

export default CartButton