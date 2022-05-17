import styles from './about.module.css';
import emblem from './emblem.svg';
import logo from './logo.svg';

function AboutCI(props){
    return(
        <section className={styles.aboutSection}>
        <hr/>
            <h1>로고</h1>
            <h1>ci</h1>
        <div className ={styles.wrappingContainer}>
            <div className={styles.boxContainer}>
                <p>{props.text1}</p>
                <p>{props.text2}</p>
                <p>{props.text3}</p>
                <p>{props.text4}</p>
                <p>{props.text5}</p>
            </div>
            <figure className = {styles.boxFigure}>
                <img src = {logo} alt="logo" />
            </figure>
        </div>
        <h1>엡블럼</h1>
        <h1>emblem</h1>
        <div className={styles.wrappingContainer}>
            <div className={styles.boxContainer}>
            <p>{props.text6}</p>
            </div>
            <figure className = {styles.boxFigure}>
                <img src = {emblem} alt="emblem" />
            </figure>
        </div>
        </section>
    );
}

export default AboutCI;