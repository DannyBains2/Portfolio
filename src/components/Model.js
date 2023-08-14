import { useState } from "react"
import { motion } from "framer-motion"

export default function Model({selected, setSelected}) {
    if (!selected){
        return <></>;
    }

console.log(selected)
    return(
        <div 
        onClick={() => setSelected(null)}
        className="fixed inset-0 bg-black/70 z-50 cursor-pointer overflow-y-scroll text-white ">
            <div className=" w-11/12  h-5/6 m-10  cursor-default border-[#64ffda] border-4 grid grid-cols-2  bg-[#0a192f]  rounded-xl">
                <motion.div className=" w-full h-1/2 pl-3 pt-3 "
                layoutId={`card-${selected.id}`} 
                >
                    <img className="rounded-xl" src={selected.img}  />
                </motion.div>
                <div  className=" w-full grid place-items-center overflow-hidden">
                    <div className="w-10/12  p-6 rounded-2xl text-[#64ffda]">
                    {selected.message}
                    </div>
                </div>
                <div className=" p-2 ">
                    <div className="  p-6 rounded-2xl text-4xl font-bold">
                    {selected.title}
                    </div>
                </div>
                <div className="grid grid-flow-col place-content-center w-full ">
                    
                    <motion.button className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:text-[#0a192f] hover:bg-[#64ffda]  border-2">Visit Site
                    </motion.button>
                    <motion.button className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:text-[#0a192f] hover:bg-[#64ffda]  border-2">Git Hub
                    </motion.button>
                   </div>

            </div>

        </div>
    )
}