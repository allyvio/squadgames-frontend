import React, { FC } from "react";
import { caseStudyData } from "@/config/case-study";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import { type ProductCaseStudy } from "@/types";

type CaseStudyProps = {
  caseStudies: ProductCaseStudy[];
};

const CaseStudy: FC<CaseStudyProps> = ({ caseStudies }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {caseStudies.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl overflow-hidden shadow-md relative"
        >
          <Image
            src={item.image}
            alt="photo"
            width={100}
            height={100}
            className="w-full h-56 object-cover"
          />
          <div className="py-4 px-10 flex flex-col">
            <p className="text-lg font-bold mb-2">{item.title}</p>
            <p>{item.desc}</p>
          </div>
          <div className="flex py-5 px-10 text-darkPurple">
            <Link
              href={item.href}
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
  );
};

export default CaseStudy;
