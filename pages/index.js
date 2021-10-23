import Head from "next/head";
import styles from "../styles/Home.module.css";

import Header from "../components/header";
import Main from "../components/main";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>the pointe</title>
      </Head>
      <Header />
      <Main />
    </Layout>
  );
}
