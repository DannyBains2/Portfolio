import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import Portfolio from './components/portfolio';
import ContactMe from './components/ContactMe';
import About from "./components/About"
import AddIn from './components/AddIn';




function App() {
  return (
    <div className='text-gray-600 body-font font-Montserrat'>
      <div className=''>
      <Navbar></Navbar>
      </div>
        <div className=" bg-gradient-to-b from-[#2b1055] to-[#7597de]  w-full h-screen border-b-2 border-[#64ffda]">
        <Home/>
        </div>
         <div className='bg-[#0a192f] w-full h-screen flex items-center justify-center  overflow-y-scroll md:overflow-hidden  border-b-2 border-[#64ffda]'>
          <Portfolio/>
         </div>
          <div className=' bg-[#0a192f] w-full h-screen border-b-2 border-[#64ffda]'>
            <About></About>
          </div>
          <div className=' bg-[#0a192f] w-full h-screen '>
            <ContactMe></ContactMe>
          </div>

    </div>
  );
}

export default App;


