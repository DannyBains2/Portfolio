import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"


export default function AddIn() {
    const ref=useRef(null)
    const isInView = useInView(ref, { once: true});

    const mainControls = useAnimation()
    const slideControls = useAnimation()
    useEffect (() => {
        if (isInView) {
            mainControls.start("visable")
            slideControls.start("visable")
            // contactControls.start("visable")
        } 
    },[isInView]);


    return(
        <div className="w-full h-full  ">
        <div className=" w-full h-1/12 md:h-1/4 bg-[#0a192f]">
            <motion.div ref={ref} className="w-full h-full  flex "
                  variants={{
                    hidden: {opacity: 0, y: 75},
                    visable: {opacity: 1, y: 0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration:0.5, delay: 0.25}}>
                    <div className="  ">
                    <h2 className="text-white text-3xl md:text-8xl underline m-5">
                        Projects
                    </h2>
                    </div>
                    <div className="  md:w-2/3 flex justify-end items-center">
                    <div className="h-1/4 flex border-2 border-red-500">
                <img className=" w-16 h-16" src= {github}/>
                <img className=" w-16 h-16" src= {linkedin}/>
                <img className=" w-16 h-16" src= {twitter}/>
                    </div>
                    </div>
                </motion.div>
        </div>
        </div>
    )
}