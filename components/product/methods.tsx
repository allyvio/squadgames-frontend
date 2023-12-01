import React from "react";
import { SiGoogleclassroom } from "react-icons/si";
import { TbPlayFootball } from "react-icons/tb";
import { GoCommentDiscussion } from "react-icons/go";
import { FaPeopleRobbery } from "react-icons/fa6";

const Methods = () => {
  const data = [
    {
      id: 1,
      icon: <SiGoogleclassroom />,
      title: "Workshop",
      desc: "Aktif dalam pembelajaran praktis dengan panduan ahli dan interaksi.",
    },
    {
      id: 2,
      icon: <TbPlayFootball />,
      title: "Learning by doing",
      desc: "Pelajari melalui tindakan langsung, eksplorasi, dan pengalaman langsung.",
    },
    {
      id: 3,
      icon: <GoCommentDiscussion />,
      title: "Diskusi",
      desc: "Tukar ide, pendapat, dan wawasan untuk memperdalam pemahaman bersama.",
    },
    {
      id: 4,
      icon: <FaPeopleRobbery />,
      title: "Studi Kasus",
      desc: "Aplikasikan pengetahuan pada studi kasus nyata untuk pemahaman lebih mendalam.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-start text-center gap-5">
      {data.map((method, i) => (
        <div
          key={i}
          className="w-[100%] md:w-[20%] flex flex-col justify-center items-center"
        >
          <div className="text-[2.5rem] mb-5">{method.icon}</div>
          <h2 className="font-bold mb-2">{method.title}</h2>
          <p>{method.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Methods;
