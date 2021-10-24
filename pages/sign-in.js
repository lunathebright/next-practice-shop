import Layout from "../components/layout";
import styles from "../styles/Signs.module.css";

export default function SignIn() {
  return (
    <Layout>
      <form className={styles.signUpForm}>
        <label className={styles.inputTitle}>
          ID
          <input type="text" />
        </label>
        <label className={styles.inputTitle}>
          password
          <input type="password" />
        </label>
        <input className={styles.submitBtn} type="submit" value="sign in" />
      </form>
    </Layout>
  );
}
