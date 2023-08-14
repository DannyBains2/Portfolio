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
            <div className=" w-full h-1/12 md:h-1/4 ">
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
                    <div className=" w-full md:w-4/5 h-full flex flex-col  justify-center text-[#64ffda] lg:mx-10 md:text-xl overflow-scroll md:overflow-auto lg:overflow-visible">
                        
                        <motion.div className="para-1 w-full h-full   "
                        ref={ref}
                        variants={{
                            hidden: {opacity: 0, y: 75},
                            visable: {opacity: 1, y: 0},
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{duration:0.5, delay: 0.4}}>
                            <h2 className="text-white text-lg md:text-2xl px-2 py-1 bg-[#64ffda]/10 rounded-2xl">Title1:</h2>
                            <div className="px-4 py-1 text-sm md:text-lg">
                        this is what it does for this that and thing this is what it does for this that and the other, this wht it wi van reall do when put to thing this is what it does for this that and the other, this wht it wi van reall do when put to thing this is what it does for this that and the other, this wht it wi van reall do when put to thing this is what it does for this that and the other, this wht it wi van reall do when put to thing this is what it does for this that and the other, this wht it wi van reall do when put to 
                            </div>
                        </motion.div>
                        
                        <motion.div className="para-1 w-full h-full   "
                        ref={ref}
                        variants={{
                            hidden: {opacity: 0, y: 75},
                            visable: {opacity: 1, y: 0},
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{duration:0.5, delay: 0.4}}>
                            <h2 className="text-white text-lg md:text-2xl px-2 py-1 bg-[#64ffda]/10 rounded-2xl">Title2:</h2>
                            <div className="px-4 py-1 text-sm md:text-lg">
                        this is what it does for this that and thing this is what it does for this that and the other, this wht it wi van reall do when put to thing this is what it does for this that and the other, this wht it wi van reall do when put to thing this is what it does for this that and the other, this wht it wi van reall do when put to thing this is what it does for this that and the other, this wht it wi van reall do when put to thing this is what it does for this that and the other, this wht it wi van reall do when put to  
                            </div>
                        </motion.div>
                    </div>
                    <div className="w-full md:w-1/2 h-full flex md:flex-col ">
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
                            <h2 className="text-white text-lg md:text-2xl px-2 py-1 bg-[#64ffda]/10 rounded-2xl">Development Skills:</h2>
                            </div>
                            <div className=" w-full h-4/5  px-2 py-2 m-1 ">
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
                                <h2 className="text-white text-lg md:text-2xl px-2 py-1 bg-[#64ffda]/10 rounded-2xl">Planning Skills:</h2>
                            </div>
                            <div className=" w-full h-4/5 px-2 py-2 m-1">
                              <SoftTag/>
                            </div>
                        </motion.div>

                    </div>
                </div>

        </div>
    )
}