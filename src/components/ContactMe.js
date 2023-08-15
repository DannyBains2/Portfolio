
import emailjs from '@emailjs/browser';
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"

function ContactMe () {
    const form = useRef();
    const ref=useRef(null)
    const isInView = useInView(ref, { once: true});

    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    const [input3, setInput3] = useState("")

    const mainControls = useAnimation()
    const slideControls = useAnimation()
    useEffect (() => {
        if (isInView) {
            mainControls.start("visable")
            slideControls.start("visable")
            // contactControls.start("visable")
        } 
    },[isInView]);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, 'template_tum6n2o', form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

function handleClick (){
    setTimeout(() => {
        setInput1("")
        setInput2("")
        setInput3("")
        alert("Thank you. Your message has been sent.")
      }, "1000")
   
}

    return(
            
     <div id = "contact" className="w-full h-full  ">
        <div className=" w-full h-1/12 md:h-1/4">
            <motion.div ref={ref} className="w-full h-full flex "
                  variants={{
                    hidden: {opacity: 0, y: 75},
                    visable: {opacity: 1, y: 0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration:0.5, delay: 0.25}}>
                    <div className="">
                    <h2 className="text-white text-3xl md:text-8xl underline m-5">
                        Contact
                    </h2>
                    </div>
                    <div className=" md:w-2/3 flex justify-end items-center">
                    <div className=" flex  bg-[#64ffda] border-2 border-green-400 rounded-xl overflow-hidden">
                <img onClick={() => window.open(`https://github.com/DannyBains2`)} className=" hover:bg-[#14b8a6]" src= {github}/>
                <img onClick={() => window.open(`https://www.linkedin.com/in/dhanveer-bains-1b7805256/`)} className=" hover:bg-[#14b8a6]" src= {linkedin}/>
                <img className=" hover:bg-[#14b8a6]" src= {twitter}/>
                    </div>
                    </div>
                </motion.div>
        </div>
        <div className="w-full h-3/5 ">
        <section class="bg-[#0a192f] dark:bg-gray-900">
  <motion.div ref={ref} class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">Got a question? Please get in touch.</p>
      <motion.form  ref={form} onSubmit={sendEmail} action="#" class="space-y-8"
       variants={{
        hidden: {opacity: 0, y: 75},
        visable: {opacity: 1, y: 0},
    }}
    initial="hidden"
    animate={mainControls}
    transition={{duration:0.5, delay: 0.25}}>
      
          
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-white">Name</label>
              <input type="text" name="user_name" id="subject" class="block p-3 w-full text-sm text-white bg-[#64ffda]/10 rounded-lg border border-[#64ffda] shadow-sm focus:ring-primary-500 focus:border-primary-500" value={input1} onChange={(e) => setInput1(e.target.value)} placeholder="Your name" required></input>
          </div>

          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
              <input type="email" name="user_email" id="email" class="shadow-sm bg-[#64ffda]/10  border border-[#64ffda] text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " value={input2} onChange={(e) => setInput2(e.target.value)} placeholder="your@email.com" required></input>
          </div>

          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-white ">Your message</label>
              <textarea name="message" id="message" rows="6" class="block p-2.5 w-full text-sm text-white bg-[#64ffda]/10 rounded-lg shadow-sm border border-[#64ffda] focus:ring-primary-500 focus:border-primary-500" value={input3} onChange={(e) => setInput3(e.target.value)} placeholder="Leave your message..."></textarea>
          </div>

          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:text-[#0a192f] hover:bg-[#64ffda]  border-2" onClick = {handleClick}>Send message</button>
      </motion.form>
  </motion.div>
</section>
        </div>
        <div className="w-full h-1/8">

        </div>

    </div>
    )
}

export default ContactMe