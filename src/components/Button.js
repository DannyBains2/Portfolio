

function Button (props) {

    return(
    <button className= "bg-[#0a192f] text-[#64ffda] hover:text-[#03fcf8] rounded-2xl font-bold py-2 px-6  md:ml-8 hover:bg-black 500 border-2 border-gray-700 max-w-[150px]">
        {props.children}
    </button>
    )
}
export default Button;