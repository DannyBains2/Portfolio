import { useRef, useEffect, useState} from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export default function Cards({item, selected, setSelected}){
    const ref=useRef(null)
    const isInView = useInView(ref, { once: true});
    const mainControls = useAnimation()

   
    
    

    useEffect (() => {
        if (isInView) {
            mainControls.start("visable")
               } 
           },[isInView]);

    return(
         
            <motion.div layout ref={ref}  className=" w-5/6 shadow-xl shadow-white/10 rounded-xl hover:bg-[#64ffda]/10 overflow-hidden my-2"
            whileHover={{
                scale: 1.05,
                transition: {
                    duration: 0.2
                }
            }}
            whileTap={{
                scale: 0.95,
            }}
            onClick={() => {
                setSelected(item)
            }}
           
        >
            <motion.div  layoutId={`card-${item.id}`} 
            transition={{duration:0}}
            className="w-full h-full  ">
                <motion.img src={item.img} className="w-full h-1/2"/>
                <motion.div className=" p-4 m-2 rounded-xl text-white font-bold text-lg md:text-2xl ">
                {item.title}
            </motion.div>
            <motion.div className=" text-[#64ffda] p-4 m-2 rounded-xl ">
                {item.subtitle}
            </motion.div>
                <motion.div className="flex justify-between p-2">
                <button className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:text-[#0a192f] hover:bg-[#64ffda]  border-2" onClick={(e) => {e.stopPropagation() ;window.open(`${item.hub}`)} }>Git Hub</button>
                <button className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:text-[#0a192f] hover:bg-[#64ffda]  border-2" onClick={(e) => {e.stopPropagation() ;window.open(`${item.url}`)} }>Visit Site</button>
                </motion.div>
            </motion.div>



            

          
            

    </motion.div>

    

    )
}

