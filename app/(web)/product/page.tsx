import React from "react";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/images/teambuilding.jpg";
import { IoLogoWhatsapp } from "react-icons/io";

const ProductPage = () => {
  return (
    <>
      <section className="space-y-6 pt-[3rem] md:pt-[5rem] ">
        <div className="flex-row">
          <div className="container grid-cols-1 grid md:grid-cols-[1fr,1fr]">
            <div className="flex flex-col">
              <h1 className="text-[2rem] leading-none md:text-[40px] font-semibold mb-5">
                Cara menyenangkan untuk meningkatkan kapasitas tim Anda dengan
                bermain bersama
              </h1>
              <p className="mb-5 max-w-[85%]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
                autem neque modi eum, ad delectus omnis natus magni illum.
                Consequatur culpa a sed maiores numquam provident perspiciatis
                repellat quam aliquam!
              </p>
              <div className="mb-[3rem]">
                <Link
                  href="https://wa.me/6282115570991?text=Hi%20Squadgames,%20saya%20ingin%20konsultasi%20tentang%20training"
                  target="_blank"
                  className="btn-md-orange"
                >
                  <span className="text-white text-xl mr-2">
                    <IoLogoWhatsapp />
                  </span>
                  WhatsApp Konsultasi Gratis
                </Link>
              </div>
            </div>
            <div className="rounded-xl relative overflow-hidden">
              <Image
                src={heroImage}
                alt="image"
                className="w-[450px] md:w-[500px] lg:w-[600px] xl:w-[700px] lg:mt-[-3rem] mb-[3rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
