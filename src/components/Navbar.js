import Button from "./Button";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className=" shadow-md w-full fixed top-0 left-0">
      <div className=" md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className=" font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
        logo
        </div>
        <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          {open? <HiXMark/> :<HiBars3/>}
        {/* <HiBars3 name={open ? "close":"menu"}/> */}

        </div>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20 ": "top-[-490px]"} `}>
            <li className="md:ml-8 text-xl md:my-0 my-7 text-gray-800 hover:text-gray-400 hover:bg-slate-600 duration-500 cursor-pointer rounded-md pl-3">
              <>
                Home
              </>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7 text-gray-800 hover:text-gray-400  hover:bg-slate-600 duration-500 cursor-pointer rounded-md pl-3">
              <>
                Portfolio
              </>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7 text-gray-800 hover:text-gray-400 hover:bg-slate-600 duration-500 cursor-pointer rounded-md pl-3">
              <>
              About me
              </>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7 text-gray-800 hover:text-gray-400   hover:bg-slate-600 duration-500 cursor-pointer rounded-md pl-3">
              <>
              Contact Me
              </>
            </li >
            <div className="space-x-2">
            
              <Button >Git Hub</Button>
             
              <Button>LinkedIn</Button>
            </div>
            
          </ul>
      </div>
    </div>
  );
}

export default Navbar;