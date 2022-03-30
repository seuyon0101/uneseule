import dummy from "./main.json";

function ClassIndex() {

const classindexcontainer = dummy.classindex.map((x) =>
    <div className="class-index-mini-box box">
        <div className="class-index-mini-container">
        <a href ={x.url}><img className = "class-index-img" src= {x.imgsrc} alt="img1"/></a>
        </div>
        <p className = "class-index-text1"> {x.text1}</p>
        <p className = "class-index-text2"> {x.text2}</p>
        <p className = "class-index-text3"> <span className="class-index-span">{x.span1}</span>{x.text3}<span className="class-index-span">{x.span2}</span></p>
    </div>
);
    return(
        <>
            <h1 className="subheading">{"1월 온라인 언어/예술 클래스"}</h1>
            <subsection className= "class-index-section box">
                <div className="class-index-box box">
                    {classindexcontainer}
                </div>
            </subsection>
        </>
    );

}

export default ClassIndex ; 