"use client"
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="">
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48
        flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            <h1>BIOGRAPHY</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quae neque repellat nesciunt excepturi doloribus sapiente dolores non nam,
              labore earum corrupti maxime obcaecati ad maiores,
              minus amet libero deserunt blanditiis.</p>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            <div className="">

            </div>
          </div>
          {/* SKILLS CONTAINER */}
          <div>
            SKILLS
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div>
            EXPERIENCE
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden">

        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
