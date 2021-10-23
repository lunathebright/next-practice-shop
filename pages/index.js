import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import Header from "../components/header";
import Main from "../components/main";
import Layout from "../components/layout";

export default function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    <Layout>
      <Head>
        <title>the pointe</title>
      </Head>
      <Header />
      <Main products={products} />
    </Layout>
  );
}
