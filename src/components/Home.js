import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Intro from "./Intro";
import Typing from "./Typing";

function Home () {

    const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", 
  "200%"]);
  const starsY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const moonY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

    return(
        <div  ref={ref}
        className="w-full h-screen overflow-hidden relative grid place-items-center">

<motion.div
        className="absolute inset-0 z-10 bg-[url('/src/images/moon_mountain/stars.png')]"
        style={{
        //   backgroundImage: `url(/full.jpg)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: starsY,
        }}
      />

<motion.div
        className=" mix-blend-screen absolute inset-0 z-10 bg-[url('/src/images/moon_mountain/moon.png')]"
        style={{
        //   backgroundImage: `url(/full.jpg)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: moonY,
        }}
      />

      <motion.div
        className="absolute inset-0 z-20 bg-[url('/src/images/moon_mountain/back.png')]"
        style={{
        //   backgroundImage: `url(/full.jpg)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <motion.div
        className="absolute inset-0 z-30 bg-[url('/src/images/moon_mountain/front.png')]"
        style={{
        //   backgroundImage: `url(/bottom.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
   

            <div className=" h-1/2 w-full  flex">
                <div className=" text-white font-bold h-full w-full flex items-center pl-4 z-40 mt-8">
                <Intro/>
                
                </div>
                <div className=" text-white h-full w-1/3  ">
                
                </div>
            </div>
            <div className=" h-1/2 w-2/3  flex text-white   z-40 items-start">
                <Typing/>
            </div>
            
        </div>
    )
}

export default Home;