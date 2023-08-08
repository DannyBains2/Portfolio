import { useRef, useEffect, useState} from "react"
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion"

export default function Cards({item}){
    const ref=useRef(null)
    const isInView = useInView(ref, { once: true});
    const mainControls = useAnimation()
    

    useEffect (() => {
        if (isInView) {
            mainControls.start("visable")
               } 
           },[isInView]);

    return(
         
            <motion.div ref={ref}  className=" w-5/6 h-5/6 border border-blue-400 rounded-xl  "
        variants={{
                hidden: {opacity: 0, y: 75},
                visable: {opacity: 1, y: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration:1.25, delay: 1.75}}
        >
            <motion.h2 className="bg-white">{item.title}</motion.h2>
            <motion.p className="bg-white">{item.subtitle}</motion.p>

    </motion.div>

    

    )
}