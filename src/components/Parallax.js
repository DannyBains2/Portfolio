import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function Parallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const starsY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const moonY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >

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
    </div>
  );
}