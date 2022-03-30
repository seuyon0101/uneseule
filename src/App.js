
import './App.css';
import logo from './logo.svg';
import Footer from './components/footer.js';
import {Outlet, Link} from "react-router-dom";

function App(){
  return (
   <div>
      <Link to = '/main'>
          <img src = "img/illustration/chtimg.png" alt="chat" className="chatimg"/>
      </Link>
      <nav>
        <Link to = '/main'><img src={logo} className="App-logo" alt="logo"/></Link> {" "}
        <ul className='navul'>
          <li><Link to ='/about'>about</Link></li> 
          <li><Link to ='/class'>class</Link></li>  
          <li>< Link to ='/contact'>contact</Link></li> 
        </ul>
      </nav>
      <Outlet />
      <footer>
        <div className='container'>
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;