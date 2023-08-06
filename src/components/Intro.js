import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function Intro () {
    const ref=useRef(null)
    const isInView = useInView(ref, { once: true});

    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect (() => {
        if (isInView) {
            mainControls.start("visable")
            slideControls.start("visable")
        }
    },[isInView]);

    return(
        <div ref={ref} className=" justify-end">
            <motion.div 
            className=" text-7xl"
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
            className=" text-4xl"
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
       

        </div>
    )
}

export default Intro;