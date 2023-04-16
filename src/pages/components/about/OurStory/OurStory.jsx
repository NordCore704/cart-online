import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { aboutImage } from "@/images";
import { gsap, Power3 } from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)
const OurStory = ({ inter }) => {
  const mainScrollerRef = useRef()
  const textDivRef = useRef()
  const imageRef = useRef()
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: mainScrollerRef.current,
        start: 'top top',
        end: '+=150vh',
        invalidateOnRefresh: true,
        toggleActions: "play reverse play reverse",
        anticipatePin: true,
        pinSpacing: true,
        pin: true,
        scrub: true,
      },
    })
    timeline.to(imageRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'ease-in',
      transition: Power3.easeInOut,
    })
    timeline.to(textDivRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'ease-in',
        transition: Power3.easeInOut,
    })

  }, [])
  return (
    <section className="our-story--about lg:gap-4 flex p-5 w-full" ref={mainScrollerRef}>
      <div className="story--text flex flex-col items-center justify-center w-1/2 p-2 opacity-0 translate-x-9" ref={textDivRef}>
        <p className={`uppercase text-3xl mb-2 font-semibold text-schemeDarkBlue story--header ${inter.className}`}>Our Story</p>
        <p className={`text-black ${inter.className}`}>CartO was founded in the year 2023 by a group of developers who envisioned a comfortable online store with less limitations and great efficiency. At CartO, we believe everyone should have access to an endless store of anything that is desired as desired, our goal is to create a store that is accessible from anywhere in the world at the same speed and efficiency, so far we have evolved into a fierce force in the ecommerce field as we have satisfied every customer. Of course, the goal is to only do better every waking moment. We look forward to being your number one.</p>
      </div>
      <div className="flex items-center w-1/2 p-3 opacity-0 -translate-y-9" ref={imageRef}>
        <Image alt="about-image" src={aboutImage} className="cartoon" />
      </div>
    </section>
  );
};

export default OurStory;
