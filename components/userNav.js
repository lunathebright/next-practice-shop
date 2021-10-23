import { useState } from "react";
import styles from "../styles/UserNav.module.css";

export default function UserNav() {
  const [isValidUser, setIsVaildUser] = useState(true);

  return (
    <nav className={styles.userNavBox}>
      <ul className={styles.userNavItems}>
        {isValidUser ? <AfterSignIn /> : <BeforeSignIn />}
      </ul>
    </nav>
  );
}

function BeforeSignIn() {
  return (
    <>
      <li className={styles.userNavItem}>SignUp</li>
      <li className={styles.userNavItem}>SignIn</li>
    </>
  );
}

function AfterSignIn() {
  return (
    <>
      <li className={styles.userNavItem}>my account</li>
      <li className={styles.userNavItem}>cart</li>
    </>
  );
}
