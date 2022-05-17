import styles from './Class.module.css';
import {Link} from 'react-router-dom';

export default function Featured(props){
    return(
        <section>
        <h1>
            {props.title}
        </h1>
        <h1>
            {props.titleEng}
        </h1>
        <div className={styles.container}>
            <div className = {`${styles.innerContainer} ${styles.leftContainer}`}>
                <img src = "../img/illustration/sunlight.jpg" alt ="img"/>
            </div>
            <div className={`${styles.innerContainer} ${styles.rightContainer}`}>
                <h2>수업제목</h2>
                <p>오늘 수업은 늦은 시간이기도 했고 OO이가 앞에 미술학원을 다녀와서 그런지 살짝 피곤해보였습니다. 그래도 집중해서 잘 따라와주었어요.수학 5장, 국어 2장 풀고 오답까지 마쳤습니다. 오늘 다룬 내용은 비교적 쉬운 파트라서 풀이 속도도 빠르고 오답도 적었습니다. 서술형 문제에서 답만 도출하고 과정을 잘 쓰지 않는 부분은 제가 간단한 풀이과정을 알려주고 OO이가 다시 써보도록 했습니다. 태블릿에 적었는데 OO이가 신기해하면서 그림 그려보고 싶다고 했습니다. 그래서 OO이가 어떻게 얼마나 집중해서 푸느냐에 따라 못그릴 수도 있고 더 그릴 수 있다고 했더니 정말 집중해서 풀었습니다. 약속한 분량을 제대로 다 풀면 채점하는 동안 잠깐 그릴 수 있다고 했어요</p>
                <div className={styles.miniWrapper}>
                    <Link to ="/class" className={`${styles.aBox} ${styles.register}`}>수업신청</Link>
                    <Link to ="/class"className={`${styles.aBox} ${styles.more}`}>자세히 보기</Link>
                </div>
            </div>
        </div>
        </section>
    );
}