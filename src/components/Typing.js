import Typewriter from "typewriter-effect";


function Typing () {

<Typewriter
  options={{
   
    delay: Number,
 
  }}
/>
 

    return (
        <div className=" md:p-5 max-w-5xl text-2xl font-bold">
    <Typewriter
    onInit={(typewriter) => {
      typewriter.typeString('Im a software developer working mainly with Javascript and JS frameworks such as ReactJs and NextJs on the frontend and Nodejs on the backend, using SQL to communicate with the database... Please Scroll Down...')
        
        .pauseFor(2500)
        
        
        .start();
    }} />
        </div>
    )
}

export default Typing;