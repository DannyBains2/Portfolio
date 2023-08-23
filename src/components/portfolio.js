import {useState, useRef, useEffect} from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import Cards from "./Cards";
import Model from "./Model";
import circles from "../images/circles.png"
import portfolioPic from "../images/portfolioPic.png"
import lumen from "../images/lumen.png"
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"


function Portfolio({}) {
    const [selected, setSelected] = useState(null)
    const ref=useRef(null)
    const isInView = useInView(ref, { once: true});
    const mainControls = useAnimation()
    
    

        const items = [
            {id: "1", title: "Circles", subtitle: "The Circles website was designed to solve the social isolation issue, through the NHS social prescription programme", img: circles , message: "Social isolation is becoming more prevalent in today's society and can be caused by a number of reasons. Poverty, grief, illness or disability to name a few. For these reasons, individuals can struggle to integrate into their local communities. This is where social prescribing steps in. Social prescribing, also known as community referral, allows health professionals to refer individuals to link workers who will then connect them to support in their community. Our solution was to design a web-based, centralised platform that allows users to quickly access reliable information on their local communities and to facilitate integration into those social circles, allowing them to easily join and keep track of their local events. The Ideation of this application has been designed and heavily influenced by our research and communication with the Social Prescribing Team at Citzens Advice.", tech : ["Javascript", "Next.js", "Tailwind Css", "PostgreSQL", "Prisma", "Next/Auth", "RestApi", "Netlify"], url : "https://circlesapp.netlify.app/", hub : "https://github.com/DannyBains2/circles_app"}, 
            {id: "2", title: "Portfolio Website", subtitle: "This website was made using Reactjs and styled using Tailwind CSS. Framer Motion was used for transition animations", img: portfolioPic,  message: "I used power of Figma and Excalidraw to meticulously plan and design my portfolio site, making low-fi and hi-fi wireframes to plan the look and structure of my site. I then used React to build the site itself while using framer motion npm package to add transition to text. I used Emailjs to make a functional contact me page allowing me to receive messages to my email inbox. I chose to use tailwindCss for this project as it allows me to easily make my site responsive and inline styling allows errors to be easily spotted.", tech : ["Javascript", "React.js", "Tailwind Css", "Framer Motion", "EmailJs", "Netlify"], url : "", hub : "https://github.com/DannyBains2/Portfolio"},
            {id: "3", title: "Lumen", subtitle: "My ever first project, designed to allow bootcamp students to access and submit relavent and searchable resources", img:lumen ,  message: "This was my very first project I worked on during my coding bootcamp, the purpose of this application was to allow fellow bootcampers to share and view resource links for whatever the topic of the bootcamp was that week. This was a 2 week project which included planning, we used disney ideation to manage our expectation for a short project. We made low-fi and hi-fi wireframes to have a solid design idea before beginning to code. This is a full stack application, the frontend was built using react and the backend uses express sever and a postgreSQL database to serve the links to the frontend.", tech : ["Javascript", "React.js", "CSS", "PostgreSQL", "RestAPI", "Render"], url : "https://lumen-frontend.onrender.com/", hub : "https://github.com/DannyBains2/lumen-backend-techtonic"},

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
                <img onClick={() => window.open(`${items.hub}`)} className=" hover:bg-[#14b8a6]" src= {github}/>
                <img onClick={() => window.open(`https://www.linkedin.com/in/dhanveer-bains-1b7805256/`)} className=" hover:bg-[#14b8a6]" src= {linkedin}/>
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
    <motion.div className="w-full h-full flex items-center justify-center ">
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