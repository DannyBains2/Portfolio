import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Tag from "./Tag";
import SoftTag from "./SoftTag";
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"

export default function About () {
    const ref=useRef(null)
    const isInView = useInView(ref, { once: false});

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
        <div id = "about" className="w-full h-screen ">
            <div className=" w-full h-1/12 md:h-1/12  ">
                <motion.div ref={ref} className="w-full h-full flex "
                  variants={{
                    hidden: {opacity: 0, y: 75},
                    visable: {opacity: 1, y: 0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration:0.5, delay: 0.25}}>
                    <div className=" md:h  ">
                    <h2 className="text-white text-3xl md:text-5xl lg:text-8xl underline m-5">
                        About.
                    </h2>
                    </div>
                    <div className="  md:ml-16 md:w-2/3 flex justify-end items-center">
                    <div className=" flex  bg-[#64ffda] border-2 border-green-400 rounded-xl overflow-hidden">
                <img onClick={() => window.open(`https://github.com/DannyBains2`)} className=" hover:bg-[#14b8a6]" src= {github}/>
                <img onClick={() => window.open(`https://www.linkedin.com/in/dhanveer-bains-1b7805256/`)} className=" hover:bg-[#14b8a6] " src= {linkedin}/>
                <img className=" hover:bg-[#14b8a6] " src= {twitter}/>
                    </div>
                    </div>
                </motion.div>
              
                </div>

                <div className="w-full h-3/4 flex flex-col lg:flex-row overflow-scroll">
                    <div className="  w-full md:w-4/5 flex flex-col  justify-center text-[#64ffda] lg:mx-10 md:text-xl  ">
                        
                        <motion.div className="para-1 w-full h-full   "
                        ref={ref}
                        variants={{
                            hidden: {opacity: 0, y: 75},
                            visable: {opacity: 1, y: 0},
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{duration:0.5, delay: 0.4}}>
                            <h2 className="text-white text-lg md:text-2xl px-2 py-1 bg-[#64ffda]/10 rounded-2xl">About me:</h2>
                            <div className="px-4 py-1 text-sm md:text-lg">
                            Ever since I can remember ive had a love for all things tech, as a 12 year old I was building my own pcs, later experimenting with the Raspberry Pi on various personnal projects, to recently building my own crypto currency mining machines. So about a year ago I decided on a career change to an industry I would love to be a part of and joined an intensive full-stack coding bootcamp, where I fell in love with all things code.
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
                            <h2 className="text-white text-lg md:text-2xl px-2 py-1 bg-[#64ffda]/10 rounded-2xl">About my Development:</h2>
                            <div className="px-4 py-1 text-sm md:text-lg h-full">
                            I leverage tools like Figma to breathe life into my ideas.  My emphasis on UX/UI design ensures that every interaction is carefully crafted to enhance user satisfaction and drive engagement. For efficient project management, I'm a firm believer in the power of agile methodologies. Kanban boards keep me organized, allowing me to adapt to evolving requirements. JavaScript is my go-to language, and I harness the capabilities of React.js and Next.js to create responsive, performant, and highly interactive front-end experiences. I incorporate comprehensive testing using Jest for unit testing, Supertest for API testing, and Cypress for end-to-end testing.
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