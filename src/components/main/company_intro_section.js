import styles from "./Main.module.css";

function IntroSection(props){
    const textlist = props.name.textlist.map((x)=>
        <li>{x}</li>
    );
    if(props.direction === "r"){
        return(
            <section className={styles.unseuleSection} id = {styles[props.name.cssClass]} >
                <div className={styles.mainSectionWrap}>
                <div className= {styles.mainSectionBox}>
                  <p>{props.name.text1}</p>
                  <ul>
                    {textlist}
                  </ul>
                  <p>{props.name.text2}</p>
                </div>
                <div className={styles.mainSectionBoxR}>
                  <h1 >{props.name.title_kor}</h1>
                  <h1 >{props.name.title_eng}</h1>
                  <img src={props.name.imgUrl} alt = {props.name.alt}/>
              </div>
                </div>
          </section>
        );
    } else {
        return(
          <section className={styles.unseuleSection} id = {styles[props.name.cssClass]}>
            <div className={styles.mainSectionWrap}>
            <div className={styles.mainSectionBox}>
              <h1 >{props.name.title_kor}</h1>
              <h1 >{props.name.title_eng}</h1>
              <img src={props.name.imgUrl} alt = {props.name.alt}/>
              </div>
              <div className={styles.mainSectionBox}>
              <p>{props.name.text1}</p>
              <ul>
                  {textlist}
              </ul>
              <p>{props.name.text2}</p>
          </div>
            </div>
      </section>
        );
    }
    

}


export default IntroSection;