import React from "react";
import ExpertCard from "./expert-card";

const MeetTheExpert = () => {
  return (
    <section className="space-y-6 pt-[3rem] md:pb-[3rem]">
      <div className="container justify-center items-center">
        <p className="text-center text-lg mb-2 ">
          Bertemu ahli di setiap bidang
        </p>
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-[2rem] md:mb-[4rem] mx-auto md:max-w-[70%] ">
          Para ahli yang akan menemani Anda bermain dan berakselerasi bersama
        </h2>
        <ExpertCard />
      </div>
    </section>
  );
};

export default MeetTheExpert;
