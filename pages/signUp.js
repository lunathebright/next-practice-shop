import Layout from "../components/layout";
import styles from "../styles/SignUp.module.css";

export default function SignUp() {
  return (
    <Layout>
      <form className={styles.signUpForm}>
        <label className={styles.inputTitle}>
          ID
          <input type="text" />
        </label>
        <label className={styles.inputTitle}>
          Email
          <input type="text" />
        </label>
        <label className={styles.inputTitle}>
          password
          <input type="password" />
        </label>
        <input className={styles.submitBtn} type="submit" value="sign up" />
      </form>
    </Layout>
  );
}
