import { useRef, useEffect} from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export default function Cards(){
    const ref=useRef(null)
    const isInView = useInView(ref, { once: true});
    const mainControls = useAnimation()

    useEffect (() => {
        if (isInView) {
            mainControls.start("visable")
               } 
           },[isInView]);

    return(
         
            <motion.div ref={ref} className="  w-1/2 h-1/2 border border-blue-400 rounded-xl"
        variants={{
            hidden: {opacity: 0, x: -275},
            visable: {opacity: 1, x: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration:1.75, delay: 0.75}}
        >
</motion.div>

    )
}