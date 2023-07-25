import React from "react";
import { productData } from "@/config/product";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return productData.map((data) => {
    return {
      slug: data.heros.meta.toLowerCase().replace(" ", "-"),
    };
  });
}

export function generateMetaData({ params }: { params: { slug: string } }) {
  const product = productData.find(
    (product) =>
      product.heros.meta.toLowerCase().replace(" ", "-") === params.slug
  );

  if (!product) notFound();
  return {
    title: product.contents.title,
    description: product.contents.desc,
  };
}

const Product = ({ params }: { params: { slug: string } }) => {
  const product = productData.find(
    (product) =>
      product.heros.meta.toLowerCase().replace(" ", "-") === params.slug
  );
  if (!product) notFound();

  return <div>{product.heros.title}</div>;
};

export default Product;
