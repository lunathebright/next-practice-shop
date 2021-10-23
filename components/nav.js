import styles from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.navBox}>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>Grishko</li>
        <li className={styles.navItem}>Russian Pointe</li>
        <li className={styles.navItem}>Bloch</li>
        <li className={styles.navItem}>Capezio</li>
        <li className={styles.navItem}>Gaynor minden</li>
      </ul>
    </nav>
  );
}
