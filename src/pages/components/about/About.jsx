import React, { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import { Inter, Poppins } from 'next/font/google'


const inter = Inter({
  subsets: ['latin'],
  weight: '400',
})

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: '500',
// })


const About = ({ poppins, }) => {
  const timeline = gsap.timeline();
  const mainRef = useRef();
  const bigTextRef = useRef();
  const quoteTextOneRef = useRef();
  const quoteTextTwoRef = useRef();
  useEffect(() => {
    timeline
      .to(mainRef.current, {
        opacity: 1,
        duration: 1.2,
        ease: "ease-in",
        transition: Power3.easeInOut,
      })
      .to(bigTextRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: "ease-in",
        transition: Power3.easeInOut,
      })
      .to(quoteTextOneRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "ease-in",
        transition: Power3.easeInOut,
      })
      .to(quoteTextTwoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "ease-in",
        transition: Power3.easeInOut,
      });
  }, []);
  return (
    <section className="p-4 flex opacity-0" ref={mainRef}>
      <div className="first-section w-full h-screen flex flex-col border-b border-schemeDark">
        <div className="w-full about-header flex items-center justify-center border-b border-schemeDark">
          <p
            className="big-text--about text-center text-8xl lg:text-9xl font-extrabold uppercase text-schemeDarkBlue opacity-0 -translate-x-9"
            ref={bigTextRef}
          >
            About Us
          </p>
        </div>
        <div className="quotes-div--about w-full h-full flex ">
          <div
            className="w-1/2 flex items-center justify-center border-r p-4 border-schemeDark quote--one opacity-0 translate-y-10"
            ref={quoteTextOneRef}
          >
            <p
              className={`lg:w-[50%] font-medium lg:text-center ${poppins.className} text-black`}
            >
              "Did we just deliver your order exactly as requested? Did you like
              it? Would you want it exactly like this next time?"
            </p>
          </div>
          <div
            className="w-1/2 h-full flex flex-col gap-3 items-center justify-center p-4 opacity-0 -translate-y-10"
            ref={quoteTextTwoRef}
          >
            <p
              className={`lg:w-[50%] font-medium lg:text-center ${poppins.className} text-black`}
            >
              "We do it because we have the burning passion to always deliver
              and every single time we try, we make sure it is our best we give"
            </p>

            <p className={`font-semibold ${inter.className}`}>Find Our Story Below!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
