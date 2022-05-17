import styles from './contact.module.css';

function ContactInfo(){
    return(
        <section className={styles.contactSection}>
        <h1> 문의하기 | contact </h1>
        <form>
            <input className={styles.textInput}  type="text" placeholder="이름" /><br/><br/>
            <input className={styles.textInput}  type="text"placeholder="이메일"/><br/><br/>
            <input className={styles.textInput}  type="text" placeholder="문의제목"/><br/><br/>
            <input className={`${styles.textInput} ${styles.inputLong}`}  type="text"placeholder="내용을 입력하세요" /><br/><br/>
            <div className={styles.submitButton}>
                <input type = "submit" value = "문의하기"/>
                <button>취소</button>
            </div>
        </form>
          </section>
    );
}

export default ContactInfo;