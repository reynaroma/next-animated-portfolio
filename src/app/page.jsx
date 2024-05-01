"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/images/Astronaut.png" alt="" fill
            className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">Crafting Digital Experiences, Designing Tomorrow</h1>
          {/* SUBTITLE */}
          <p className="md:text-xl">Welcome to my digital canvas, I am a Software
          Developer based in Saskatchewan, Canada. I develop user interfaces and
          web applications.
          </p>
          {/* BUTTONS */}
          <div className="flex gap-4 w-full">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
            </Link>
          </div>

        </div>
      </div>
    </motion.div>
  )
};

export default Homepage;
