import React from "react";
import Image from "next/image";

const TeamBuildingCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center content-center gap-5 lg:max-w-[80%] xl:max-w-[60%]">
      {/* cards goes here */}
      <div className="card">
        <Image src="/images/beda.png" alt="beda" width={100} height={100} />
        <h4 className="text-darkPurple font-bold mt-4 mb-2 text-xl">
          Lebih Beda
        </h4>
        <p className="text-center">
          Anda akan merasakan gabungan challenge kreatif, venue yang asik,
          cerita yang out of the box dibungkus dengan sentuhan teknologi
        </p>
      </div>
      <div className="card">
        <Image
          src="/images/kontekstual.png"
          alt="beda"
          width={120}
          height={100}
        />
        <h4 className="text-darkPurple font-bold mt-4 mb-2 text-xl">
          Lebih Kontekstual
        </h4>
        <p className="text-center">
          Anda akan merasakan gabungan challenge kreatif, venue yang asik,
          cerita yang out of the box dibungkus dengan sentuhan teknologi
        </p>
      </div>
      <div className="card">
        <Image
          src="/images/profesional.png"
          alt="beda"
          width={100}
          height={100}
        />
        <h4 className="text-darkPurple font-bold mt-4 mb-2 text-xl">
          Lebih Profesional
        </h4>
        <p className="text-center">
          Anda akan merasakan gabungan challenge kreatif, venue yang asik,
          cerita yang out of the box dibungkus dengan sentuhan teknologi
        </p>
      </div>
    </div>
  );
};

export default TeamBuildingCard;
