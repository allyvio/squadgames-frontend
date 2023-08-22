"use client";

import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/zoom";

interface Gallery {
  images?: any;
}

const Gallery: FC<Gallery> = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Zoom]}
      slidesPerView={1}
      // navigation
      // scrollbar
      loop={true}
      zoom={true}
      pagination={{ clickable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        768: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
      className="mySwiper"
    >
      {images.map((image, i) => (
        <SwiperSlide key={i} className="">
          <div className="mb-[2rem] overflow-hidden relative rounded-md">
            <div className=" border-darkPurple rounded-2xl">
              <Image
                src={image}
                width={100}
                height={100}
                alt="expert"
                className="w-full h-96 bg-gray-200 object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Gallery;
