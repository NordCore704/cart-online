import React, { useEffect, useRef } from "react";
import { studio, street, bagModel, indians, paris } from "@/images";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const PhotoCollage = ({ inter, poppins }) => {
  const scrollPinRef = useRef();
  const indianModelsRef = useRef();
  const blueBgRef = useRef();
  const bagModelRef = useRef();
  const plusRef = useRef();
  const studioRef = useRef();
  const textRef = useRef();
  const textRefTwo = useRef()
  const buttonRef = useRef();

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: scrollPinRef.current,
        scrub: true,
        pin: true,
        pinSpacing: true,
        toggleActions: "restart complete reverse reset",
        start: "top top",
        end: "+=150vh",
        anticipatePin: true,
        invalidateOnRefresh: true,
      },
    });
    timeline.to(indianModelsRef.current, {
      opacity: 1,
      duration: 2,
      y: 0,
      ease: "ease-in",
      transition: Power3.easeInOut,
    });
    timeline.to(blueBgRef.current, {
      opacity: 1,
      duration: 2,
      y: 0,
      ease: "ease-in",
      transition: Power3.easeInOut,
    });
    timeline.to(bagModelRef.current, {
      opacity: 1,
      duration: 2,
      y: 0,
      ease: "ease-in",
      transition: Power3.easeInOut,
    });
    timeline.to(plusRef.current, {
      opacity: 1,
      duration: 2,
      y: 0,
      ease: "ease-in",
      transition: Power3.easeInOut,
    });
    timeline.to(studioRef.current, {
      opacity: 1,
      duration: 2,
      y: 0,
      ease: "ease-in",
      transition: Power3.easeInOut,
    });
    timeline.to(textRef.current, {
      opacity: 1,
      duration: 2,
      y: 0,
      ease: "ease-in",
      transition: Power3.easeInOut,
    });
    timeline.to(textRefTwo.current, {
      opacity: 1,
      duration: 2,
      y: 0,
      ease: "ease-in",
      transition: Power3.easeInOut,
    });
    timeline.to(buttonRef.current, {
      opacity: 1,
      duration: 2,
      y: 0,
      ease: "ease-in",
      transition: Power3.easeInOut,
    });
  });
  return (
    <div
      className="flex flex-col items-center justify-between gap-8 p-5 mt-10 bg-periwinkle border-t border-black"
      ref={scrollPinRef}
    >
      <div className="w-full h-[70%] relative flex justify-between">
        <Image
          src={indians}
          className="rounded-full w-[32%] border border-black opacity-0 translate-y-9"
          alt="models"
          ref={indianModelsRef}
        />
        <Image
          src={paris}
          className="border border-black bg-schemeBlue rounded-full w-[30%] absolute top-10 left-[33%] opacity-0 translate-y-12"
          alt="models"
          ref={blueBgRef}
        />
        {/* <Image src={street} className=' rounded-full w-[30%] absolute '/> */}
        <div className="flex flex-col self-end justify-self-end gap-4 lg:w-[30%] w-[35%]">
          <Image
            src={bagModel}
            className="rounded-full border border-black opacity-0 translate-y-14"
            alt="models"
            ref={bagModelRef}
          />
          <p
            className="self-center text-black opacity-0 translate-y-16"
            ref={plusRef}
          >
            <FaPlus className=" text-black" />
          </p>

          <Image
            src={studio}
            className="rounded-full border border-black opacity-0 translate-y-20"
            alt="models"
            ref={studioRef}
          />
        </div>
      </div>
      <div className="flex items-center flex-col gap-4">
        <div className="text-center text-black">
          <p
            className={`${poppins.className} font-bold text-4xl uppercase opacity-0 translate-y-14`}
            ref={textRef}
          >
            Express
          </p>
          <p
            className={`${poppins.className} font-semibold text-4xl uppercase opacity-0 translate-y-16`}
            ref={textRefTwo}
          >
            Your<span className="font-bold">self</span>
          </p>
        </div>
        <Link
          href={"/store"}
          className={`p-3 w-64 text-center border-black text-black border text-2xl bg-schemeBlue rounded-full hover:bg-schemeRed transition-colors duration-300 hover:text-white ${poppins.className} opacity-0 translate-y-14`}
          ref={buttonRef}
        >
          See How
        </Link>
      </div>
    </div>
  );
};

export default PhotoCollage;