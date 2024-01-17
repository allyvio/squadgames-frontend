import React from "react";

const Topics = () => {
  const data = [
    {
      id: 1,
      title: "Teamwork/Collaboration",
      desc: "Kembangkan kemampuan kerja sama melalui aktivitas interaktif dan tujuan bersama. Berkolaborasi dengan efektif untuk hasil yang luar biasa.",
    },
    {
      id: 2,
      title: "Resources Management",
      desc: "Pelajari alokasi sumber daya yang efisien. Maksimalkan potensi dengan bijak mengelola waktu, energi, dan alat.",
    },
    {
      id: 3,
      title: "Leadership",
      desc: "Setiap individu memiliki bakal pemimpin di dalam dirinya. Kembangkan kualitas kepemimpinan yang menginspirasi dan membimbing.",
    },
    {
      id: 4,
      title: "Team Building",
      desc: "Bangun ikatan emosional yang kuat dalam tim. Fasilitasi persatuan melalui training membangun kepercayaan dan komunikasi efektif.",
    },
    {
      id: 5,
      title: "Problem Solving",
      desc: "Asah pemikiran kritis untuk memecahkan permasalahan yang ada. Hadapi tantangan secara strategis dan berikan solusi paling relevan.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-start text-center gap-5">
      {data.map((topic, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-md md:w-[80%] lg:w-[30%] min-h-[180px]"
        >
          <div className="py-6 px-8 flex flex-col ">
            <p className="text-lg font-bold mb-2">{topic.title}</p>
            <p>{topic.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Topics;
