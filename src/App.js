import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import Portfolio from './components/portfolio';
import ContactMe from './components/ContactMe';




function App() {
  return (
    <div className=''>
      <div>
      <Navbar></Navbar>
      </div>
        <div className=" bg-gradient-to-b from-[#2b1055] to-[#7597de]  w-full h-screen">
        <Home/>
        </div>
         <div className='bg-[#233554] w-full h-screen flex items-center justify-center  overflow-y-scroll md:overflow-none'>
          <Portfolio/>
         </div>
          <div className=' bg-[#e5e1e7] w-full h-screen'>
            <ContactMe></ContactMe>
          </div>

    </div>
  );
}

export default App;


