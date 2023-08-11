import Button from "./Button";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { useState } from "react";

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
              <>
                Home
              </>
            </li>
            <li className=" p-2 md:ml-8 text-xl md:my-0 my-7 text-gray-800 hover:text-[#64ffda] hover:bg-black duration-500 cursor-pointer rounded-md ">
              <>
                Portfolio
              </>
            </li>
            <li className=" p-2 md:ml-8 text-xl md:my-0 my-7 text-gray-800 hover:text-[#64ffda] hover:bg-black duration-500 cursor-pointer rounded-md ">
              <>
              About
              </>
            </li>
            <li className=" p-2 md:ml-8 text-xl md:my-0 my-7 text-gray-800 hover:text-[#64ffda] hover:bg-black duration-500 cursor-pointer rounded-md">
              <>
              Contact
              </>
            </li >
            <div className=" flex min-w-70 ">
              <div>
              <Button className="">GitHub</Button>
             </div>
             <div className="pl-2 md:pl-0 lg:pl-0 ">
              <Button>LinkedIn</Button>
              </div>
            </div>
            
          </ul>
      </div>
    </div>
  );
}

export default Navbar;