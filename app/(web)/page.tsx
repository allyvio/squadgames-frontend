import Image from "next/image";
import Link from "next/link";
import "styles/styles.css";
import ReasonCard from "@/components/reason-card";
import Emoticon from "@/components/emoticon";
import Accordion from "@/components/accordion";
import logoWhite from "@/public/logo-white.png";
import logo from "@/public/logo.png";
import GamesCard from "@/components/games-card";
import heroImg from "@/public/images/hero-image.png";
import chart from "@/public/images/chart.png";
import Company from "@/components/company";
import ExpertCard from "@/components/expert-card";
import { IoLogoWhatsapp } from "react-icons/io";
import Faq from "@/components/faq";

export default function Home() {
  return (
    <>
      <section className="space-y-6 pt-[5rem] md:pt-[10rem] bg-hero-gradient">
        <div className="flex-row">
          <div className="container flex-row lg:flex items-start justify-start">
            <div className="flex flex-col">
              <h1 className="uppercase leading-[0.9] tracking-wide text-[4rem] md:text-[5.5rem] font-['Bebas_Neue'] font-bold mb-5 text-white">
                <span className="text-orange">harness your</span> <br />{" "}
                team&apos;s true <br /> potential
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
              src={heroImg}
              alt="image"
              className="w-[450px] md:w-[500px] lg:w-[600px] xl:w-[700px] lg:mt-[-3rem] pb-[3rem]"
            />
          </div>
        </div>
      </section>

      <section className="space-y-6 bg-[#fff8e9] pt-[6rem]">
        <div className="container flex-row justify-center items-center pb-[3rem]">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-5 md:max-w-[60%] mx-auto">
            Sebagai seorang manager{" "}
            <span className="text-darkOrange">
              apakah Anda pernah merasakan hal ini?
            </span>
          </h2>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center md:items-start ">
            <Emoticon />
          </div>
        </div>

        <div className="container pb-[6rem]">
          <div className="big-card max-w-fit mx-auto">
            <div className="flex flex-col w-[300px] md:w-auto">
              <h2 className="text-center text-xl md:text-3xl font-bold mb-5 mx-auto">
                Faktanya... <br /> Anda tidak sendirian.{" "}
              </h2>
              <p className="text-center mb-10 ">
                Banyak HR di perusahaan lain merasakan hal yang sama
              </p>
            </div>

            <div className="flex-col">
              <Image
                src={chart}
                alt="chart"
                className="max-w-[300px] md:max-w-[500px] mb-5"
              />
              <p className="text-center text-sm text-gray-500">
                What HR Professionals want in their corporate training program{" "}
                <br /> - Gamelearn
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6 py-[4rem] big-card-bg-gradient">
        <div className="container pb-[3rem] text-white">
          <p className="text-center text-lg mb-2">Solusi dari Squadgames</p>
          <h2 className="text-center text-2xl md:text-3xl font-bold mx-auto md:max-w-[65%]">
            Squadgames will help you create team building events{" "}
            <span className="text-orange">like never before</span>
          </h2>
        </div>

        <section className="container flex justify-center items-center lg:px-[3rem] ">
          <div className="grid grid-cols-1 lg:grid-cols-2 content-between gap-10">
            <div className="flex flex-col w-[90%]">
              <Image
                src={logoWhite}
                alt="squadgames"
                className="max-w-[250px] my-5"
              />
              <p className="text-lg text-white mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae beatae quod dolorum tenetur impedit quo, excepturi,
                inventore animi blanditiis nesciunt saepe possimus consectetur
                iure dicta maiores commodi. Maiores iure illum veniam ipsa quae
                soluta. Eius architecto beatae natus, maxime facere consequuntur
                magni nemo, numquam, libero quaerat eligendi deleniti earum
                delectus.
              </p>
              <div>
                <Link href="#" target="_blank" className="btn-orange">
                  Konsultasi Sekarang
                </Link>
              </div>
            </div>
            <Accordion />
          </div>
        </section>
      </section>

      <section className="space-y-6 py-[5rem]">
        <div className="container flex-row justify-center items-center">
          <p className="text-center text-lg mb-2">Mengapa Squadgames?</p>
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-[5rem] mx-auto md:max-w-[70%]">
            Solusi training terbaru untuk meningkatkan potensi tim Anda dengan{" "}
            <span className="text-darkOrange">bermain bersama</span>
          </h2>
          <ReasonCard />
        </div>
      </section>

      <section className="space-y-6 py-[5rem] bg-games-gradient">
        <div className="container flex-row justify-center items-center">
          <p className="text-center text-lg mb-2 text-white">
            Training tapi bermain games
          </p>
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-[5rem] mx-auto md:max-w-[70%] text-white">
            Games yang dirancang untuk meningkatkan soliditas tim dengan
            aktivitas yang menyenangkan
          </h2>
          <GamesCard />
        </div>
      </section>

      <section className="space-y-6 py-[8rem]">
        <div className="container flex-row justify-center items-center">
          <h3 className="text-center text-xl font-medium">
            Telah dipercaya 500+ perusahaan di berbagai industri
          </h3>
        </div>
        <div className="container relative">
          <Company />
        </div>
      </section>

      <section className="space-y-6 py-[3rem]">
        <div className="container justify-center items-center">
          <p className="text-center text-lg mb-2 ">
            Bertemu ahli di setiap bidang
          </p>
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-[5rem] mx-auto md:max-w-[70%] ">
            Para ahli yang akan menemani Anda bermain dan berakselerasi bersama
          </h2>
          <ExpertCard />
        </div>
      </section>

      <section className="space-y-6 py-[5rem]">
        <div className="container">
          <Faq />
        </div>
      </section>

      <section className="space-y-6 py-[5rem]">
        <div className="container">
          <Image src={logo} alt="logo" className="w-[150px] mx-auto mb-5" />
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-[1rem] mx-auto md:max-w-[70%]">
            Siap untuk bermain bersama Squadgames?
          </h2>
          <p className="text-center text-base font-light mb-2 mx-auto md:w-[70%] lg:w-[50%]">
            Tingkatkan performa tim Anda lewat training yang menyenangkan dengan
            berbagai games dari Squadgames.
          </p>

          <div className="flex justify-center mt-[2rem]">
            <Link href="#" target="_blank" className="btn-md-orange">
              <span className="text-white text-xl mr-2">
                <IoLogoWhatsapp />
              </span>
              WhatsApp Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
