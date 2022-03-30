
function Contact (){
    return(
        <>
        <section className="contact-section">
            <h1> 문의하기 | contact </h1>
            <form>
                <input className="text-input" id ="input-name" type="text" placeholder="이름" /><br/><br/>
                <input className="text-input" id ="input-email" type="text"placeholder="이메일"/><br/><br/>
                <input className="text-input" id ="input-문의제목" type="text" placeholder="문의제목"/><br/><br/>
                <input className="text-input" id ="input-content" type="text"placeholder="내용을 입력하세요" /><br/><br/>
                <div className="submit-button">
                    <input type = "submit" value = "문의하기"/>
                    <button>취소</button>
                </div>
            </form>
        </section>
        <section className="contact-section">
            <hr />
            <div className="text-box">
                <p>
                Class Inquiry ✨<br/>
                수업 관련하여 자세한 문의는 카톡채널로 연락 바랍니다. <br/>
                For class inquiries, please contact us via kakao channel. <br/>
                💬  https://pf.kakao.com/_JhxaLK <br/>
                (우측 하단 ‘톡상담’ 클릭) <br/>
                </p>
            </div>
            <div className="text-box">
                <p>
                Business Inquiry ✨<br/>
                윤슬은 가치가 맞는 브랜드와 협업을 기다립니다. <br/>
                협업 및 도매 관련하여 궁금하신 내용은 사업차 정보와 함께 이메일을 통해 문의 주세요.<br/>
                For collaboration or wholesale inquiries, please email us. <br/>
                ✉️  lake@uneseule.kr <br/>
                </p>
            </div>
        </section>
        <figure className="contact-img-section">
        <img id="light-img" src="img/illustration/lights_img.png"  alt="lights"/>
        </figure>
        </>
    );
}

export default Contact ;