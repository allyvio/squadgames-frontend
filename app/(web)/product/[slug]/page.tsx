import React from "react";
import { productData } from "@/config/product";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { GiCheckMark } from "react-icons/gi";
import { IoLogoWhatsapp } from "react-icons/io";
import Photos from "@/components/product/photos";
import CaseStudy from "@/components/product/case-study";
import FaqProduct from "@/components/product/faq-product";
import "styles/styles.css";
import { FaUserTag } from "react-icons/fa";
import { MdTimer } from "react-icons/md";
import Methods from "@/components/product/methods";

export async function generateStaticParams() {
  return productData.map((data) => {
    return {
      slug: data.contents.meta.toLowerCase().replace(" ", "-"),
    };
  });
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = productData.find(
    (product) =>
      product.contents.meta.toLowerCase().replace(" ", "-") === params.slug
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
      product.contents.meta.toLowerCase().replace(" ", "-") === params.slug
  );
  if (!product) notFound();

  return (
    <>
      <section className="space-y-6 pt-[3rem] md:pt-[5rem] pb-[1rem]">
        <div className="flex-row">
          <div className="container grid-cols-1 grid md:grid-cols-[1fr,1fr] gap-10 mb-[2rem]">
            <div className="flex flex-col">
              <h1 className="text-[2rem] leading-none md:text-[40px] font-semibold mb-5">
                {product.contents.title}
              </h1>
              <div className="flex gap-5 mb-5">
                <div className="flex items-center gap-2">
                  <span>
                    <FaUserTag />
                  </span>
                  <span>{product.contents.note}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <MdTimer />
                  </span>
                  <span>{product.contents.duration}</span>
                </div>
              </div>
              <p className="mb-5 max-w-[85%]">{product.contents.desc}</p>
              <div className="my-[1rem]">
                <Link
                  href="https://wa.me/6282115570991?text=Hi%20Squadgames,%20saya%20ingin%20konsultasi%20tentang%20training"
                  target="_blank"
                  className="btn-md-orange"
                >
                  <span className="text-white text-xl mr-2">
                    <IoLogoWhatsapp />
                  </span>
                  {product.contents.action}
                </Link>
              </div>
            </div>
            <div className="flex rounded-xl relative overflow-hidden">
              <Image
                src={product.contents.image}
                alt="image"
                width={500}
                height={500}
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
          {product.contents.topics.map((topic, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md md:w-[80%] lg:w-[30%] min-h-[180px]"
            >
              <div className="py-6 px-8 flex flex-col ">
                <p className="text-lg font-bold mb-2">{topic.title}</p>
                <p>{topic.desc}</p>
              </div>
            </div>
          ))}
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
          <Photos photos={product.contents.gallery} />
        </div>
      </section>

      <section className="space-y-6 py-[2rem] md:py-[5rem] bg-baby">
        <div className="container">
          <h2 className="text-center text-2xl md:text-3xl font-bold mx-auto md:max-w-[70%] mb-2">
            Cerita sukses klien yang telah mempercayai Squadgames
          </h2>
          <p className="text-center text-base font-light mb-[3rem] mx-auto md:w-[70%] lg:w-[50%]">
            Solusi: {product.contents.title}
          </p>
          <CaseStudy caseStudies={product.caseStudy} />
        </div>
      </section>

      <section className="space-y-6 pt-[3rem] md:pt-[4rem] pb-[1rem] md:pb-[4rem]">
        <div className="container">
          <FaqProduct
            title={product.faq.title}
            desc={product.faq.desc}
            contents={product.faq.contents}
          />
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
