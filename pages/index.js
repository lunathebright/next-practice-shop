import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Main from "../components/main";
import Nav from "../components/nav";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>test_shop</title>
      </Head>
      <Header />
      <Nav />
      <Main />
    </>
  );
}
