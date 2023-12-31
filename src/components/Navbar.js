import Button from "./Button";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { useState } from "react";
import { Link } from "react-scroll"

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className=" shadow-md w-full  top-0 left-0">
      <div className=" md:flex items-center justify-between bg-[#ffffff] py-4 md:px-10 px-7">
        <div className=" font-bold text-5xl cursor-pointer flex items-center  text-gray-800">
        db
        </div>
        <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden ">
          {open? <HiXMark/> :<HiBars3/>}
        {/* <HiBars3 name={open ? "close":"menu"}/> */}

        </div>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#ffffff] md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20 ": "top-[-490px]"} `}>
            
            <li className=" p-2 md:ml-8 text-xl md:my-0 my-7 text-gray-800 hover:text-[#64ffda] hover:bg-black duration-500 cursor-pointer rounded-md ">
              
            <Link  to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
            <li className=" p-2 md:ml-8 text-xl md:my-0 my-7 text-gray-800 hover:text-[#64ffda] hover:bg-black duration-500 cursor-pointer rounded-md ">
            <Link  to="about" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li className=" p-2 md:ml-8 text-xl md:my-0 my-7 text-gray-800 hover:text-[#64ffda] hover:bg-black duration-500 cursor-pointer rounded-md">
            <Link  to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li >
            <div className=" flex min-w-70 ">
              <div>
              <button className="bg-[#0a192f] text-[#64ffda] hover:text-[#03fcf8] rounded-lg font-bold py-3 px-5 text-sm sm:w-fit  md:ml-8 hover:bg-black 500 border-2 border-gray-700 max-w-[150px]" onClick={() => window.open(`https://github.com/DannyBains2`)}>GitHub</button>
             </div>
             <div className="pl-2 md:pl-0 lg:pl-0 ">
              <button className="bg-[#0a192f] text-[#64ffda] hover:text-[#03fcf8] rounded-lg font-bold py-3 px-5 text-sm sm:w-fit  md:ml-8 hover:bg-black 500 border-2 border-gray-700 max-w-[150px]" onClick={() => window.open(`https://www.linkedin.com/in/dhanveer-bains-1b7805256/`)}>LinkedIn</button>
              </div>
            </div>
            
          </ul>
      </div>
    </div>
  );
}

export default Navbar;