import { Link } from "react-router-dom";
import dummy from "./main.json";
import styles from "./Main.module.css";

function ClassIndex(props) {

const classindexcontainer = dummy.classindex.map((x) =>
    <div className={styles.miniBox}>
        <div className={styles.miniContainer}>
        <a href ={x.url}><img src= {x.imgsrc} alt="img1"/></a>
        </div>
        <p> {x.text1}</p>
        <p> {x.text2}</p>
        <p className = {styles.priceText}> <span>{x.span1}</span>{x.text3}<span className="class-index-span">{x.span2}</span></p>
        <Link to ="/class" className={styles.indexBtn}>수업신청</Link>
    </div>
);
    return(
        <section className={styles.indexSection}>
            <h1>{props.text}</h1>
            <subsection className= {styles.subWrapper}>
                <div className={styles.miniWrapper}>
                    {classindexcontainer}
                </div>
            </subsection>
        </section>
    );

}

export default ClassIndex ; 