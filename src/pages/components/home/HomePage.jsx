import React, { useRef, useEffect } from "react";
import gsap, { Power3 } from "gsap";
import Link from "next/link";
import { HorizontalText } from "..";

const HomePage = () => {
  const timeline = gsap.timeline();
  const bodyRef = useRef();
  const clipDivRef = useRef();
  const clipRef = useRef();
  const headerRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    timeline
      .to(bodyRef.current, {
        delay: 2,
        opacity: 1,
        duration: 0.8,
        ease: "ease-in",
      })
      .to(headerRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "ease-in",
        transition: Power3.easeInOut,
      })
      .to(clipDivRef.current, {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "ease-in",
        transition: Power3.easeInOut,
      })
      .to(clipRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: "ease-in",
        transition: Power3.easeInOut,
      })
      .to(buttonRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "ease-in",
        transition: Power3.easeInOut,
      });
  },);
  return (
    <section
      className="intro--section overflow-hidden h-screen flex items-center justify-between opacity-0"
      ref={bodyRef}
    >
      <div className="intro--div p-3">
        <h1
          className="intro-text font-bold text-[#004398] uppercase opacity-0 translate-x-6 z-10"
          ref={headerRef}
        >
          Shop for <br />
          anything{" "}
          <span className="text-[#ff0035] -rotate-[5deg] bg-[#48acf0] hover:bg-[#53ddb4] transition hover:text-[#004398] hover:border-[#004398] lg:h-20 border-dashed border-2 border-[#ff0035] my-2 flex items-center justify-center z-[-1]">
            And
          </span>
          everything!
        </h1>
      </div>

      <div
        className="avatar-clip-div z-10 bg-gradient-to-br from-[#48acf8]  to-[#48acf0] flex items-center gap-10 flex-col justify-center self-start mt-10 p-3 opacity-0 translate-y-5 translate-x-5 mr-3"
        ref={clipDivRef}
      >
        <p
          className="text--clip font-extrabold uppercase text-center opacity-0"
          ref={clipRef}
        >
          Cart <br /> it all
        </p>

        <Link
          href={"/store"}
          className="shop-btn flex justify-center items-center hover:bg-[#53ddb4] w-44 h-12 mb-3 rounded-lg bg-[#ff0035] border cartoon border-black hover:border hover:border-black -translate-y-8 opacity-0 transition uppercase font-semibold"
          ref={buttonRef}
        >
          Shop Now
        </Link>
      </div>
      <div className="random-decorations absolute bottom-[10%] right-[5%] w-6 h-3 cartoon hover:bg-blue-500 bg-[#ff0035] "></div>
      {/* <div className="random-decorations absolute top-[8%] right-[10%] w-6 h-full cartoon z-0 bg-[#ff0035]">
        </div> */}
        <HorizontalText />
    </section>
  );
};

export default HomePage;
