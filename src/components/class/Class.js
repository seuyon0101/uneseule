import Featured from "./featured";
import ClassIndex from "../main/class_index";
import Teachers from "./Teachers";

function Class(){
    return(
        <div style ={{
            paddingLeft: "50px",
        }}>
            <Featured title = "이번달 주요 수업 소개" titleEng= "featured class"/>
            <ClassIndex text = "[신규new]4월 온라인 언어/예술 클래스 "/>
            <ClassIndex text = "3월 온라인 언어/예술 클래스 "/>
            <hr/>
            <Teachers title= "윤슬 선생님" />
        </div>
    );
}

export default Class ;