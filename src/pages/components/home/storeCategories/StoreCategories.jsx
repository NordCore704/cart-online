import React, { useRef, useEffect } from "react";
import { apparelIcon, accessoriesIcon, gadgetsIcon } from "@/images";
import Image from "next/image";
import gsap, { Power3 } from "gsap";
import Link from "next/link";
import { Inter, Poppins } from 'next/font/google'


const inter = Inter({
  subsets: ['latin'],
  weight: '400',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500',
})

const StoreCategories = () => {
  const bodyRef = useRef();
  const cardRef = useRef();
  const secondCardRef = useRef();
  const thirdCardRef = useRef();

  useEffect(() => {
    const timeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: bodyRef.current,
          pin: true,
          start: "top top",
          end: "+=150vh",
          pinSpacing: true,
          anticipatePin: true,
          toggleActions: "play reverse play reverse",
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
      timeline.to(cardRef.current, {
        opacity: 1,
        x: 0,
        ease: "ease-in",
        transition: Power3.easeInOut,
        duration: 2,
      })
      .to(secondCardRef.current, {
        x: 0,
        opacity: 1,
        scale: 1,
        ease: "ease-in",
        transition: Power3.easeInOut,
        duration: 2.3,
      }).to(thirdCardRef.current, {
        x: 0,
        opacity: 1,
        ease: "ease-in",
        transition: Power3.easeInOut,
        duration: 2.5,
      });
  }, []);
  return (
    <section
      className={`store--categories h-screen p-3 flex items-center justify-center gap-5 lg:gap-10 ${inter.className}`}
      ref={bodyRef}
    >
      <div
        className="rounded-md flex bg-schemeBlue flex-col items-center justify-center shadow-md p-4 text-center border-black border-2 -translate-x-8 opacity-0"
        ref={cardRef}
      >
        <Image alt="accessories-icon" src={accessoriesIcon} />
        <h3 className={`text-lg font-semibold text-black ${poppins.className}`}>Accessories</h3>
        <p className={`text-black ${inter.className}`}>
          The items in our products store at cartO also features a store of the
          best accessories all in one place, you just have to make your pick.
        </p>
        <Link
          href={"/store"}
          className="border text-black border-black flex items-center justify-center w-24 mt-4 p-1 rounded-md bg-schemeRed hover:bg-[#5cdbb4] transition-colors duration-300 capitalize no-shadow font-medium"
        >
          See Now
        </Link>
      </div>

      <div className="rounded-md flex flex-col items-center justify-center shadow-md p-4 text-center cartoon opacity-0 -translate-x-10 scale-50 bg-gradient-to-b from-schemeRed to-[#ff0035] no-shadow" ref={secondCardRef}>
        <Image alt="accessories-icon" src={apparelIcon} />
        <h3 className={`text-lg font-semibold ${poppins.className}`}>Apparel</h3>
        <p className={inter.className}>
          CartO provides a vast and never ending store of different kinds of
          apparel, fashion is not limited in our store, we have everything!
        </p>
        <Link
          href={"/store"}
          className="cartoon flex items-center justify-center h-10 w-26 mt-4 p-3 rounded-md transition-colors duration-300 hover:bg-[#5cdbb4] bg-schemeBlue no-shadow font-semibold uppercase"
        >
          Check It Out
        </Link>
      </div>

      <div
        className="rounded-md flex flex-col items-center justify-center shadow-md p-4 text-center text-black opacity-0 -translate-x-8 bg-schemeBlue border-2 border-black"
        ref={thirdCardRef}
      >
        <Image alt="accessories-icon" src={gadgetsIcon} />
        <h3 className={`text-lg font-semibold ${poppins.className}`}>Gadgets</h3>
        <p className={inter.className}>
          Fans of gizmos are covered nicely, we have all kinds of gadgets, you
          name it, we deliver it to you straight up, jump in and pick what suits
          you
        </p>
        <Link
          href={"/store"}
          className={`border border-black flex items-center justify-center h-5 w-24 mt-4 p-3 rounded-md bg-schemeRed capitalize hover:bg-[#5cdbb4] no-shadow font-semibold transition-colors duration-300 ${inter.className}`}
        >
          Jump In
        </Link>
      </div>
    </section>
  );
};

export default StoreCategories;
