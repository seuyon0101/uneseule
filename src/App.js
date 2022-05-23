import './App.css';
import Footer from "./components/footer/footer";
import {Outlet} from "react-router-dom";
import Chatimg from "./components/misc/Chatimg";
import Navbar from "./components/nav/Navbar";

function App(){
  return (
   <div className='App'>
        <Chatimg/>
        <Navbar />
     <div className='innerApp'>
        <Outlet/>
     </div>
        <Footer />
    </div>
  );
}

export default App;