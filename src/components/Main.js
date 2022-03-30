import ClassIndex from './ClassIndex.js';

function Main(){
 return(
    <main>
    <section className='main-section main-first'>
      <h2>반짝 빛나는 아이들을 위한 uneseule</h2>
      <h1>1:1 클래스</h1>
      <button className='main-button'> 신청하기</button>
      <img src="img/illustration/main_banner_img.png" className="main-banner-img" alt="banner-img"/>
    </section>
    <section className='main-section class-index'>
        <ClassIndex />
    </section>
    <section className='main-section uneseule-intro-mini'>
      <div className='wrapping-container-mini-title'>
        <img src="img/illustration/chr_yellow.png" alt="햇님이"/>
        <h1 className="mini-box-title">반짝반짝</h1>
      </div>
      <h2 className = "mini-box-subtext">윤슬은 아이들이 재능을 발견하고 스스로 빛을 발할 수 있게 이끌어 줍니다.</h2>
    </section>
    <section className='main-section uneseule-intro' id="first-box">
      <div className='main-section-box'>
        <h1 className='main-section-title'>우리의 사명 <br/>our mission(4s)</h1>
        <img src="img/logo/mission.png" alt = "img1"/>
      </div>
      <div className='main-section-box'>
        <p>윤슬의 사명은 4가지 핵심 가치를 실현하며 빛나는 <br/> 아이들을 위해 꿈을 심어주는 것입니다.</p>
        <ul>
          <li>✨ sincerity - 성실히 임하는</li>
          <li>✨ small - 소소한 것을 담는</li>
          <li>✨ soul - 내면을 들여다보는</li>
          <li>✨ sustainability - 지속 가능성을 지향하는</li>
        </ul>
        <p>윤슬이 될 수 있도록 노력하겠습니다.</p>
      </div>
    </section>
    <section className='main-section uneseule-intro-mini'>
    <div className='wrapping-container-mini-title'>
        <h1 className="mini-box-title">눈높이</h1>
        <img src="img/illustration/chr_red.png" alt="노을이"/>
      </div>
      <h2 className = "mini-box-subtext">윤슬은 빛나는 아이들을 품어주는 교육 서비스입니다.</h2>
    </section>
    <section className='main-section uneseule-intro'  id="second-box">
      <div className='main-section-box'>
        <h1 className='main-section-title'>우리의 철학 <br/>our philosophy</h1>
        <img src="img/logo/philosophy.png" alt = "img1"/>
      </div>
      <div className='main-section-box'>
        <p>우리의 교육 철학은 아이들을 내려다보며 지식을 주입하는 것이 아닌, <br/>눈 높이를 맞춰 가는 교육 방식을 지향합니다.</p>
      </div>
    </section>
    <section className='main-section uneseule-intro-mini'>
    <div className='wrapping-container-mini-title'>
        <img id = "dreamy" src="img/illustration/chr_blue.png" alt="꿈"/>
        <h1 className="mini-box-title">꿈</h1>
      </div>
      <h2 className = "mini-box-subtext">윤슬은 아이들과 함께 꿈을 꿉니다.</h2>
    </section>
    <section className='main-section uneseule-intro'  id="third-box" >
      <div className='main-section-box'>
        <h1 className='main-section-title'>우리의 비전 <br/>our vision(4s)</h1>
        <img src="img/logo/vision.png" alt = "img1"/>
      </div>
      <div className='main-section-box'>
      <p> 윤슬의 꿈은 아이들이 자연과 더 가까워질 수 <br/> 있도록 도와주는 것입니다.</p>
      <ul>
      <li>✨ send - 사랑을 ‘전달’하겠다는 약속과</li>
      <li>✨ sense - 순수함을 간직하는 ‘감각’을</li>
      <li>✨ synergy - 혼자보다는 ‘함께’ 이뤄내며</li>
      <li>✨ scenery - 아름다운 ‘풍경’을 완성하는 것이</li>
      </ul>
      <p>윤슬이 희망하고 바라보는 꿈입니다</p>
      </div>
    </section>
  </main>
 );
}

export default Main;