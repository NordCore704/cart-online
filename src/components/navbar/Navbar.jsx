import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { logo, hamburger, closeburger } from "@/images";
import gsap, { Power3} from "gsap";
import { Inter, Poppins } from 'next/font/google'


const inter = Inter({
  subsets: ['latin'],
  weight: '400',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500',
})

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const toggleNav = () => {
    setToggle((prev) => !prev);
  };


  const router = useRouter()
  const currentRoute = router.pathname

  const navRef = useRef()
  const logoRef = useRef()
  const listRefOne = useRef()
  const listRefTwo = useRef()
  const listRefThree = useRef()
  const listRefFour = useRef()
  let timeline = gsap.timeline()
  useEffect(() => {
    timeline.to(navRef.current, {
      visibility: 'visible',
      duration: .5,
      ease: 'ease-in'
    })
    .to(logoRef.current, {
      x: 0,
      opacity: 1,
      ease: 'ease-in',
      duration: 1,
    })
    .to(listRefOne.current, {
      x: 0,
      opacity: 1,
      ease: 'ease-in',
      transition: Power3.easeInOut,
      duration: .7,
    }).to(listRefTwo.current, {
      x: 0,
      opacity: 1,
      ease: 'ease-in',
      transition: Power3.easeInOut,
      duration: .8,
    }).to(listRefThree.current, {
      x: 0,
      opacity: 1,
      ease: 'ease-in',
      transition: Power3.easeInOut,
      duration: .8,
    }).to(listRefFour.current, {
      x: 0,
      opacity: 1,
      ease: 'ease-in',
      transition: Power3.easeInOut,
      duration: .8,
    })
  },)
  return (
    <header className={`header overflow-hidden ${inter.className}`} ref={navRef}>
      <nav className="nav flex justify-between items-center border-b h-14 p-4 border-[#30343f]">
        <div className="logo--div py-3 flex justify-center items-center h-[64px] opacity-0 -translate-x-8" ref={logoRef}
        >
          <Image src={logo} height={50} alt={"logo"} />
          <p className="text-xl font-bold self-end text-[#30343f]">CartO</p>
        </div>
        <div className="details--div flex items-center">
          {toggle ? (
            <Image src={hamburger} alt='hamburger' onClick={toggleNav} className="hamburger cursor-pointer" />
          ) : (
            <Image
              src={closeburger}
              onClick={toggleNav}
              className="hamburger cursor-pointer z-40"
              alt="closeburger"

            />
          )}
          <ul className="mobile-none list-none flex">
            <li className="-translate-x-8 opacity-0" ref={listRefOne}>
              <Link href={"/"} className={currentRoute === '/' ? 'active' : ''}>Home</Link>
            </li>
            <li className="-translate-x-8 opacity-0" ref={listRefTwo}>
              <Link href={"/about-us"} className={currentRoute === '/about-us' ? 'active' : ''}> About</Link>
            </li>
            <li className="-translate-x-8 opacity-0" ref={listRefThree}>
              <Link href={"/store"} className={currentRoute === '/store' ? 'active' : ''}>Shop</Link>
            </li>
            <li className="-translate-x-8 opacity-0" ref={listRefFour}>
              <Link href={"/contact"} className={currentRoute === '/contact' ? 'active' : ''}>Contact</Link>
            </li>
          </ul>
        </div>

        {!toggle ? (<div className="desktop-none  list-none absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm w-[100%]  z-30 h-screen flex-col">
          <div className="bg-[#d5d6d8] p-5 h-[50%] rounded-md w-[70vw] flex items-center justify-center">
          <ul className="flex flex-col gap-6">
            <li>
              <Link href={"/"} onClick={toggleNav} className={currentRoute === '/' ? 'active' : ''}>Home</Link>
            </li>
            <li>
              <Link href={"/about-us"} onClick={toggleNav}className={currentRoute === '/about-us' ? 'active' : ''}>About</Link>
            </li>
            <li>
              <Link href={"/store"} onClick={toggleNav}className={currentRoute === '/store' ? 'active' : ''}>Shop</Link>
            </li>
            <li>
              <Link href={"/contact"} onClick={toggleNav}className={currentRoute === '/contact' ? 'active' : ''}>Contact</Link>
            </li>
          </ul>
          </div>
 
          </div>) : (<></>)}
      </nav>
    </header>
  );
};

export default Navbar;
