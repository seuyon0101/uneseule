import {Link} from 'react-router-dom';

function Footer(){

    const busRegNum = "business registration no. 601-09-09919";
    const address = "876 Hwanghak-dong, Jung-gu, Seoul";
    const founder = "Hyejin Lee";
    const contactEmail = "lake@uneseule.kr";
    const copyright = "Copyright ⓒ 2022 윤슬ㅣune seule All rights reserved.";

    return(
    <>
        <div className="footer-box-left">
            <div className='footer-link-text'>
                <Link to="/userguide">{"이용약간"}</Link> {" "}
                <Link to="/confidentials">{"개인정보처리방침"}</Link> {" "}
            </div>
            <img className='footer-logo' src="img/logo/PNG/1000px/윤슬_아이콘.png" alt = "footer-img" />
            <p className="footer-textbox">사업자등록번호 :  {busRegNum}</p>
            <p className="footer-textbox">주소 : {address}</p>
            <p className="footer-textbox">대표 : {founder} | email : {contactEmail}</p>
            <p className="footer-textbox">{copyright}</p>
        </div>
        <div className="footer-box-right">

        </div>
    </>
    );
}

export default Footer;