import { useState } from "react";
import Link from "next/link";
import styles from "../styles/UserNav.module.css";

export default function UserNav() {
  const [isValidUser, setIsVaildUser] = useState(false);

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
      <li className={styles.userNavItem}>
        <Link href={`/signUp`}>
          <a>Sign Up</a>
        </Link>
      </li>
      <li className={styles.userNavItem}>
        <Link href={`/signIn`}>
          <a>Sign In</a>
        </Link>
      </li>
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
