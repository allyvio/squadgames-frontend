import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoWhite from "@/public/logo-white.png";
import { footerData } from "@/config/footer";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";

const WebFooter = () => {
  return (
    <footer className="space-y-6 pt-[3rem] lg:pt-[5rem] bg-darkPurple">
      <div className="container flex flex-col lg:flex-row text-white pb-0 md:pb-[2rem]">
        <div className="mr-[5rem] mb-[2rem]">
          <Image src={logoWhite} alt="squadgames" className="w-[200px]" />
        </div>
        <div className="flex flex-col md:flex-row">
          {footerData?.map((data, i) => (
            <div key={i} className="flex flex-col mr-[3rem] mb-[1rem]">
              <h4 className="mb-1 md:mb-3 font-extrabold">{data.title}</h4>
              {data?.items?.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <Link
                    href={`${item.link}`}
                    target={`${item.blank ? "_blank" : "_self"}`}
                    className="hover:text-orange md:mt-[3px]"
                  >
                    {item.name} <span className="text-orange">{item.add}</span>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="container flex flex-col md:flex-row text-white border-t border-t-[#D9BCFF] py-[1rem]">
        <div className="flex gap-3 text-white text-3xl mr-[10rem] mb-[2rem]">
          <Link
            href="https://www.linkedin.com/company/peopleshift"
            target="_blank"
            className=""
          >
            <AiFillLinkedin />
          </Link>
          <Link
            href="https://www.instagram.com/squadgames.id"
            target="_blank"
            className=""
          >
            <AiFillInstagram />
          </Link>
          <Link href="https://facebook.com" target="_blank" className="">
            <AiFillFacebook />
          </Link>
          <Link href="https://youtube.com" target="_blank" className="">
            <AiFillYoutube />
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <p>puti@peopleshift.id</p>
          <p>
            Satrio Tower 6th Floor, Unit 1 Mega Kuningan, Jl. Prof. DR. Satrio
            C4, Jakarta 12950
          </p>
          <p>+62 812-9079-4006 (Jagad) | +62 821-1557-0991 (Puti)</p>
        </div>
      </div>
      <div className="text-center text-white bg-darkPurple2 py-4">
        &copy; Copyright 2023 PT Edukasi Talenta Indonesia.
      </div>
    </footer>
  );
};

export default WebFooter;
