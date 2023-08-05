import React from "react";
import Link from "next/link";
import Image from "next/image";
import { hatladyFull, hatlady } from "@/images";
import { FaArrowRight } from "react-icons/fa";
import { GiMonclerJacket } from 'react-icons/gi'
import { BsStars } from "react-icons/bs";
import { motion } from "framer-motion";

const OverlaySection = ({ inter, poppins }) => {
  return (
    <section className="flex relative items-center justify-center bg-periwinkle px-3 border-b border-black">
      <Image src={hatlady} alt="hat-lady" className="z-[1] " />
      <div
        className={`border text-black border-black w-32 h-40 rounded-md p-2 absolute top-32 left-8 lg:left-[30%] flex flex-col items-center bg-schemeBlue justify-center gap-3 ${inter.className}`}
      >
        <p className="font-semibold ">Shop Women</p>
        <Link
          href={"/store/women's clothing"}
          className={`rounded-full bg-schemeRed p-3 hover:border hover:border-black duration-300 hover:bg-[#53ddb4] transition-colors z-20`}
        >
          <FaArrowRight />
        </Link>
        <p className=" text-black font-bold text-center text-lg leading-4">
          #Winter <br /> <span className=" font-semibold">Sales</span>
        </p>
      </div>
      <p
        className={`text-black absolute lg:left-30 sm:left-10 md:left-15 left-2 top-[50%] w-40 font-semilbold text-lg lg:text-2xl ${inter.className}`}
      >
        <BsStars className="text-lg text-schemeDarkBlue font-bold" />
        <br />
        All elegance and beauty, in diverse forms and styles.
      </p>
      <div
        className={`border text-black border-black w-32 h-40 rounded-md p-2 absolute bottom-24 right-3 lg:right-[30%] flex flex-col items-center justify-center gap-3 ${inter.className} bg-schemeBlue`}
      >
        <p className="font-semibold ">Shop Men</p>
        <Link
          href={"/store/men's clothing"}
          className={`rounded-full bg-schemeRed p-3 hover:border hover:border-black duration-300 hover:bg-[#53ddb5] transition-colors z-20`}
        >
          <FaArrowRight />
        </Link>
        <p className="font-bold text-center text-lg leading-4">
          #All-Season <br /> <span className=" font-semibold">Sales</span>
        </p>
      </div>
      <p
        className={`text-black absolute lg:right-30 sm:right-10 md:right-15 right-2 top-[25%] w-40 text-lg lg:text-2xl ${inter.className}`}
      >
        <GiMonclerJacket className="text-lg text-schemeDarkBlue font-bold" />
        <br />
        The whole gentleman vibe in one single pack, you could do all here.
      </p>
      <p
        className={`absolute top-16 z-0 text-5xl capitalize font-bold text-black  ${poppins.className}`}
      >
        Wear The best.
      </p>
    </section>
  );
};

export default OverlaySection;
