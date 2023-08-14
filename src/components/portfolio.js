import {useState, useRef, useEffect} from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import Cards from "./Cards";
import Model from "./Model";
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"


function Portfolio({}) {
    const [selected, setSelected] = useState(null)
    const ref=useRef(null)
    const isInView = useInView(ref, { once: true});
    const mainControls = useAnimation()
    

        const items = [
            {id: "1", title: "Circles", subtitle: "this is what it does for this that and the other, this wht it wi van reall do when put to thing this is what it does for this that and the other, this wht it wi van reall do ", img: "https://as2.ftcdn.net/v2/jpg/03/13/49/07/1000_F_313490735_YCp2jT4wiMTryffcBH59Ysl06j2OVEat.jpg"},
            {id: "2", title: "Circles1", subtitle: "this is what it does for this that and the other, this wht it wi van reall do when put to thing this is what it does for this that and the other, this wht it wi van reall do ", img: "https://as2.ftcdn.net/v2/jpg/03/13/49/07/1000_F_313490735_YCp2jT4wiMTryffcBH59Ysl06j2OVEat.jpg"},
            {id: "3", title: "Circles2", subtitle: "this is what it does for this that and the other, this wht it wi van reall do when put to thing this is what it does for this that and the other, this wht it wi van reall do ", img: "https://as2.ftcdn.net/v2/jpg/03/13/49/07/1000_F_313490735_YCp2jT4wiMTryffcBH59Ysl06j2OVEat.jpg"},
            
        ]

        useEffect (() => {
             if (isInView) {
                 mainControls.start("visable")
                    } 
                },[isInView]);

    return(
<div className="w-full h-screen overflow-auto ">
<div className=" w-full h-1/12 md:h-1/4 ">
                <motion.div ref={ref} className="w-full h-full flex "
                  variants={{
                    hidden: {opacity: 0, y: 75},
                    visable: {opacity: 1, y: 0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration:0.5, delay: 0.25}}>
                    <div className="  ">
                    <h2 className="text-white text-3xl md:text-8xl underline m-5">
                        Portfolio
                    </h2>
                    </div>
                    <div className=" md:w-2/3 flex justify-end items-center">
                    <div className=" flex h-1/3 ">
                <img src= {github}/>
                <img src= {linkedin}/>
                <img src= {twitter}/>
                    </div>
                    </div>
                </motion.div>
              
                </div>
        <div className="flex justify-center">
        <motion.div layout ref={ref} className=" w-11/12 h-4/6 rounded-xl grid grid-cols-1 lg:grid-cols-3 place-items-center "
        variants={{
            hidden: {opacity: 0, x: -275},
            visable: {opacity: 1, x: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration:1.25, delay: 0.75}}
        >
            
{items.map(item => (
    <motion.div className="w-full h-full flex items-center justify-center">
            <Cards setSelected={setSelected} key={item.id} item={item}/>
            </motion.div>))}
            
            {/* <Cards item={items}/>
            <Cards item={items}/>
            <Cards item={items}/> */}
            
            <Model setSelected={setSelected} selected={selected}/>
        </motion.div>
        </div>
        </div>
    )
}
export default Portfolio;