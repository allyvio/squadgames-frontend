import React from "react";
import { productData } from "@/config/product";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { GiCheckMark } from "react-icons/gi";
import { IoLogoWhatsapp } from "react-icons/io";
import Gallery from "@/components/gallery";

export async function generateStaticParams() {
  return productData.map((data) => {
    return {
      slug: data.heros.meta.toLowerCase().replace(" ", "-"),
    };
  });
}

export function generateMetadata({ params }: { params: { slug: string } }) {
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

  return (
    <>
      <section className="space-y-6 pt-[3rem] md:pt-[5rem] ">
        <div className="flex-row">
          <div className="container grid-cols-1 grid md:grid-cols-[1fr,1fr] gap-10 mb-[2rem]">
            <div className="flex flex-col">
              <h1 className="text-[2rem] leading-none md:text-[40px] font-semibold mb-5">
                {product.contents.title}
              </h1>
              <p className="mb-5 max-w-[85%]">{product.contents.desc}</p>
              <div className="mt-[1rem]">
                <Link
                  href="https://wa.me/6282115570991?text=Hi%20Squadgames,%20saya%20ingin%20konsultasi%20tentang%20training"
                  target="_blank"
                  className="btn-md-orange"
                >
                  <span className="text-white text-xl mr-2">
                    <IoLogoWhatsapp />
                  </span>
                  {product.heros.action}
                </Link>
              </div>
            </div>
            <div className="flex rounded-xl relative overflow-hidden">
              <Image
                src={product.heros.image}
                alt="image"
                width={500}
                height={500}
                className="w-[450px] md:w-[500px] lg:w-[600px] xl:w-[700px] lg:mt-[-3rem] mb-[3rem] object-cover"
              />
            </div>
          </div>
          <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-[1rem]">
            <div className="flex flex-col">
              <h2 className="text-lg font-bold mb-5">Topik Pembahasan</h2>
              {product.contents.topics.map((topic, i) => (
                <ul key={i} className="flex items-center gap-2">
                  <span className="mb-2">
                    <GiCheckMark />
                  </span>
                  <li className="mb-2">{topic}</li>
                </ul>
              ))}
            </div>

            <div className="flex flex-col">
              <h2 className="text-lg font-bold mb-5">Metode Training</h2>
              {product.contents.methods.map((topic, i) => (
                <ul key={i} className="flex items-center gap-2">
                  <span className="mb-2">
                    <GiCheckMark />
                  </span>
                  <li className="mb-2">{topic}</li>
                </ul>
              ))}
            </div>

            <div className="flex flex-col">
              <h2 className="text-lg font-bold mb-5">Durasi Training</h2>
              <div className="flex flex-col justify-between h-full ">
                <p className="mb-5">{product.contents.duration}</p>
                {/* <div className="mb-[3rem]">
                  <Link
                    href="https://wa.me/6282115570991?text=Hi%20Squadgames,%20saya%20ingin%20konsultasi%20tentang%20training"
                    target="_blank"
                    className="btn-md-orange"
                  >
                    <span className="text-white text-xl mr-2">
                      <IoLogoWhatsapp />
                    </span>
                    {product.heros.action}
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6 md:pt-[5rem] ">
        <div className="container">
          <Gallery images={product.contents.images} />
        </div>
      </section>
    </>
  );
};

export default Product;
