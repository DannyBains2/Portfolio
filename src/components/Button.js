

function Button (props) {

    return(
    <button className= "bg-[#0a192f] text-[#64ffda] hover:text-[#03fcf8] rounded-lg font-bold py-3 px-5 text-sm sm:w-fit  md:ml-8 hover:bg-black 500 border-2 border-gray-700 max-w-[150px]">
        {props.children}
    </button>
    )
}
export default Button;


// delete