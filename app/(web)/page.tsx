import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import "styles/styles.css";
import Wave from "@/components/ui/wave";
import TeamBuildingCard from "@/components/teambuilding-card";
import Emoticon from "@/components/emoticon";
import Accordion from "@/components/accordion";
import { accordionData } from "@/config/accordion";
import logoWhite from "@/public/logo-white.png";

export default function Home() {
  return (
    <>
      <section className="space-y-6 pt-[11rem] hero-bg-gradient">
        <div className="flex-row">
          <div className="container flex-row lg:flex mb-[-5rem] lg:mb-[-10rem] xl:mb-[-13rem]">
            <div className="flex flex-col">
              <h1 className="uppercase leading-[0.9] tracking-wide text-[5rem] md:text-[5.5rem] font-['Bebas_Neue'] font-bold mb-5">
                <span className="text-orange">unleash your</span> <br />{" "}
                team&apos;s true <br /> potential
              </h1>
              <p className="mb-5 max-w-[85%]">
                Sebuah solusi end-to-end untuk meningkatkan kapasitas tim Anda
                melalui pengalaman yang unik, beda, dan inspiratif
              </p>
              <div>
                <Link
                  href="/"
                  className={cn(
                    buttonVariants({ variant: "purple", size: "lg" })
                  )}
                >
                  Selengkapnya
                </Link>
              </div>
            </div>
            <div className="mt-[-60px] md:block">
              <Image
                src="/images/hero-image.png"
                width={1246}
                height={1000}
                alt="image"
              />
            </div>
          </div>
          {/* svg goes here */}
          <Wave />
        </div>
      </section>

      <section className="space-y-6 section-bg-gradient">
        <div className="container flex-row justify-center items-center pt-10 md:pt-0">
          <h2 className="text-center text-white text-4xl md:text-5xl font-bold mb-10">
            Pernah tidak kamu <span className="text-orange">merasa?</span>
          </h2>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center md:items-start ">
            <Image
              src="/images/section-image3.png"
              alt="image"
              width={400}
              height={500}
              className="ml-[-50px]"
            />
            <Emoticon />
          </div>
        </div>
      </section>

      <section className="space-y-6 py-[5rem] resep-bg-gradient">
        <div className="container flex-row justify-center items-center">
          <h2 className="text-center text-darkPurple text-4xl md:text-5xl font-bold mb-[5rem]">
            Kamu butuh <span className="text-orange">team building</span> baru!
          </h2>
          <div className="flex justify-center items-center">
            <TeamBuildingCard />
          </div>
        </div>

        <section className="container flex justify-center items-center py-[3rem] lg:px-[10rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 big-card-bg-gradient content-between items-center px-[3rem] py-[4rem] gap-10 rounded-xl">
            <div className="flex flex-col w-[90%]">
              <h2 className="text-white font-bold text-xl text-center">
                Memperkenalkan
              </h2>
              <Image src={logoWhite} alt="squadgames" className="w-auto my-5" />
              <p className="text-white text-center">
                Perpaduan 4 bahan terbaik untuk menjadikan event team building
                Anda makin efektif dan berkesan
              </p>
            </div>
            <Accordion />
          </div>
        </section>
      </section>
    </>
  );
}
