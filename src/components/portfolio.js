import {useState, useRef, useEffect} from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import Cards from "./Cards";


function Portfolio() {

    const ref=useRef(null)
    const isInView = useInView(ref, { once: true});
    const mainControls = useAnimation()

  

        useEffect (() => {
             if (isInView) {
                 mainControls.start("visable")
                    } 
                },[isInView]);

    return(
        <motion.div ref={ref} className="  w-5/6 h-5/6 border border-blue-400 rounded-xl"
        variants={{
            hidden: {opacity: 0, x: -275},
            visable: {opacity: 1, x: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration:1.75, delay: 0.75}}
        >
            <Cards/>
    
        </motion.div>
    )
}
export default Portfolio;