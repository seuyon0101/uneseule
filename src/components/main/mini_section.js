import styles from './Main.module.css';

function MiniSection(props){
  if(props.direction === "r"){
    return(
      <section className={styles.miniSection}>
        <div className={styles.wrapperMini}>
          <h1>{props.text1}</h1>
          <div className={styles.mini_imgbox}>
            <ChrImg color={props.color}/>
          </div>
        </div>
        <h2>{props.text2}</h2>
      </section>
    );
  } else{
    return(
        <section  className={styles.miniSection}>
          <div className={styles.wrapperMini}>
            <div className={styles.mini_imgbox}>
              <ChrImg color={props.color}/>
            </div>
            <h1>{props.text1}</h1>
          </div>
          <h2>{props.text2}</h2>
        </section>

    );
  }
}

function ChrImg(props){
  return(
    <img src={props.color.src} alt={props.color.alt}/>
  );
}

export default MiniSection ;