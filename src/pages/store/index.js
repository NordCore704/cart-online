import React from "react";
import { Products } from "../../exports";



const products = ({ data }) => {
  return (
    <section className="">
      <Products data={data} />
    </section>
  );
};

export default products;

// export async function getStaticProps(){
//   const { store_categories } = await import('../../constants/store.json')
//   return {
//     props: { data: store_categories }
//   }
// }

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const data = await res.json();

  return {
    props: { data: data },
  };
}
