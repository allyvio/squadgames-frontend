import React, { FC } from "react";
import { caseStudyData } from "@/config/case-study";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import { type ProductCaseStudy } from "@/types";
import { MaxChar } from "@/utils/max-char";
import { DateTime } from "luxon";

type TCaseStudiesProps = any;

const CaseStudiesCard: FC<TCaseStudiesProps> = ({ data }) => {
  const sortedData = data?.sort(
    (a, b) =>
      DateTime.fromISO(b.fields.createdAt.toLocaleString()).toMillis() -
      DateTime.fromISO(a.fields.createdAt.toLocaleString()).toMillis()
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {sortedData?.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl overflow-hidden shadow-md relative"
        >
          <Image
            src={`https:${item.fields.image.fields.file.url}`}
            width={item.fields.image.fields.file.details.image.width}
            height={item.fields.image.fields.file.details.image.height}
            alt="image"
            className="w-full h-56 object-cover"
          />

          <div className="py-4 px-10 flex flex-col justify-between h-auto">
            <div className="h-auto">
              <div className="flex flex-wrap gap-2 mb-2 text-purple">
                {item.fields.games?.map((game, index) => (
                  <span
                    key={index}
                    className="text-sm text-center py-1 px-2 border border-purple rounded "
                  >
                    {game?.fields?.name}
                  </span>
                ))}
              </div>
              <p className="text-lg font-semibold mb-2 min-h-[70px]">
                Case study: {item.fields.product_name?.fields?.name}
              </p>
              <p className="min-h-[100px]">{item.fields.title}</p>
            </div>
            <div className="flex text-darkPurple">
              <Link
                href={`/case-studies/${item.fields.title
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
                className="flex py-3 items-center gap-2 hover:translate-x-2 ease-in-out duration-300 hover:underline"
              >
                <span>Lihat studi kasus</span>
                <span className="text-lg scale-x-150">
                  <HiArrowLongRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaseStudiesCard;
