import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Header from "../components/header";
import Main from "../components/main";

export default function Home() {
  return (
    <>
      <Head>
        <title>test_shop</title>
      </Head>
      <Header />
      <Main />
    </>
  );
}
