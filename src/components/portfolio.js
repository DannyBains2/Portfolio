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
            {id: "1", title: "Circles", subtitle: "The Circles website was designed to solve the social isolation issue, through the NHS social prescription programme", img: "https://as2.ftcdn.net/v2/jpg/03/13/49/07/1000_F_313490735_YCp2jT4wiMTryffcBH59Ysl06j2OVEat.jpg", message: "Social isolation is becoming more prevalent in today's society and can be caused by a number of reasons. Poverty, grief, illness or disability to name a few. For these reasons, individuals can struggle to integrate into their local communities. This is where social prescribing steps in. Social prescribing, also known as community referral, allows health professionals to refer individuals to link workers who will then connect them to support in their community. Our solution was to design a web-based, centralised platform that allows users to quickly access reliable information on their local communities and to facilitate integration into those social circles, allowing them to easily join and keep track of their local events. The Ideation of this application has been designed and heavily influenced by our research and communication with the Social Prescribing Team at Citzens Advice."},
            {id: "2", title: "NewsApp", subtitle: "this is what it does for this that and the other, this wht it wi van reall do when put to thing this is what it does for this that and the other, this wht it wi van reall do ", img: "https://as2.ftcdn.net/v2/jpg/03/13/49/07/1000_F_313490735_YCp2jT4wiMTryffcBH59Ysl06j2OVEat.jpg"},
            {id: "3", title: "Portfolio Website", subtitle: "this is what it does for this that and the other, this wht it wi van reall do when put to thing this is what it does for this that and the other, this wht it wi van reall do ", img: "https://as2.ftcdn.net/v2/jpg/03/13/49/07/1000_F_313490735_YCp2jT4wiMTryffcBH59Ysl06j2OVEat.jpg"},
            
        ]

        useEffect (() => {
             if (isInView) {
                 mainControls.start("visable")
                    } 
                },[isInView]);

    return(
<div id = "portfolio" className="w-full h-screen overflow-auto ">
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
                    <div className=" md:w-2/3 flex justify-end items-center ">
                    <div className=" flex  bg-[#64ffda] border-2 border-green-400 rounded-xl overflow-hidden ">
                <img className=" hover:bg-[#14b8a6]" src= {github}/>
                <img className=" hover:bg-[#14b8a6]" src= {linkedin}/>
                <img className=" hover:bg-[#14b8a6]" src= {twitter}/>
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