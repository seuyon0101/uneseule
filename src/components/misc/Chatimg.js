import {Link} from "react-router-dom";
import chatimg from "./chatimg.svg";

function Chatimg(){
    return(
        <Link to = '/main'>
        <img style ={{
              height: '55px',
              position:'fixed',
              bottom: '5%',
              right: '5%',
              }} src = {chatimg} alt="chat" />
      </Link>
    )
}

export default Chatimg;