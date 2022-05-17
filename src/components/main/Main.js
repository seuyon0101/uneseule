import ClassIndex from './class_index.js';
import MainSection from './main_section.js';
import MiniSection from './mini_section.js';
import IntroSection from './company_intro_section.js';


function Main(){

  return(
    <main>
      <MainSection 
        text1 ="반짝 빛나는 아이들을 위한 uneseule"
        text2 ="1:1 클래스"
        b_text ="신청하기"
        imgsrc ="img/illustration/main_banner_img.png"
      />
      <ClassIndex text = "1월 온라인 언어/예술 클래스"/>
      <MiniSection 
        color = {chrImg.yellow} // options :yellow, red, blue
        text1 = "반짝 반짝"
        text2 = "윤슬은 아이들이 재능을 발견하고 스스로 빛을 발할 수 있게 이끌어 줍니다."
      />
      <IntroSection name = {introSection.mission} />
      <MiniSection 
        color = {chrImg.red} // options :yellow, red, blue
        text1 = "눈높이"
        text2 = "윤슬은 빛나는 아이들을 품어주는 교육 서비스입니다."
        direction = "r"
      />
      <IntroSection name = {introSection.philosophy} direction = "r" />
      <MiniSection 
        color = {chrImg.blue} // options :yellow, red, blue
        text1 = "꿈"
        text2 = "윤슬은 아이들과 함께 꿈을 꿉니다."
      />
      <IntroSection name = {introSection.vision} />
    </main>
 );
}


const chrImg = {
  yellow : {
    src : "img/illustration/chr_yellow.png",
    alt : "yellow",
  },
  red : {
    src : "img/illustration/chr_red.png",
    alt : "red",
  },
  blue : {
    src : "img/illustration/chr_blue.png",
    alt : "blue",
  }
  };

  const introSection = {
    mission : {
        cssClass : 'firstBox',
        title_kor : "우리의 사명",
        title_eng : "our mission(4s)",
        imgUrl : "img/logo/mission.png",
        alt : "img1",
        text1 : "윤슬의 사명은 4가지 핵심 가치를 실현하며 빛나는 아이들을 위해 꿈을 심어주는 것입니다.",
        textlist : ["✨ sincerity - 성실히 임하는", "✨ small - 소소한 것을 담는", "✨ soul - 내면을 들여다보는", "✨ sustainability - 지속 가능성을 지향하는"],
        text2 : "윤슬이 될 수 있도록 노력하겠습니다."
    },
    philosophy : {
      cssClass : "secondBox",
        title_kor : "우리의 철학",
        title_eng : "our philosophy",
        imgUrl : "img/logo/philosophy.png",
        alt : "img1",
        text1 : "우리의 교육 철학은 아이들을 내려다보며 지식을 주입하는 것이 아닌, 눈 높이를 맞춰 가는 교육 방식을 지향합니다.",
        textlist : [],
        text2 : ""
    },
    vision : {
      cssClass : "thirdBox",
        title_kor : "우리의 비전",
        title_eng : "our vision(4s)",
        imgUrl : "img/logo/vision.png",
        alt : "img1",
        text1 : "윤슬의 꿈은 아이들이 자연과 더 가까워질 수 있도록 도와주는 것입니다.",
        textlist : ["✨ send - 사랑을 ‘전달’하겠다는 약속과", "✨ sense - 순수함을 간직하는 ‘감각’을", "✨ synergy - 혼자보다는 ‘함께’ 이뤄내며", "✨ scenery - 아름다운 ‘풍경’을 완성하는 것이"],
        text2 : "윤슬이 희망하고 바라보는 꿈입니다"
    },
}

export default Main;