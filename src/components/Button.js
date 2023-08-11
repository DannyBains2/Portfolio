

function Button (props) {

    return(
    <button className= "bg-[#03fcf8] text-Black hover:text-[#03fcf8]  font-bold py-2 px-6 rounded md:ml-8 hover:bg-black 500 border-2 border-gray-700 max-w-[150px]">
        {props.children}
    </button>
    )
}
export default Button;