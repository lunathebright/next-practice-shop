import Image from "next/image";

import styles from "../styles/mainImg.module.css";

export default function MainImg() {
  return (
    <section className={styles.mainImgBox}>
      <Image
        className={styles.mainImg}
        alt="main"
        width="500"
        height="100"
        src="https://www.dinamicaballet.com/wp-content/uploads/Co%CC%81mo-elegir-tu-primer-par-de-zaptaillas-de-punta-1080x675.jpg"
      />
    </section>
  );
}
