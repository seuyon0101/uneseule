import { Link } from "react-router-dom";
import styles from "./teachers.module.css";
import data from "/Users/seungyonglee/Desktop/Projects/Git/Unseule/website/src/db/data.json";

export default function Teachers(props){
    
    const teachersList = data.teachers.map(x => {
        return(
        <Link to = "/" className={styles.innerwrapper} >
            <div >
                <div className={`${styles.container} ${styles.leftContainer}`}>
                    <div className={styles.memberImg} style ={
                        {
                        backgroundImage: `url(${x.imgSrc})`
                        }
                        }>
                </div>
                </div>
                <div className={`${styles.container} ${styles.rightContainer}`}>
                    <h3>{x.uName}</h3>
                    <span>{x.skill}</span>
                    <p className={styles.numHighlight}>{x.classNum}<span>수업 진행</span></p>
                    <p className={styles.umHighlight}>{x.regisClass}<span>신청 가능 수업</span></p>
                </div>
            </div>
        </Link>
        );
    });

    return(
        <section>
            <h1>{props.title}</h1>
            <div className={styles.wrapper}>
             {teachersList}
            </div>
        </section>

    );

}