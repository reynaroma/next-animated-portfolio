"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PortfolioPage = () => {
  // Create a reference to the element we want to animate
  const ref = useRef();
  // Get the scroll progress
  const { scrollYProgress } = useScroll({ target: ref });
  // Map the scroll progress to the element's y position
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div
        className="h-[600vh]"
        ref={ref}></div>
    </motion.div>
  );
};

export default PortfolioPage;
