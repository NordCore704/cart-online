import React from "react";
import { ProductInfo } from "@/pages/components";

const singleProduct = ({ data }) => {
  return (
    <section className="w-full">
      <ProductInfo data={data} />
    </section>
  );
};

export default singleProduct;

// export async function getStaticPaths() {
//   const { all_items } = await import('../../../constants/store.json')
//   const paths = all_items.map((path) => {
//     return {
//       params: {
//         cat: path.category,
//         id: path.id
//       }
//     }
//   })
//   return {
//     paths: paths,
//     fallback: false
//   }
// }

// export async function getStaticProps(context) {
//   const id = context?.params.id
//   const { all_items } = await import('../../../constants/store.js')
//   const productInfo = all_items.filter(prod => id === prod.id)
//   return {
//     props: { data: productInfo }
//   }
// }

export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  const paths = data.map((path) => {
    return {
      params: {
        cat: path.category,
        id: path.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.id;
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  console.log(data);
  const productInfo = data.filter((prod) => id === prod.id.toString());
  console.log(productInfo);
  return {
    props: { data: productInfo },
  };
}
