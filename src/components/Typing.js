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
      typewriter.typeString('Skills: JavaScript, React.Js, Next.Js, Node.Js, PostgreSQL, Express Js, Css, Tailwind Css and HTML.  Please Scroll Down...')
        
        .pauseFor(2500)
        
        
        .start();
    }} />
        </div>
    )
}

export default Typing;