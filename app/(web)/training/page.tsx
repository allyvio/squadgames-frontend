import React from "react";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/images/teambuilding.jpg";

const Catalogue = () => {
  return (
    <>
      <section className="space-y-6 pt-[5rem] md:pt-[10rem] ">
        <div className="flex-row">
          <div className="container flex-row lg:flex items-start justify-start">
            <div className="flex flex-col">
              <h1 className="leading-[0.9] tracking-tighter text-[4rem] md:text-[5rem] font-bold mb-5 text-white">
                <span className="text-orange">Harness Your</span> <br />{" "}
                Team&apos;s True <br /> Potential
              </h1>
              <p className="mb-5 max-w-[85%] text-white">
                Solusi end-to-end untuk mengembangkan tim anda lewat berbagai
                aktivitas yang asik, beda, dan insightful
              </p>
              <div className="mb-[3rem]">
                <Link href="/" target="_blank" className="btn-orange">
                  Selengkapnya
                </Link>
              </div>
            </div>
            <Image
              src={heroImage}
              alt="image"
              className="w-[450px] md:w-[500px] lg:w-[600px] xl:w-[700px] lg:mt-[-3rem] pb-[3rem]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalogue;
