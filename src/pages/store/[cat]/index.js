import React from "react";
import { ProductCategory } from "@/exports";

const productCategories = ({ data, pageName }) => {
  return (
    <div className="w-full">
      <ProductCategory data={data} pageName={pageName} />
    </div>
  );
};

export default productCategories;

// export async function getStaticPaths() {
//   const { store_categories } = await import("../../../constants/store.json");
//   const allPaths = store_categories.map((path) => {
//     return {
//       params: {
//         cat: path.id.toString(),
//       },
//     };
//   });
//   return {
//     paths: allPaths,
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   const id = context?.params.cat;
//   // console.log(id);
//   const { all_items } = await import("../../../constants/store.json");
//   const data = all_items.filter((item) => item.category === id);
// // console.log(data);
//   return {
//     props: { data, pageName: id },
//   };
// }

export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const data = await res.json();
  const allPaths = data.map((path) => {
    return {
      params: {
        cat: path.toString(),
      },
    };
  });
  console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.cat;
  const res = await fetch("https://fakestoreapi.com/products");
  const storeData = await res.json();
  const dataParams = storeData.filter((param) => param.category === id);

  console.log(dataParams);
  return {
    props: {
      data: dataParams,
      pageName: id,
    },
  };
}
