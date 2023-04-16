import React, { useEffect, useRef } from 'react'
import { apparel, apparelThree, apparelTwo } from '@/images'
import Image from 'next/image'
import gsap, { Power3 } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import { Inter, Poppins } from 'next/font/google'


const inter = Inter({
  subsets: ['latin'],
  weight: '400',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500',
})


gsap.registerPlugin(ScrollTrigger)
const Apparel = () => {
  const scrollPinRef = useRef()
  const mainRef = useRef()
  const imageRef = useRef()
  const headingRef = useRef()
  const textRef = useRef()
  const buttonRef = useRef()

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        scrub: true,
        pin: true,
        pinSpacing: true,
        // toggleActions: "play reverse play reverse",
        toggleActions: 'restart complete reverse reset', 
        start: 'top top',
        end: '+=150vh',
        anticipatePin: true,
        invalidateOnRefresh: true,
      },
    })
    timeline.to(scrollPinRef.current, {
      opacity: 1,
      x: 0,
      ease: 'ease-in',
      transition: Power3.easeInOut,
      duration: 2,
    })
    timeline.to(imageRef.current, {
      opacity: 1,
      duration: 2,
      x: 0,
      transition: Power3.easeInOut,
      ease: 'ease-in'
    }).to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 2,
      transition: Power3.easeInOut,
      ease: 'ease-in'
    })
    .to(textRef.current, {
      duration: 2,
      y: 0,
      opacity: 1,
      transition: Power3.easeInOut,
      ease: 'ease-in'
    }).to(buttonRef.current, {
      opacity: 1,
      duration: 1,
      x: 0,
      transition: Power3.easeInOut,
      ease: 'ease-in'
    })
  }, [])
  
  return (
    <section ref={mainRef} className='p-3'>
    <section className='apparel--section h-full cartoon bg-[#48acf0] flex flex-row-reverse gap-4 px-3 -translate-x-10 opacity-0' ref={scrollPinRef}>
        <div className='apparel--text sm:w-[100%] flex flex-col w-[50%] items-center justify-center border-l-2 px-2 border-[#30343f]'>
            <h2 className={`text-2xl lg:text-4xl uppercase font-medium opacity-0 translate-y-6 mb-3 ${poppins.className}`} ref={headingRef}>Shop Apparel</h2>
            <p className={`opacity-0 lg:w-[50%] translate-y-8 no-shadow ${inter.className}`} ref={textRef}>
                CartO brings to you a vast selection of base apparel of different kinds, style and look, you could become anything or anyone you want to look like, it's just a cart order away!
            </p>
            <Link href={'/store'} className='w-24 h-10 bg-[#ff0035] flex items-center justify-center rounded-md cartoon opacity-0 translate-x-8 mt-4 transition hover:bg-[#53ddb4] uppercase font-semibold no-shadow' ref={buttonRef}>Go</Link>
        </div>
        <div className="apprel--image w-[50%] flex items-center justify-center">
            <Image src={apparelThree} alt='model-image' className='opacity-0 -translate-x-12' ref={imageRef}/>
           
        </div>
    </section>
    </section>
  )
}

export default Apparel