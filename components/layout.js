import Head from "next/head";

import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>test_shop</title>
      </Head>
      {children}
    </div>
  );
}
