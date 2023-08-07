import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import Portfolio from './components/portfolio';
import ContactMe from './components/ContactMe';
import Parallax from './components/Parallax';



function App() {
  return (
    <div className=''>
      <div>
      <Navbar></Navbar>
      </div>
        <div className=" bg-black  w-full h-screen">
        <Home/>
        </div>
         <div className=' '>
          <Parallax/>
         </div>
          <div className=' bg-black w-full h-screen'>
            <ContactMe></ContactMe>
          </div>

    </div>
  );
}

export default App;


