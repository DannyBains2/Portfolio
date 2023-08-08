
import Intro from "./Intro";
import Typing from "./Typing";

function Home () {

    return(
        <div className=" h-full w-full  ">
            <div className=" h-1/2 w-full  flex">
                <div className=" text-white border-red-600 border font-bold h-full w-full flex items-center pl-4">
                <Intro/>
                
                </div>
                <div className=" text-white h-full w-1/3  border-purple-600 border">
                
                </div>
            </div>
            <div className=" h-1/2 w-2/3  flex text-white  border-green-600 border">
                <Typing/>
            </div>
            
        </div>
    )
}

export default Home;