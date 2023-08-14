import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Button from "./Button";

function Intro () {
    const ref=useRef(null)
    const isInView = useInView(ref, { once: true});

    const mainControls = useAnimation()
    // const slideControls = useAnimation()
    // const contactControls = useAnimation()


    useEffect (() => {
        if (isInView) {
            mainControls.start("visable")
            // slideControls.start("visable")
            // contactControls.start("visable")
        } 
    },[isInView]);

    return(
        <div ref={ref} className="flex flex-col pl-4 ">
            <motion.div 
            className=" text-5xl md:text-8xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white"
            variants={{
                hidden: {opacity: 0, y: 75},
                visable: {opacity: 1, y: 0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration:1.25, delay: 0.25}}
            >
            Hi, Im Danny
            </motion.div>
            <motion.div
            className="text-3xl  md:text-6xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white"
            variants={{
                hidden: {opacity: 0, y: 75},
                visable: {opacity: 1, y: 0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration:1.25, delay: 0.75}}
            >
            Junior Software Developer
            </motion.div>
            <motion.div
             className=" pt-3 text-black w-full  "
             variants={{
                 hidden: {opacity: 0, x: -275},
                 visable: {opacity: 1, x: 0},
             }}
             initial="hidden"
             animate={mainControls}
             transition={{duration:1.25, delay: 1.25}}
            >
            <button className= " ml-0 bg-[#0a192f] text-[#64ffda] hover:text-[#03fcf8] rounded-2xl font-bold py-2 px-6 hover:bg-black 500 border-2 border-[#64ffda] max-w-[150px]">Contact Me</button>
            </motion.div>
        </div>
    )
}

export default Intro;