import { useRef, useEffect, useState} from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export default function Cards({item, selected, setSelected}){
    const ref=useRef(null)
    const isInView = useInView(ref, { once: true});
    const mainControls = useAnimation()

    const [id, setId] = useState(null)
    
    

    useEffect (() => {
        if (isInView) {
            mainControls.start("visable")
               } 
           },[isInView]);

    return(
         
            <motion.div layout ref={ref}  className=" w-5/6 md:h-auto bg-[#CA3CFF] shadow-xl shadow-white/10 rounded-xl overflow-hidden my-3"
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
                <motion.img src={item.img} className="w-full h-1/2"
            
                
                />
                <motion.div className="bg-white/50 p-4 m-2 rounded-xl text-white font-bold text-lg md:text-2xl ">
                {item.title}
            </motion.div>
            <motion.div className="bg-white/50 p-4 m-2 rounded-xl ">
                {item.subtitle}
            </motion.div>
                <motion.div className="flex justify-between p-2">
                <motion.button className="bg-[#03fcf8] text-Black hover:text-[#03fcf8]  font-bold py-2 px-6  rounded-2xl hover:bg-black 500 border-2 border-gray-700">Git Hub</motion.button>
                <motion.button className="bg-[#03fcf8] text-Black hover:text-[#03fcf8]  font-bold py-2 px-6 rounded-2xl  hover:bg-black 500 border-2 border-gray-700">Visit Site</motion.button>
                </motion.div>
            </motion.div>

            

          
            

    </motion.div>

    

    )
}

// onClick={ () => setExpanded(!expanded)}
// animate={{
//     position: expanded ? "absolute": "static",
//     // top: expanded ? "50%": "",
//     // left: expanded ? "50%": "",
//     width: expanded ? "40%": "",
//     height: expanded ? "30%": "",
//         }}
//     transition={{ duration: 0, spring: 3}}