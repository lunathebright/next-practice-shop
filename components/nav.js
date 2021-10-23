import Link from "next/link";

import styles from "../styles/Nav.module.css";

export default function Nav() {
  const brands = [
    "Grishko",
    "Russian Pointe",
    "Bloch",
    "Capezio",
    "Gaynor minden",
  ];
  return (
    <nav className={styles.navBox}>
      <ul className={styles.navItems}>
        {brands.map((brand) => {
          return (
            <li key={brand} className={styles.navItem}>
              <Link href={`/${brand}`}>{brand}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
