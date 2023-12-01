import React from "react";
import { reasonData } from "@/config/reason";
import Image from "next/image";

const Why = () => {
  return (
    <section className="space-y-6 pt-[3rem] md:pt-[5rem] pb-[2rem] md:pb-[5rem]">
      <div className="container flex-row justify-center items-center">
        <p className="text-center text-lg mb-2">Mengapa Squadgames?</p>
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-[5rem] mx-auto md:max-w-[70%]">
          Solusi training terbaru untuk meningkatkan potensi tim Anda dengan{" "}
          <span className="text-darkOrange">bermain bersama</span>
        </h2>
        {reasonData.map((item, i) => (
          <div
            key={i}
            className="flex-col md:max-w-[85%] lg:max-w-[70%] mx-auto"
          >
            <div
              className={`flex flex-col md:flex-row justify-center items-center mx-[2rem] gap-5 md:gap-10 pb-10 md:pb-0 ${
                i === 1 && "md:flex-row-reverse md:text-end"
              }`}
            >
              <Image
                src={item.icon}
                alt="icon"
                className="max-w-[300px] object-cover"
              />
              <div className="flex flex-col">
                <h4 className="text-darkPurple font-bold mt-4 mb-2 text-xl">
                  {item.title}
                </h4>
                <p className="text-[17px]">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Why;
