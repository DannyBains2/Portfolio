
import Intro from "./Intro";
import Typing from "./Typing";

function Home () {

    return(
        <div className=" h-full w-full  ">
            <div className=" h-1/2 w-full  flex">
                <div className=" text-white h-full w-full flex items-center pl-4">
                <Intro/>
                
                </div>
                <div className=" text-white h-full w-1/3 ">
                
                </div>
            </div>
            <div className=" h-1/2 w-full  flex text-white ">
                <Typing/>
            </div>
            
        </div>
    )
}

export default Home;