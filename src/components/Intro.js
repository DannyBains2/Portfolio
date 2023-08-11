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
            className=" text-5xl md:text-8xl"
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
            className="text-3xl  md:text-6xl"
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
             className=" pt-3 text-black flex justify-start "
             variants={{
                 hidden: {opacity: 0, x: -275},
                 visable: {opacity: 1, x: 0},
             }}
             initial="hidden"
             animate={mainControls}
             transition={{duration:1.25, delay: 1.25}}
            >
            <Button className=" ">Contact Me</Button>
            </motion.div>
        </div>
    )
}

export default Intro;