import React from "react";
import { jeanKids, studio } from "@/images";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutLink = ({ poppins, inter }) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  const scrollVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      when: 'beforeChildren'
    },
    reveal: {
      opacity: 1,
      x: 0,
      when: "beforeChildren",
    },
  };
  const childVariants = {
    hidden: {
      y: 150,
      opacity: 0
    }, 
    reveal: {
      y: 0,
      opacity: 1
    }
  }
  return (
    <motion.div
      className="flex flex-col sm:flex-row md:flex-row lg:flex-row rounded-lg p-8 overflow-hidden items-center justify-center gap-3"
      variants={scrollVariants}
      initial="hidden"
      whileInView="reveal"
      transition={{
        ease: 'easeInOut',
        duration: 1.5,
        staggerChildren: 0.4,
        delayChildren: 2,
        // type: "spring",
        // stiffness: 40,
        // damping: 20,
      }}

    >
      <div className="jean-div flex rounded-md lg:w-[50%] md:w-[50%] w-[100%]">
        <Image src={jeanKids} alt="jean-kids" />
      </div>

      <motion.div className="jean-div flex items-center justify-center flex-col p-3 gap-3 w-[100%] lg:w-[50%]" initial='hidden' whileInView='reveal' variants={childVariants}
           transition={{
            duration: 1.8,
            // staggerChildren: 0.4,
            // delayChildren: 0.3,
            // type: "spring",
            // stiffness: 40,
            // damping: 20,
          }}>
        <p className={`text-3xl font-bold  ${poppins.className}`} initial='hidden' animate='reveal' variants={childVariants}
           transition={{
            duration: 1.5,
            staggerChildren: 0.4,
            delayChildren: 0.3,
            type: "spring",
            stiffness: 40,
            damping: 20,
          }}
    
        >What We Do</p>
        <p className={`${inter.className} text-center`}>
          CartO is an online e-commerce store that serves as a provider of every
          single one of your every material need ranging from fashion to
          electronics, etc.
        </p>
        <Link
          href={"/about-us"}
          className={`p-3 text-center flex items-center gap-3 capitalize rounded-sm hover:bg-schemeBlue duration-300 transition-colors border border-black bg-schemeDarkBlue text-schemeWhite ${poppins.className}`}
        >
          
          Learn more <FaArrowRight />{" "}
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default AboutLink;