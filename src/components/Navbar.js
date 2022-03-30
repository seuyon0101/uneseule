import dummy from "./app.json";
// import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <ul>
            {dummy.navmenu.map((menu)=><li key = {menu.menu} className = "nav-bar" ><a href={menu.url}>{menu.menu}</a></li>)}
        </ul>
    );
}

export default Navbar;