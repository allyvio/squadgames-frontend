import React from "react";
import Image from "next/image";
import Link from "next/link";
import { gamesData } from "@/config/games";
import { HiArrowLongRight } from "react-icons/hi2";

const Games = () => {
  return (
    <section className="space-y-6 py-[3rem] md:py-[5rem] bg-games-gradient">
      <div className="container flex-row justify-center items-center">
        <p className="text-center text-lg mb-2 text-white">
          Training tapi bermain games
        </p>
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-[3rem] md:mb-[5rem] mx-auto md:max-w-[70%] text-white">
          Games yang dirancang untuk meningkatkan soliditas tim dengan aktivitas
          yang menyenangkan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:mx-[10rem]">
          {gamesData.map((game, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden shadow-md relative"
            >
              <Image
                src={game.pic}
                alt="foto"
                className="w-full h-56 object-cover"
              />
              <div className="py-4 px-10 flex flex-col lg:h-48">
                <Image
                  src={game.logo}
                  alt="logo"
                  className="max-w-[200px] mb-4"
                />
                <p className=" text-base">{game.desc}</p>
                {/* <div className="flex mx-auto py-2"> */}

                {/* </div> */}
              </div>
              <div className="flex py-[2rem] px-10 text-darkPurple">
                <Link
                  href={game.link}
                  className="flex items-center gap-2 hover:translate-x-2 ease-in-out duration-300"
                >
                  <span className="hover:underline">Lihat studi kasus</span>
                  <span className="text-lg scale-x-150">
                    <HiArrowLongRight />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
