import {useState, useRef, useEffect} from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import Cards from "./Cards";


function Portfolio() {
   
    const ref=useRef(null)
    const isInView = useInView(ref, { once: true});
    const mainControls = useAnimation()

        const items = [
            {id: "1", title: "circles", subtitle: "this is what it does"},
            {id: "2", title: "circles", subtitle: "this is what it does"},
            {id: "3", title: "circles", subtitle: "this is what it does"},
            {id: "4", title: "circles", subtitle: "keep is what it does"}
        ]

        useEffect (() => {
             if (isInView) {
                 mainControls.start("visable")
                    } 
                },[isInView]);

    return(
        <motion.div ref={ref} className="  w-5/6 h-5/6 border border-blue-400 rounded-xl grid grid-cols-1 md:grid-cols-2 place-items-center "
        variants={{
            hidden: {opacity: 0, x: -275},
            visable: {opacity: 1, x: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration:1.75, delay: 0.75}}
        >
            
{items.map(item => (
    <motion.div className="w-full h-full flex items-center justify-center">
            <Cards item={item}/>
            </motion.div>))}
            
            {/* <Cards item={items}/>
            <Cards item={items}/>
            <Cards item={items}/> */}
            
    
        </motion.div>
        
    )
}
export default Portfolio;