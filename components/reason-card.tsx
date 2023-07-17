import React from "react";
import Image from "next/image";
import { reasonData } from "@/config/reason";

const ReasonCard = () => {
  return (
    <>
      {reasonData.map((item, i) => (
        <div key={i} className="flex-col md:max-w-[85%] lg:max-w-[70%] mx-auto">
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
    </>
  );
};

export default ReasonCard;
