import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { accessoriesIcon } from "@/images";
import Link from "next/link";
import gsap from "gsap";

const Accessories = ({ timeline }) => {

  const cardRef = useRef()
  useEffect(() => {
    gsap.to(cardRef.current, {
      opacity: 1,
      x: 0
    })
  }, [])
  return (
    <div className="rounded-md flex flex-col items-center justify-center shadow-md p-4 text-center cartoon -translate-x-8 opacity-0" ref={cardRef}>
      <Image alt="accessories-icon" src={accessoriesIcon} />
      <h3 className="text-lg font-semibold">Accessories</h3>
      <p>
        The items in our products store at cartO also features a store of the
        best accessories all in one place, you just have to make your pick.
      </p>
      <Link
        href={"/products"}
        className="cartoon flex items-center justify-center h-5 w-24 mt-4 p-3 rounded-md bg-[#48acf0] uppercase"
      >
        See Now
      </Link>
    </div>
  );
};

export default Accessories;
