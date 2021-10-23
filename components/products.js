import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Products.module.css";

export default function Products({ products }) {
  return (
    <ul className={styles.products}>
      {products &&
        products.map((product) => {
          return (
            <Link
              href={`/products/${product.model}`}
              key={`${product.brand}_${product.model}`}
            >
              <a>
                <Product item={product} />
              </a>
            </Link>
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
