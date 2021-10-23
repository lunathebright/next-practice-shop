import MainImg from "./mainImg";
import Products from "./products";

export default function Main({ products }) {
  return (
    <>
      <MainImg />
      <Products products={products} />
    </>
  );
}
