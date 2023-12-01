import React from "react";
import Image from "next/image";
import chart from "@/public/images/chart.png";
import Emoticon from "./emoticon";

const Fact = () => {
  return (
    <section className="space-y-6 bg-[#fff8e9] pt-[3rem] md:pt-[5rem]">
      <div className="container flex-row justify-center items-center pb-[1rem] md:pb-[2rem]">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-3 md:mb-0 md:max-w-[60%] mx-auto">
          Sebagai seorang manager{" "}
          <span className="text-darkOrange">
            apakah Anda pernah merasakan hal ini?
          </span>
        </h2>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:items-start ">
          <Emoticon />
        </div>
      </div>

      <div className="container pb-[4rem] md:pb-[6rem]">
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
  );
};

export default Fact;
