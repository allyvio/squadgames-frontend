"use client";

import Image from "next/image";
import { expertData } from "@/config/expert";
import { BsLinkedin } from "react-icons/bs";
import { HiArrowLongRight } from "react-icons/hi2";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ExpertCard = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      className="mySwiper"
    >
      {expertData.map((expert, i) => (
        <SwiperSlide key={i} className="">
          <div className="bg-darkPurple2 rounded-lg overflow-hidden mb-[2rem]">
            <div className=" border-darkPurple rounded-xl">
              <Image
                src={expert.pic}
                alt="expert"
                className="w-full h-72 bg-gray-200 object-contain rounded-t-lg"
              />
              <h3 className="bg-hero-gradient text-white text-lg uppercase text-center font-bold w-full h-auto py-2">
                {expert.name}
              </h3>
            </div>
            <div className="p-5 bg-white lg:h-56 border border-slate-200">
              <p className="mb-2 font-semibold">{expert.title}</p>
              <p className="">{expert.desc}</p>
            </div>

            <div className=" flex mx-auto py-2 text-white">
              <Link
                href={expert.link}
                target="_blank"
                className="flex justify-center mx-auto items-center gap-2 hover:translate-x-2 ease-in-out duration-300"
              >
                <span>
                  <BsLinkedin />
                </span>
                <span className="hover:underline">Lihat Profil </span>
                <span className="text-lg scale-x-150">
                  <HiArrowLongRight />
                </span>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ExpertCard;
