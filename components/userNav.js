import { useState } from "react";
import Link from "next/link";
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
      <li className={styles.userNavItem}>
        <Link href={`/myAccount`}>
          <a>my account</a>
        </Link>
      </li>
      <li className={styles.userNavItem}>
        <Link href={`/cart`}>
          <a>cart</a>
        </Link>
      </li>
    </>
  );
}
