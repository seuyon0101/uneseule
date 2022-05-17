// import {Link} from "react-router-dom";
import styles from "./Main.module.css";

function MainSection(props){
    return(
        <section className={styles.mainFirst}>
            <h2>{props.text1}</h2>
            <h1>{props.text2}</h1>
            <button className={styles.mainButton}>{props.b_text}</button> 
            <img src={props.imgsrc} className={styles.mainBannerImg} alt="banner-img"/>
        </section>       
    );
}

export default MainSection;