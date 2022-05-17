import {Link} from 'react-router-dom';
import logo from './/logo.svg'; 
import styles from './navbar.module.css';
import searchimg from './searchimg.svg';

function Navbar(){
    return(
        <nav className={styles.nav}>
            <Link to = '/main'><img src={logo} className={styles.AppLogo} alt="logo"/></Link>
            <div className={styles.wrapper}>
                <ul className={`${styles.navUl}`}>
                    <li><Link to ='/about'>about</Link></li> 
                    <li><Link to ='/class'>class</Link></li>  
                    <li>< Link to ='/contact'>contact</Link></li> 
                </ul>
            <ul className={`${styles.navUl}`}>
                <li><Link to ='/'>로그인</Link></li> 
                <li><SearchBox /></li> 
            </ul>
            </div>
        </nav>
    );
}

function SearchBox(){
    return(
        <div className={styles.searchBox}>
          <input className={styles.textInput}/>
            <button className={styles.searchBtn}>
                <span><img src = {searchimg} alt = "search"/></span>
            </button>
        </div>
    );
}

export default Navbar;