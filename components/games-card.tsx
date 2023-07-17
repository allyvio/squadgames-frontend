import React from "react";
import Image from "next/image";
import { gamesData } from "@/config/games";

const GamesCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:mx-[10rem]">
      {gamesData.map((game, i) => (
        <div
          key={i}
          className="bg-white rounded-3xl overflow-hidden shadow-md relative"
        >
          <Image
            src={game.pic}
            alt="foto"
            className="w-full h-48 object-cover"
          />
          <div className="py-6 px-10">
            <Image src={game.logo} alt="logo" className="max-w-[200px] mb-4" />
            <p className=" text-base">{game.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GamesCard;
