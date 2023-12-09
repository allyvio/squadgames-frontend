import React from "react";
import Image from "next/image";
import Accordion from "../accordion";
import Link from "next/link";
import logoWhite from "@/public/logo-white.png";

const Solution = () => {
  return (
    <section className="space-y-6 py-[3rem] md:py-[4rem] big-card-bg-gradient">
      <div className="container md:pb-[3rem] text-white">
        <p className="text-center text-lg mb-2">Solusi dari Squadgames</p>
        <h2 className="text-center text-2xl md:text-3xl font-bold mx-auto md:max-w-[65%]">
          Squadgames akan membantu Anda merancang team building training{" "}
          <span className="text-orange"> yang tidak biasa</span>
        </h2>
      </div>

      <div className="container flex justify-center items-center lg:px-[3rem] ">
        <div className="grid grid-cols-1 lg:grid-cols-2 content-between gap-10">
          <div className="flex flex-col md:w-[90%]">
            <Image
              src={logoWhite}
              alt="squadgames"
              className="max-w-[250px] my-5"
            />
            <p className="text-lg text-white mb-5 md:mb-10">
              Squadgames menciptakan puluhan produk menarik berbasis
              experiential learning, yang memunculkan berbagai produk mulai dari
              onboarding programs, professional competency training, hingga
              penciptaan learning process perusahaan yang komprehensif dan
              sesuai dengan kondisi yang dihadapi dunia SDM saat ini.
            </p>
            <div>
              <Link
                href="https://wa.me/6282115570991?text=Hi%20Squadgames,%20saya%20ingin%20konsultasi%20tentang%20training"
                target="_blank"
                className="btn-md-orange md:btn-orange"
              >
                Konsultasi Gratis Sekarang
              </Link>
            </div>
          </div>
          <Accordion />
        </div>
      </div>
    </section>
  );
};

export default Solution;
