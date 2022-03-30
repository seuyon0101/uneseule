
function About(){
    return(
        <>
            <section className="about-section about-section-first">
                <h1 className="title-about">윤슬 소개 </h1>
                <h1 className="title-about">about uneseule </h1>
                <p className="kor-text-about">‘윤슬’은 아이들을 위한 교육 브랜드입니다<br/> 윤슬은 아이들의 눈높이에 맞춰 언어와 예술을 자유롭게 배울 수 있는 교육 방식을 지향합니다.<br/> 따라서 저희가 추구하는 가장 중요한 것은 내면의 중심입니다. 아이들에게 단 하나뿐인 사랑을 전하기 위해 시작된 윤슬은,<br/> 그 무엇보다 저희 안에 남아 있는 가장 순수한 마음으로 성실하게 임하려고 노력하고 있습니다.<br/> 아이들을 위한 것이 무엇인지 끊임없이 질문하며 더 낮아지고 낮아져서 아이들이 이해받도록 대면하는 어른이 되고 싶습니다, 많이 응원해 주세요 ✨</p>
                <p>—</p>
                <p className="eng-text-about">‘une seule’ (pronounced as ‘yun seul’) is an educational brand for kids.<br/>We aim for an educational method that allows students to freely learn language and art<br/>by approaching each child from their individual eye level.<br/>It came from our philosophy that a good adult does not give a speech of love while looking down at the child from above,<br/>but rather by kneeling to meet the child’s eye level.<br/>We truly seek to embrace what has to be given or discovered for the kids✨</p>
            </section>
            <section className="about-section">
            <hr/>
                <h1 className="title-about">햇님들에게 보내는 편지</h1>
                <p className="kor-text-left-about">햇님들에게,</p>
                <div className="wrapping-container">
                    <div className="text-box-container">   
                        <p className="kor-text-left-about">‘윤슬’은 아이들을 위한 교육 브랜드입니다.윤슬은 아이들의 눈높이로 다가가 언어와 예술을 자유롭게 배울 수 있는 교육 방식을 지향합니다. 다만 저희가 추구하는 가장 중요한 것은 내면의 중심입니다. 교육은 수단일 뿐, 아이들에게 단 하나뿐인 사랑을 전하기 위해 시작된 윤슬은, 그 무엇보다 저희 안에 남아 있는 가장 순수한 마음으로 성실하게 임하려고 노력하고 있습니다. 아이들을 위한 것이 무엇인지 끊임없이 질문하며 더 낮아지고 낮아져서 아이들이 이해받도록 대면하는 어른이 되고 싶습니다, 많이 응원해 주세요 </p>
                        <p className="kor-text-left-about">불어로 ‘une seule’은 ‘단 하나’라는 의미를 담고 있습니다. 단 하나의 빛, 단 하나뿐인 사랑을 발견해 주는 저희가 되고자 une seule 로 이름 짓게 되었습니다. 맑은 물을 유지하여 투명한 아이들과 눈높이를 맞추는 것이 저희의 지키고 싶은 다짐입니다. 그들을 위한 것이 무엇인지 발견하고 수많은 윤슬을 품을 수 있는 넓은 물이 될 때까지 성실히 임하겠습니다.</p>
                        <p className="kor-text-left-about">하루에 윤슬이 나타나는 시간은 짧은 만큼 정말 소중합니다. 아이들이 커가는 과정 속에 스스로 빛을 발할 수 있게 도와주는 뜻깊은 일에 함께 동참하여 주세요.</p>
                        <p className="kor-text-left-about">빛이 스며들어 아이들이 해와 달이 되는 그날까지,</p>
                        <p className="kor-text-left-about">윤슬™의 호수와 돌멩이가.</p>
                    </div>
                    <figure className="img-box">
                        <img className="img-box-img" src ="img/illustration/moonlight.jpg" alt='moonlight'/>
                        <figcaption>그림 | illustration : @une.pebble</figcaption>
                    </figure>
                </div>
            </section>
            <section className="about-section">
            <hr/>
                <h1 className="title-about">로고</h1>
                <h1 className="title-about">ci</h1>
            <div className ="wrapping-box-container">
                <div className="text-box-container">
                    <p className="kor-text-left-about">ㅇ = 해ㅣsun </p>
                    <p className="kor-text-left-about">ㅅ = 산ㅣmountain</p>
                    <p className="kor-text-left-about">ㅠ = 빛ㅣlight</p>
                    <p className="kor-text-left-about">ㅡ = 수평선ㅣhorizon</p>
                    <p className="kor-text-left-about">ㄴ, ㄹ = 물결ㅣwave</p>
                </div>
                <figure className= "img-box">
                    <img className = "img-box-img" src = "img/logo/PNG/1000px/윤슬로고.png" alt="logo" />
                </figure>
            </div>
            <h1 className="title-about">엡블럼</h1>
            <h1 className="title-about">emblem</h1>
            <div className="wrapping-box-container">
                <div className="text-box-container">
                <p className="kor-text-left-about">구름ㅣcloud</p>
                </div>
                <figure className= "img-box">
                    <img className = "img-box-img" src = "img/logo/PNG/1000px/윤슬_아이콘.png" alt="emblem" />
                </figure>
            </div>
            </section>

        </>
    );
}

export default About ;