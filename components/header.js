import Image from "next/image";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <h1 className={styles.shopTitle}>
      {/* <Image
        alt="logo"
        src="https://user-images.githubusercontent.com/63533584/138409184-6adc9865-1017-4e1f-8971-248fec33f5dc.png"
      /> */}
      the Pointe
    </h1>
  );
}
