import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import Products from "../../components/products";

export default function Brand() {
  const route = useRouter();
  let [items, setItems] = useState(null);

  useEffect(() => {
    fetch(`/data/data.json`)
      .then((res) => res.json())
      .then((res) => {
        setItems(
          res.data.filter(
            (item) => item.brand === route.query.brand.toLowerCase()
          )
        );
      });
  }, [route.query.brand]);

  return (
    <Layout>
      <ul>
        <Products products={products} />
      </ul>
    </Layout>
  );
}
