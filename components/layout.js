import Head from "next/head";

import styles from "../styles/Layout.module.css";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>test_shop</title>
      </Head>
      <Header />
      <section className={styles.contents}>{children}</section>
    </div>
  );
}
