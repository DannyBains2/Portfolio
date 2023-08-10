import {useState, useRef, useEffect} from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import Cards from "./Cards";
import Model from "./Model";


function Portfolio({}) {
    const [selected, setSelected] = useState(null)
    const ref=useRef(null)
    const isInView = useInView(ref, { once: true});
    const mainControls = useAnimation()

        const items = [
            {id: "1", title: "Circles", subtitle: "this is what it does for this that and the other, this wht it wi van reall do when put to thing this is what it does for this that and the other, this wht it wi van reall do when put to thing this is what it does for this that and the other, this wht it wi van reall do when put to thing this is what it does for this that and the other, this wht it wi van reall do when put to thing", img: "https://as2.ftcdn.net/v2/jpg/03/13/49/07/1000_F_313490735_YCp2jT4wiMTryffcBH59Ysl06j2OVEat.jpg"},
            {id: "2", title: "Circles1", subtitle: "this is what it does for this that and the other, this wht it wi van reall do when put to thing this is what it does for this that and the other, this wht it wi van reall do when put to thing this is what it does for this that and the other, this wht it wi van reall do when put to thing this is what it does for this that and the other, this wht it wi van reall do when put to thing", img: "https://as2.ftcdn.net/v2/jpg/03/13/49/07/1000_F_313490735_YCp2jT4wiMTryffcBH59Ysl06j2OVEat.jpg"},
            {id: "3", title: "Circles2", subtitle: "this is what it does for this that and the other, this wht it wi van reall do when put to thing this is what it does for this that and the other, this wht it wi van reall do when put to thing this is what it does for this that and the other, this wht it wi van reall do when put to thing this is what it does for this that and the other, this wht it wi van reall do when put to thing", img: "https://as2.ftcdn.net/v2/jpg/03/13/49/07/1000_F_313490735_YCp2jT4wiMTryffcBH59Ysl06j2OVEat.jpg"},
            
        ]

        useEffect (() => {
             if (isInView) {
                 mainControls.start("visable")
                    } 
                },[isInView]);

    return(
        <motion.div layout ref={ref} className="  w-5/6 h-5/6 border border-[#FF8484] rounded-xl grid grid-cols-1 md:grid-cols-3 place-items-center "
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
        
    )
}
export default Portfolio;