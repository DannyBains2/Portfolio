import {useState, useRef, useEffect} from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import Cards from "./Cards";
import Model from "./Model";
import circles from "../images/circles.png"
import portfolioPic from "../images/portfolioPic.png"
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"


function Portfolio({}) {
    const [selected, setSelected] = useState(null)
    const ref=useRef(null)
    const isInView = useInView(ref, { once: true});
    const mainControls = useAnimation()
    
    

        const items = [
            {id: "1", title: "Circles", subtitle: "The Circles website was designed to solve the social isolation issue, through the NHS social prescription programme", img: circles , message: "Social isolation is becoming more prevalent in today's society and can be caused by a number of reasons. Poverty, grief, illness or disability to name a few. For these reasons, individuals can struggle to integrate into their local communities. This is where social prescribing steps in. Social prescribing, also known as community referral, allows health professionals to refer individuals to link workers who will then connect them to support in their community. Our solution was to design a web-based, centralised platform that allows users to quickly access reliable information on their local communities and to facilitate integration into those social circles, allowing them to easily join and keep track of their local events. The Ideation of this application has been designed and heavily influenced by our research and communication with the Social Prescribing Team at Citzens Advice.", tech : ["Javascript", "Next.js", "Tailwind Css", "PostgreSQL", "Prisma", "Next/Auth", "Netlify"], url : "https://circlesapp.netlify.app/", hub : "https://github.com/DannyBains2/circles_app"}, 
            {id: "2", title: "NewsApp", subtitle: "NewsApp was designed to allow the user to clearly view the political bias of any particular story", img:circles ,  message: "Social isolation is becoming more prevalent in today's society and can be caused by a number of reasons. Poverty, grief, illness or disability to name a few. For these reasons, individuals can struggle to integrate into their local communities. This is where social prescribing steps in. Social prescribing, also known as community referral, allows health professionals to refer individuals to link workers who will then connect them to support in their community. Our solution was to design a web-based, centralised platform that allows users to quickly access reliable information on their local communities and to facilitate integration into those social circles, allowing them to easily join and keep track of their local events. The Ideation of this application has been designed and heavily influenced by our research and communication with the Social Prescribing Team at Citzens Advice.", tech : ["Javascript", "Next.js", "Tailwind Css", "PostgreSQL", "Prisma", "Next/Auth", "Netlify"], url : "https://circlesapp.netlify.app/", hub : "https://github.com/DannyBains2/circles_app"},
            {id: "3", title: "Portfolio Website", subtitle: "This website was made using Reactjs and styled using Tailwind CSS. Framer Motion was used for transition animations", img: portfolioPic,  message: " Every pixel has a purpose. We've harnessed the power of Figma and Excalidraw to meticulously plan and design our site. From wireframes to intricate diagrams, our vision came to life, ensuring an intuitive and engaging user journey. Our commitment to excellence extends to collaboration. Git and GitHub allow us to work seamlessly as a team, ensuring every line of code is a masterpiece. Version control and collaboration have never been smoother.  With Tailwind CSS, we've created a visual masterpiece that adapts effortlessly to any screen size. Our styling is as dynamic as your experience, ensuring a cohesive and captivating design. Framer Motion elevates our site with elegant transition animations. Every interaction is a symphony of motion, guiding you through an experience that's as engaging as it is beautiful.", tech : ["Javascript", "React.js", "Tailwind Css", "Netlify"], url : "", hub : "https://github.com/DannyBains2/Portfolio"},
            
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