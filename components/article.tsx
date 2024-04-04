import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import OtherCaseStudy from "./other-case-study";
import dynamic from "next/dynamic";
import Markdown from "react-markdown";

type TArticleProps = {
  article: any;
};

const Article: FC<TArticleProps> = ({ article }) => {
  return (
    <div className="mt-10">
      <div className="container flex flex-col">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-5xl md:leading-tight  font-bold mb-5">
              {article?.fields?.title}
            </h1>
            <p className="mb-3">{article?.fields?.trainingDesc}</p>
            <div className="my-[1rem]">
              <Link
                href="https://wa.me/6282115570991?text=Hi%20Squadgames,%20saya%20ingin%20konsultasi%20tentang%20training"
                target="_blank"
                className="btn-md-orange"
              >
                Jadwalkan Konsultasi Gratis
              </Link>
            </div>
          </div>

          {/* ===== image ===== */}
          <Image
            src={`https:${article.fields.image.fields.file.url}`}
            width={article.fields.image.fields.file.details.image.width}
            height={article.fields.image.fields.file.details.image.height}
            alt="image"
            className="w-full md:w-[50%] h-[23rem] object-cover rounded-md"
          />
        </div>

        {/* ===== training score ===== */}
        <div className="flex flex-col my-[3rem]">
          <h4 className="text-center my-5">
            Kepuasan peserta terhadap training ini:
          </h4>
          <div className="flex whitespace-nowrap overflow-auto w-full shadow-md">
            <div className="training-score">
              <span>{`${article.fields.customerSatisfaction}/6`}</span>
              <p>Customer Satisfaction</p>
            </div>
            <div className="training-score">
              <span>{`${article.fields.trainerSatisfaction}/6`}</span>
              <p>Trainer Satisfaction</p>
            </div>
            {/* <div className="training-score">
              <span>{`${article.fields.skillEnhancement}%`}</span>
              <p>Skill Enhancement After Program</p>
            </div> */}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 w-full md:my-10 items-start">
          {/* ===== sidebar ===== */}
          <div className="sidebar-article ">
            <div>
              <h5>Training</h5>
              <p>{article.fields.product_name.fields.name}</p>
            </div>
            <div>
              <h5>Games</h5>
              {article.fields.games?.map((game, index) => (
                <p key={index} className="flex flex-col">
                  {game.fields.name}
                </p>
              ))}
            </div>
            <div>
              <h5>Customer Satisfaction</h5>
              <p>
                Klien memberikan nilai{" "}
                <span className="font-semibold">
                  {article.fields.customerSatisfaction}
                </span>{" "}
                dari skala <span className="font-semibold">6</span> yang berarti
                sangat puas dengan keseluruhan training ini
              </p>
            </div>
            <div>
              <h5>Trainer Satisfaction</h5>
              <p>
                Klien memberikan nilai{" "}
                <span className="font-semibold">
                  {article.fields.trainerSatisfaction}
                </span>{" "}
                dari skala <span className="font-semibold">6</span> yang berarti
                sangat puas dengan trainer kami
              </p>
            </div>
            {/* <div>
              <h5>Skill Enhancement</h5>
              <p>
                Peningkatan skill setelah mengikuti training ini adalah sebesar{" "}
                <span className="font-semibold">
                  {`${article.fields.skillEnhancement}%`}
                </span>{" "}
                yang berarti sangat tinggi
              </p>
            </div> */}
          </div>

          {/* ===== article ===== */}
          <div className="flex flex-col md:w-[70%] mt-10">
            {article.fields.video && (
              <div className="h-56 md:h-96 w-full mb-10 rounded-md relative overflow-hidden">
                <YoutubePlayer url={article.fields.video} />
              </div>
            )}
            <div className="flex md:w-[80%] m-auto text-center font-medium italic text-lg mb-10">
              <p>{`"${article.fields.clientTesti}"`}</p>
            </div>
            <Markdown className="markdown">{article.fields.article}</Markdown>
          </div>
        </div>
      </div>

      {/* ===== other case study ===== */}
      <div className="bg-baby py-10">
        <div className="container">
          <OtherCaseStudy />
        </div>
      </div>
    </div>
  );
};

export default Article;

export const YoutubePlayer = dynamic(
  () => import("@/components/youtube-player"),
  {
    ssr: false,
  }
);
