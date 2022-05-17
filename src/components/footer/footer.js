import {Link} from 'react-router-dom';
import styles from './footer.module.css';
import instagram from "./instagram.svg";
import youtube from "./youtube.svg";
import kakaotalk from "./kakaotalk.svg";


function Footer(){

    const busRegNum = "business registration no. 601-09-09919";
    const address = "876 Hwanghak-dong, Jung-gu, Seoul";
    const founder = "Hyejin Lee";
    const contactEmail = "lake@uneseule.kr";
    const copyright = "Copyright ⓒ 2022 윤슬ㅣune seule All rights reserved.";

    return(
    <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.footerBoxLeft}>
                <div className={styles.footerLinkText}>
                    <Link to="/userguide">{"이용약간"}</Link> {" "}
                    <Link to="/confidentials">{"개인정보처리방침"}</Link> {" "}
                </div>
                <img src="img/logo/emblem.png" alt = "footer-img" />
                <p className={styles.footerTextbox}>사업자등록번호 :  {busRegNum}</p>
                <p className={styles.footerTextbox}>주소 : {address}</p>
                <p className={styles.footerTextbox}>대표 : {founder} | email : {contactEmail}</p>
                <p className={styles.footerTextbox}>{copyright}</p>
            </div>
            <div className={styles.footerBoxRight}>
                <div className={styles.snsWrapper}>
                <SocialIcon sns = {socialIcon.instagram}/>
                <SocialIcon sns = {socialIcon.youtube}/>
                <SocialIcon sns = {socialIcon.kakaotalk}/>
                </div>
            </div>
        </div>
    </footer>
    );
}

function SocialIcon(props){
    return(
        <a href={props.sns.url}><img className = {styles.snsIcons} src= {props.sns.src} alt = {props.sns.alt}/></a>
    );
}

const socialIcon = {
    instagram : {
        src : instagram,
        alt : "instagram",
        url : "http://instagram.com/uneseule.kr",
    },
    youtube : {
        src : youtube,
        alt : "youtube",
        url :"https://www.youtube.com/channel/UCaLffp5r0RbXBxWhA37g8rw",
    },
    kakaotalk : {
        src : kakaotalk,
        alt : "kakaotalk",
        url :"https://pf.kakao.com/_JhxaLK" ,
    },
}

export default Footer ;