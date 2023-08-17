"use client";

import React, { FC } from "react";
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

interface Gallery {
  images?: any;
}

const Gallery: FC<Gallery> = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      // spaceBetween={10}

      slidesPerView={1}
      // navigation
      // scrollbar
      loop={true}
      // pagination={{ clickable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 4.3,
          spaceBetween: 10,
        },
      }}
      className="mySwiper"
    >
      {images.map((image, i) => (
        <SwiperSlide key={i} className="">
          <div className="mb-[2rem]">
            <div className=" border-darkPurple rounded-2xl">
              <Image
                src={image}
                width={100}
                height={100}
                alt="expert"
                className="w-full h-72 bg-gray-200 object-contain"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Gallery;
