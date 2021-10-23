import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "../styles/Products.module.css";

export default function Products() {
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
    <ul className={styles.products}>
      {products &&
        products.map((product) => {
          return (
            <Product key={`${product.brand}_${product.model}`} item={product} />
          );
        })}
    </ul>
  );
}

function Product({ item }) {
  return (
    <li className={styles.productItem}>
      <Image alt={item.model} src={item.image} width="100" height="100" />
      <span className={styles.name}>{item.model}</span>
      <span className={styles.price}>{item.price}</span>
    </li>
  );
}
