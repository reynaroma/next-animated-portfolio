"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { items } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const PortfolioPage = () => {

  // Create a reference to the element we want to animate
  const ref = useRef();
  // Get the scroll progress
  const { scrollYProgress } = useScroll({ target: ref });
  // Map the scroll progress to the element's y position
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);


  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div
        className="h-[600vh] relative"
        ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)]
          flex items-center justify-center text-8xl text-center">My Works</div>
        <div className="sticky top-0 flex h-screen gap-4 items-center
      overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex">
            <div className='h-screen w-screen flex items-center
            justify-center bg-gradient-to-r from-purple-300 to-red-300' />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center
            justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}>
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="">{item.title}</h1>
                  <div className="relative">
                    <Image src={item.img} alt={item.title} fill />
                  </div>
                  <p className="">{item.desc}</p>
                  <Link href={item.link}>
                    <button>See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16
          items-center justify-center text-center">
        <h1 className="">
          Do you have a project?
        </h1>
        <div className="relative">
          <svg>
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
          </svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0
              right-0 bottom-0 m-auto bg-black text-white rounded-full"
          >Hire Me</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;