import styles from './about.module.css';

function AboutFirstSection(props){

    return(
        <section className={`${styles.aboutSection} ${styles.aboutSectionFirst}`}>
            <h1>{props.title}</h1>
            <h1>{props.titleEng}</h1>
            <div className ={styles.textWrap}>
                <p className={styles.korText}>{props.korText}</p>
                <p>—</p>
                <p className={styles.engText}>{props.engText}</p>
            </div>
        </section>
    );
}

export default AboutFirstSection;