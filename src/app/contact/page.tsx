import styles from "./page.module.css";

export const metadata = {
  title: "Contact | SE Student Blog",
  description: "Get in touch with me.",
};

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Me</h1>
      <p className={styles.subtitle}>동아리 활동이나 프로젝트 제안, 언제든 환영합니다!</p>

      <form className={`glass-panel ${styles.contactForm}`}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input type="text" id="name" className={styles.input} placeholder="이름을 입력하세요" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input type="email" id="email" className={styles.input} placeholder="이메일 주소를 입력하세요" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea id="message" className={styles.textarea} placeholder="메시지 내용을 적어주세요"></textarea>
        </div>

        <button type="button" className={styles.submitBtn}>
          Send Message
        </button>
      </form>
    </div>
  );
}
