import Intro from "./Intro";

function Home () {

    return(
        <div className=" h-full w-full border-8 border-[#8403fc] ">
            <div className=" h-1/2 w-full border-8 border-[#03fcf8] flex">
                <div className="border-8 border-[#8cfc03] text-white h-full w-full">
                <Intro/>
                </div>
                 
            </div>
            <div className=" h-1/2 w-full border-8 border-[#03fcf8] flex">

            </div>
        </div>
    )
}

export default Home;