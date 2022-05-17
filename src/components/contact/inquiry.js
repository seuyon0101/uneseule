import styles from './contact.module.css'

function Inquiryinfo( ){
    return(
        <section className={styles.contactSection}>
        <hr />
        <div>
            <p>
            Class Inquiry ✨<br/>
            수업 관련하여 자세한 문의는 카톡채널로 연락 바랍니다. <br/>
            For class inquiries, please contact us via kakao channel. <br/>
            💬  https://pf.kakao.com/_JhxaLK <br/>
            (우측 하단 ‘톡상담’ 클릭) <br/>
            </p>
        </div>
        <div>
            <p>
            Business Inquiry ✨<br/>
            윤슬은 가치가 맞는 브랜드와 협업을 기다립니다. <br/>
            협업 및 도매 관련하여 궁금하신 내용은 사업차 정보와 함께 이메일을 통해 문의 주세요.<br/>
            For collaboration or wholesale inquiries, please email us. <br/>
            ✉️  lake@uneseule.kr <br/>
            </p>
        </div>
    </section>
    );
}

export default Inquiryinfo;