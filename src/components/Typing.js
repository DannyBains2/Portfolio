import Typewriter from "typewriter-effect";


function Typing () {

<Typewriter
  options={{
   
    delay: Number,
 
  }}
/>
 

    return (
        <div className=" md:p-11 max-w-5xl">
    <Typewriter
    onInit={(typewriter) => {
      typewriter.typeString('Thanks for visiting mt portfolio. My name is Danny Bains and ever since I can remember ive had a love for all things tech, as a 12 year old I was building my own pcs, later experimenting with the Raspberry Pi on various personnal projects, to recently building my own crypto currency mining machine. So about a year ago I decided on a career change to an industry i would love to be a part of and joined an intensive full-stack bootcamp, where I fell in love with coding.')
        
        .pauseFor(2500)
        .deleteAll()
        
        .start();
    }} />
        </div>
    )
}

export default Typing;