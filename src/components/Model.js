import { useState } from "react"
import { motion } from "framer-motion"
import Button from "./Button";

export default function Model({selected, setSelected}) {
    if (!selected){
        return <></>;
    }

console.log(selected)
    return(
        <div 
        onClick={() => setSelected(null)}
        className="fixed inset-0 bg-black/70 z-50 cursor-pointer overflow-y-scroll text-white ">
            <div className=" w-11/12  h-5/6 m-10  cursor-default border-amber-300 border-4 grid grid-cols-2  bg-[#CA3CFF]  rounded-xl">
                <motion.div className=" w-full h-1/2 border border-x-lime-300 "
                layoutId={`card-${selected.id}`} transition={{duration:0.2}}
                >
                    <img className="rounded-xl" src={selected.img}  />
                </motion.div>
                <div  className=" w-full grid place-items-center overflow-hidden">
                    <div className="w-10/12 bg-white/50 p-6 rounded-2xl">
                    {selected.subtitle}
                    </div>
                </div>
                <div className="  ">
                    <div className=" bg-white/50 p-6 rounded-2xl">
                    {selected.title}
                    </div>
                </div>
                <div className="grid place-content-center w-full ">
                    
                    <motion.button className="bg-[#03fcf8] text-Black hover:text-[#03fcf8]  font-bold py-2 px-6 rounded-2xl md:ml-8 hover:bg-black 500 border-2 border-gray-700 text-black m-1">Visit Site
                    </motion.button>
                    <motion.button 
                    className="bg-[#03fcf8] text-Black hover:text-[#03fcf8]  font-bold py-2 px-6 rounded-2xl md:ml-8 hover:bg-black 500 border-2 border-gray-700 text-black m-1"
                    >Git Hub</motion.button>
                  
                </div>

            </div>

        </div>
    )
}