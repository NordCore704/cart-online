import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { anonymous, contactImageOne, contactImageTwo } from "@/images";
import { gsap, Power3 } from "gsap";
import { FaInstagram, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";

import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const Contact = () => {
  const timeline = gsap.timeline();
  const bodyRef = useRef();
  const imageRef = useRef();
  const headerRef = useRef();
  const headerRefTwo = useRef();
  const formRef = useRef();

  useEffect(() => {
    timeline
      .to(bodyRef.current, {
        opacity: 1,
        ease: "ease-in",
        transition: Power3.easeInOut,
        duration: 1,
      })
      .to(imageRef.current, {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "ease-in",
        transition: Power3.easeInOut,
      })
      .to(headerRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "ease-in",
        transition: Power3.easeInOut,
      })
      .to(headerRefTwo.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "ease-in",
        transition: Power3.easeInOut,
      })
      .to(formRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "ease-in",
        transition: Power3.easeInOut,
      });
  },);
  return (
    <section
      className="contact--section h-screen flex items-center justify-center gap-5 p-5 opacity-0"
      ref={bodyRef}
    >
      <div className="image-div--contact w-[50%]">
        <Image
          className="cartoon rounded-sm opacity-0 -translate-x-7 translate-y-7"
          src={contactImageTwo}
          alt="pic"
          ref={imageRef}
        />
      </div>
      <div className="talk-div--contact flex-col gap-8 w-[50%]">
        <p
          className="text-4xl font-bold capitalize opacity-0 translate-x-7"
          ref={headerRef}
        >
          Share Your Opinions with Us 
        </p>
        <p
          className="text-3xl font-semibold capitalize opacity-0 -translate-y-5"
          ref={headerRefTwo}
        >
          Let's have a talk!
        </p>
        <div
          className="flex lg:p-5 bg-schemeWhite items-center justify-between h-[50vh] w-full border-l-2 border-t-2 border-black mt-5 opacity-0 translate-x-5"
          ref={formRef}
        >
          <form
            action=""
            className="flex justify-center flex-col items-center p-3 gap-3"
          >
            <input
              placeholder="Name"
              type="text"
              className="border-black mb-4 border-b-2 active:outline-none focus:outline-none outline-none hover:outline-none p-1 w-full placeholder:text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-black mb-4 border-b-2 p-1 w-full active:outline-none focus:outline-none outline-none placeholder:text-black"
            />
            <button className={`border hover:bg-schemeRed hover:text-schemeWhite border-black font-semibold text-black w-[100%] h-12 bg-schemeBlue rounded-full ${poppins.className}`}>
              Contact Us
            </button>
          </form>
          <div className="flex flex-col gap-5">
            <div className="">
              <p className="font-bold">Contact</p>
              <p className={inter.className}>cartO@gmail.com</p>
            </div>
            <div className="">
              <p className="font-bold">Based In</p>
              <p className={inter.className}>
                Everywhere around the world, really
              </p>
            </div>
            <div className="social--icons-contact flex gap-3">
              <FaLinkedin className="hover:text-schemeRed cursor-pointer" />
              <FaInstagram className="hover:text-schemeRed cursor-pointer" />
              <FaTwitter className="hover:text-schemeRed cursor-pointer" />
              <FaMailBulk className="hover:text-schemeRed cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
