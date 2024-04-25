"use client"
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  // useRef to scroll to the top of the container
  const containerRef = useRef();
  // useScroll to get the scrollYProgress of the container
  const { scrollYProgress } = useScroll({ container: containerRef });
  // useRef to check if the skillRef is in view
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-y-auto lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48
        flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64
        lg:w-2/3 lg:pr-0 xl:1/2 ">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center
          font-light">
            {/* BIOGRAPHY TITLE */}
            <h1 className="text-white md:text-[60px] sm:text-[50px] 
            xs:text-[40px] text-[30px] font-bold bg-clip-text text-transparent 
            bg-gradient-to-r from-stone-500 to-stone-700 ">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESCRIPTION */}
            <p className="text-[17px] leading-[30px]">Hi there! I&lsquo;m Reyna May A. Roma, a junior software developer with experience
              in JavaScript and expertise in frameworks like ReactJS, and NodeJS. I&lsquo;m a quick learner
              and collaborate closely with the team to create efficient, scalable, and user-friendly solutions
              that solve real-world problems. Let&lsquo;s work together to bring your ideas to life and create
              something amazing.</p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">Front-End Developer/ Webflow Developer / Power Apps Developer</span>
            {/* SVG CONTAINER */}
            <div className="self-end">
              <svg width="185" height="77" viewBox="0 0 370 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.30159 37.8148C16.3059 37.8148 43.0297 26.1331 44.963 10.6666C46.3715 -0.6017 48.8413 29.448 48.8413 31.9973C48.8413 56.8558 39.9935 81.1226 32.4662 104.608C23.7566 131.782 19.47 160.931 17.8148 189.069C17.1848 199.779 13.9365 168.866 13.9365 165.799C13.9365 140.415 23.4538 117.855 31.3889 94.0502C44.1964 55.6277 67.9881 34.6535 98.8283 10.6666C119.504 -5.4147 134.164 2.42654 134.164 30.0582C134.164 52.6768 101.352 67.8989 82.8842 73.5814C72.3101 76.835 60.9279 74.6341 50.7804 78.537C34.524 84.7895 36.047 69.3579 44.963 75.0896C62.7183 86.5037 70.5358 106.43 82.0223 121.198C96.3749 139.652 126.324 95.7735 133.302 84.3545C143.606 67.4932 146.053 112.453 157.434 106.762C177.061 96.9491 197.753 59.9739 204.189 101.807C204.847 106.081 207.017 122.889 211.73 123.138C232.138 124.212 252.008 110.008 265.811 96.2048C273.784 88.2318 297.768 43.1104 297.053 68.8412C296.484 89.3078 288.767 108.959 283.694 128.524C280.293 141.642 273.783 181.506 273.783 167.954C273.783 115.132 283.856 70.4037 322.046 32.2128C328.512 25.7468 336.787 12.6595 347.471 14.5449C355.15 15.9001 357.095 48.7311 353.073 55.0517C343.837 69.5645 299.961 96.5433 283.694 91.8956C279.551 90.7119 280.034 74.5776 289.296 84.3545C298.78 94.3653 301.808 110.204 310.627 120.983C326.441 140.311 353.799 128.34 372.464 119.259C382.286 114.481 394.309 111.742 399.828 101.807C404.833 92.7972 401.767 113.035 401.767 117.536C401.767 166.988 435.827 114.967 434.517 113.657C421.139 100.279 403.089 110.691 413.402 128.74C419.965 140.225 464.812 96.6155 475.455 95.9894C485.432 95.4025 486.822 98.138 492.692 105.685C496.353 110.392 493.74 130.058 495.708 127.016C506.584 110.209 536.245 85.6702 547.204 109.779C553.023 122.581 547.244 105.196 553.021 96.8512C561.753 84.2384 577.226 77.5328 588.141 88.4482C618.252 118.559 660.027 95.8603 697.38 87.3709C706.371 85.3277 716.67 82.7523 725.39 80.2607C742.023 75.5084 690.88 83.9873 674.111 88.2328C652.03 93.8228 643.885 102.165 636.62 122.922C625.394 154.997 670.64 128.877 680.79 121.414C690.612 114.192 699.791 107.436 707.292 97.7131C708.487 96.163 713.101 85.6259 715.048 90.8183C718.217 99.268 721.623 115.921 731.639 119.259C774.927 133.689 799.863 94.3173 832.259 72.7195" stroke="black" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            {/* SKILLS SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center"
            ref={skillRef}>
            {/* SKILLS TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl">SKILLS</motion.h1>

            {/* SKILLS LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex gap-4 flex-wrap">
              <div
                className="rounded p-2 text-sm cursor-pointer bg-black text-white
                hover:bg-white hover:text-black">JavaScript
              </div>
              <div
                className="rounded p-2 text-sm cursor-pointer bg-black text-white
                hover:bg-white hover:text-black">ReactJS
              </div>
              <div
                className="rounded p-2 text-sm cursor-pointer bg-black text-white
                hover:bg-white hover:text-black">NextJS
              </div>
              <div
                className="rounded p-2 text-sm cursor-pointer bg-black text-white
                hover:bg-white hover:text-black">Tailwind CSS
              </div>
              <div
                className="rounded p-2 text-sm cursor-pointer bg-black text-white
                hover:bg-white hover:text-black">HTML
              </div>
              <div
                className="rounded p-2 text-sm cursor-pointer bg-black text-white
                hover:bg-white hover:text-black">SCSS
              </div>
              <div
                className="rounded p-2 text-sm cursor-pointer bg-black text-white
                hover:bg-white hover:text-black">PostgreSQL
              </div>
              <div
                className="rounded p-2 text-sm cursor-pointer bg-black text-white
                hover:bg-white hover:text-black">NodeJS
              </div>
              <div
                className="rounded p-2 text-sm cursor-pointer bg-black text-white
                hover:bg-white hover:text-black">ExpressJS
              </div>
              <div
                className="rounded p-2 text-sm cursor-pointer bg-black text-white
                hover:bg-white hover:text-black">Framer Motion
              </div>
              <div
                className="rounded p-2 text-sm cursor-pointer bg-black text-white
                hover:bg-white hover:text-black">Webflow
              </div>
              <div
                className="rounded p-2 text-sm cursor-pointer bg-black text-white
                hover:bg-white hover:text-black">Power Apps
              </div>
              <div
                className="rounded p-2 text-sm cursor-pointer bg-black text-white
                hover:bg-white hover:text-black">Microsoft Dynamics 365
              </div>
              <div
                className="rounded p-2 text-sm cursor-pointer bg-black text-white
                hover:bg-white hover:text-black">CMS
              </div>
            </motion.div>
            {/* SKILLS SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            ref={experienceRef}
            className="flex flex-col gap-12 justify-center pb-48">
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl">EXPERIENCE</motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className="">
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">

                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold 
                  rounded-b-lg rounded-s-lg">Web Developer</div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-2 text-sm italic">My current employment</div>
                  {/* JOB DATE  */}
                  <div className="p-3 text-red-400 text-sm font-semibold">Nov 2023 - Feb 2024</div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Free Periods Canada</div>
                </div>

                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 
                    ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* RIGHT  */}
                <div className="w-1/3"></div>

              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">

                {/* LEFT */}
                <div className="w-1/3"></div>

                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 
                    ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* RIGHT  */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold 
                  rounded-b-lg rounded-s-lg">Application Development Associate</div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-2 text-sm italic">My current employment</div>
                  {/* JOB DATE  */}
                  <div className="p-3 text-red-400 text-sm font-semibold">2021-2022</div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Accenture Inc.</div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 xl:1/2 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
