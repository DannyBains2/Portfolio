import { useState } from "react"
import { motion } from "framer-motion"

export default function Model({selected, setSelected}) {
    if (!selected){
        return <></>;
    }

console.log(selected.tech)
    return(
        <div 
        onClick={() => setSelected(null)}
        className="fixed inset-0 bg-black/70 z-50 cursor-pointer overflow-y-scroll text-white ">
            <div className=" w-11/12  h-5/6 m-10  cursor-default border-[#64ffda] border-4 grid grid-cols-2  bg-[#0a192f]  rounded-xl">
                <motion.div className=" w-full h-full pl-3 pt-3 "
                layoutId={`card-${selected.id}`} 
                >
                    <img className="rounded-xl" src={selected.img}  />
                </motion.div>
                <div  className=" w-full grid place-items-center overflow-hidden">
                    <div className="w-10/12  p-6 rounded-2xl text-[#64ffda]">
                    {selected.message}
                    </div>
                </div>
                <div className=" ">
                    <div className="w-full h-full p-6 rounded-2xl text-4xl font-bold ">
                        <div>
                    {selected.title}
                        </div>
                        <div className="text-xl font-normal pl-1">
                            Tech Stack:
                        </div>
                        {selected.tech.map(stack => (
                    <div className=" bg-[#64ffda]/10 m-auto text-[#64ffda] text-sm md:sm lg:text-base  px-3 py-1 rounded-xl inline-block mx-1 mb-1">
                        {stack}
                    </div>))}

                    </div>
                </div>
                <div className="grid grid-flow-col place-content-center w-full ">
                    
                    <motion.button className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:text-[#0a192f] hover:bg-[#64ffda]  border-2" onClick={() => window.open(`${selected.url}`)}>Visit Site
                    </motion.button>
                    <motion.button className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:text-[#0a192f] hover:bg-[#64ffda]  border-2" onClick={() => window.open(`${selected.hub}`)}>Git Hub
                    </motion.button>
                   </div>

            </div>

        </div>
    )
}