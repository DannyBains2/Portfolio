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
        <div className=" bg-black w-full h-screen">
        <Home/>
        </div>
         <div className=' bg-orange-500 w full h-screen'>
          <Portfolio></Portfolio>
         </div>
          <div className=' bg-lime-700 w full h-screen'>
            <ContactMe></ContactMe>
          </div>

    </div>
  );
}

export default App;
