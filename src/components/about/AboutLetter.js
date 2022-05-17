import styles from './about.module.css';

function AboutLetter(props){

    return(
        <section className={styles.aboutSection}>
        <hr/>
            <h1>햇님들에게 보내는 편지</h1>
            <p>햇님들에게,</p>
            <div className={styles.wrappingContainer}>
                <div className={styles.boxContainer}>   
                    <p>{props.text1}</p>
                    <p>{props.text2}</p>
                    <p>{props.text3}</p>
                    <p>빛이 스며들어 아이들이 해와 달이 되는 그날까지,</p>
                    <p>윤슬™의 호수와 돌멩이가.</p>
                </div>
                <figure className={`${styles.boxContainer} ${styles.boxFigure}`}>
                    <img className="img-box-img" src ="img/illustration/moonlight.jpg" alt='moonlight'/>
                    <figcaption>{props.figcaption}그림 | illustration : @une.pebble</figcaption>
                </figure>
            </div>
        </section>
    );
}

export default AboutLetter;