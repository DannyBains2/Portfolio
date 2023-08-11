import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Tag from "./Tag";
import SoftTag from "./SoftTag";

export default function About () {
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
        <div className="w-full h-screen ">
            <div className=" w-full h-1/4">
                <motion.div ref={ref} className="w-full h-full  flex "
                  variants={{
                    hidden: {opacity: 0, y: 75},
                    visable: {opacity: 1, y: 0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration:0.5, delay: 0.25}}>
                    <h2 className="text-white text-3xl md:text-8xl underline m-5">
                        About.
                    </h2>
                    
                </motion.div>
              
                </div>

                <div className="w-full h-3/4   flex flex-col md:flex-row">
                    <div className=" w-4/5 h-full p-1 flex flex-col items-center justify-center">
                        <motion.div className="para-1 w-2/3 h-5/6   "
                        ref={ref}
                        variants={{
                            hidden: {opacity: 0, y: 75},
                            visable: {opacity: 1, y: 0},
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{duration:0.5, delay: 0.4}}>
                        
                        </motion.div>
                    </div>
                    <div className="w-1/2 h-full flex md:flex-col">
                        <motion.div className="w-full h-1/2 "
                        ref={ref}
                        variants={{
                            hidden: {opacity: 0, y: 75},
                            visable: {opacity: 1, y: 0},
                        }}
                        initial="hidden"
                        animate={slideControls}
                        transition={{duration:0.5, delay: 0.55}}>
                        
                            <div className="header w-full h-1/5 " >
                            <h2 className="text-white text-2xl px-2 py-1 bg-[#64ffda]/10 rounded-2xl">Development Skills:</h2>
                            </div>
                            <div className=" w-full h-4/5  px-2 py-2 ">
                                <Tag></Tag>
                                
                            </div>
                        </motion.div>
                        <motion.div className="w-full h-1/2  "
                        ref={ref}
                        variants={{
                            hidden: {opacity: 0, y: 75},
                            visable: {opacity: 1, y: 0},
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{duration:0.5, delay: 0.7}}
                        >
                            <div className="header w-full h-1/5  ">
                                <h2 className="text-white text-2xl px-2 py-1 bg-[#64ffda]/10 rounded-2xl">Planning Skills:</h2>
                            </div>
                            <div className=" w-full h-4/5 px-2 py-2 ">
                              <SoftTag/>
                            </div>
                        </motion.div>

                    </div>
                </div>

        </div>
    )
}