import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className=" bg-indigo-200 w-full h-screen">
      
        <Home/>
      
   
    </div>
    </>
  );
}

export default App;
