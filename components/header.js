import Link from "next/link";

import styles from "../styles/Header.module.css";

import Nav from "./nav";
import UserNav from "./userNav";

export default function Header() {
  return (
    <header className={styles.shopHeader}>
      <Link href="/">
        <a>
          <h1 className={styles.shopTitle}>the Pointe</h1>
        </a>
      </Link>
      <UserNav />
      <Nav />
    </header>
  );
}
