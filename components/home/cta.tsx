import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import { IoLogoWhatsapp } from "react-icons/io";

const Cta = () => {
  return (
    <section className="space-y-6 py-[2rem] mb-[1rem]">
      <div className="container">
        <Image src={logo} alt="logo" className="w-[150px] mx-auto mb-5" />
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-[1rem] mx-auto md:max-w-[70%]">
          Siap untuk bermain bersama Squadgames?
        </h2>
        <p className="text-center text-base font-light mb-2 mx-auto md:w-[70%] lg:w-[50%]">
          Tingkatkan performa tim Anda lewat training yang menyenangkan dengan
          berbagai games dari Squadgames.
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
            WhatsApp Kami
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
