import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Products.module.css";

function Product({ product }) {
  return (
    <li className={styles.productItem}>
      <Image alt={product.model} src={product.image} width="100" height="100" />
      <span className={styles.name}>{product.model}</span>
      <span className={styles.price}>{product.price}</span>
    </li>
  );
}

export default function Products({ products }) {
  return (
    <ul className={styles.products}>
      {products &&
        products.map((product) => {
          return (
            <Link
              href={`/${product.brand}/${product.model}`}
              // as={`/${product.brand}/${product.model}`}
              key={`${product.brand}_${product.model}`}
            >
              <a>
                <Product product={product} />
              </a>
            </Link>
          );
        })}
    </ul>
  );
}
