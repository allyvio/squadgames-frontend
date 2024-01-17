// @ts-nocheck

import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import Photos from "@/components/product/photos";
import FaqProduct from "@/components/product/faq-product";
import { productFaq } from "@/config/product-faq";
import "styles/styles.css";
import { FaUserTag } from "react-icons/fa";
import { MdTimer } from "react-icons/md";
import Methods from "@/components/product/methods";
import { client } from "@/lib/contentful";
import CaseStudiesCard from "@/components/case-studies-card";
import Topics from "@/components/product/topics";

export async function generateStaticParams() {
  const res = await client.getEntries({ content_type: "product" });
  return res.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const products = await client.getEntries({ content_type: "product" });
  const product = products?.items?.find(
    (product) => product.fields.slug === params.slug
  );

  return {
    title: product?.fields?.name,
    description: product?.fields?.description,
  };
}

const Product = async ({ params }: { params: { slug: string } }) => {
  const data = await client.getEntries({ content_type: "product" });
  const product = data?.items?.find(
    (product) => product.fields.slug === params.slug
  );
  if (!product) notFound();

  const faq = productFaq.find((faq) => faq.title === product.fields.name);

  return (
    <>
      <section className="space-y-6 pt-[3rem] md:pt-[5rem] pb-[1rem]">
        <div className="flex-row">
          <div className="container grid-cols-1 grid md:grid-cols-[1fr,1fr] gap-10 mb-[2rem]">
            <div className="flex flex-col">
              <h1 className="text-[2rem] leading-none md:text-[40px] font-semibold mb-5">
                {product.fields.name.toLocaleString()}
              </h1>
              <div className="flex gap-5 mb-5">
                <div className="flex items-center gap-2">
                  <span>
                    <FaUserTag />
                  </span>
                  <span>{product.fields.delivery.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <MdTimer />
                  </span>
                  <span>
                    {product.fields.trainingDuration.toLocaleString()}
                  </span>
                </div>
              </div>
              <p className="mb-5 max-w-[85%]">
                {product.fields.description.toLocaleString()}
              </p>
              <div className="my-[1rem]">
                <Link
                  href="https://wa.me/6282115570991?text=Hi%20Squadgames,%20saya%20ingin%20konsultasi%20tentang%20training"
                  target="_blank"
                  className="btn-md-orange"
                >
                  <span className="text-white text-xl mr-2">
                    <IoLogoWhatsapp />
                  </span>
                  <span>Jadwalkan Konsultasi Sekarang</span>
                </Link>
              </div>
            </div>
            <div className="flex rounded-xl relative overflow-hidden">
              <Image
                src={`https:${product.fields.image.fields?.file?.url}`}
                width={product.fields.image.fields.file.details.image.width}
                height={product.fields.image.fields.file.details.image.height}
                alt="image"
                className="w-[450px] md:w-[500px] lg:w-[600px] xl:w-[700px] lg:mt-[-3rem] mb-[3rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6 py-[2rem] md:py-[4rem] big-card-bg-gradient">
        <div className="flex flex-col text-white">
          <h2 className="text-center text-2xl md:text-3xl font-bold mx-auto md:max-w-[70%] mb-2">
            Topik Pembahasan
          </h2>
          <p className="text-center text-base font-light mb-[1rem] mx-auto w-[90%] md:w-[70%] lg:w-[50%]">
            Program kami dilengkapi dengan topik pembahasan yang mendalam untuk
            menjamin training mencapai tujuan dengan sempurna
          </p>
        </div>

        <div className="container pb-[1rem] flex justify-center items-center flex-wrap gap-3">
          <Topics />
        </div>
      </section>

      <section className="space-y-6 pt-[2rem]">
        <div className="container pt-[1rem]">
          <h2 className="text-center text-2xl md:text-3xl font-bold mx-auto md:max-w-[70%] mb-10">
            Metode Training
          </h2>
          <Methods />
        </div>
      </section>

      <section className="space-y-6 py-[2rem] md:py-[3rem] ">
        <div className="container">
          <Photos photos={product.fields.photo} />
        </div>
      </section>

      <section className="space-y-6 py-[2rem] md:py-[5rem] bg-baby">
        <div className="container">
          <h2 className="text-center text-2xl md:text-3xl font-bold mx-auto md:max-w-[70%] mb-2">
            Cerita sukses klien yang telah mempercayai Squadgames
          </h2>
          <p className="text-center text-base font-light mb-[3rem] mx-auto md:w-[70%] lg:w-[50%]">
            Solusi: {product.fields.name.toLocaleString()}
          </p>
          <CaseStudiesCard data={product.fields?.caseStudy} />
        </div>
      </section>

      <section className="space-y-6 pt-[3rem] md:pt-[4rem] pb-[1rem] md:pb-[4rem]">
        <div className="container">
          <FaqProduct title={faq.title} desc={faq.desc} qa={faq.qa} />
        </div>
      </section>

      <section className="space-y-6 py-[2rem] mb-[1rem]">
        <div className="container">
          <div className="bg-baby py-[3rem]  px-[1rem] border border-[#b7d6e7] rounded-md">
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-[1rem] mx-auto md:max-w-[70%]">
              Siap untuk bermain bersama Squadgames?
            </h2>
            <p className="text-center text-base font-light mb-2 mx-auto md:w-[70%] lg:w-[50%]">
              Tingkatkan performa tim Anda lewat training yang menyenangkan
              dengan berbagai games dari Squadgames.
            </p>

            <div className="flex justify-center mt-[2rem]">
              <Link
                href="https://wa.me/6282115570991?text=Hi%20Squadgames,%20saya%20ingin%20konsultasi%20tentang%20training"
                target="_blank"
                className="btn-md-orange"
              >
                <span className="text-white text-xl mr-2">
                  <IoLogoWhatsapp />
                </span>
                Jadwalkan Konsultasi Gratis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
