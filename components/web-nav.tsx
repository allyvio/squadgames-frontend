"use client";

import React, { FC, useState } from "react";
import { WebNavItem } from "@/types";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";

interface WebNavProps {
  items?: WebNavItem[];
  children?: React.ReactNode;
}

const WebNav: FC<WebNavProps> = ({ items, children }) => {
  const [navbar, setNavbar] = useState<boolean>(false);

  const changeColor = () => {
    if (window.scrollY > 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <header
      className={`z-40 fixed w-full bg-white border-b border-gray-300 transition-all ease-in-out duration-200 ${
        navbar ? "py-[12px]" : " pb-[17px] pt-[60px]"
      }`}
    >
      <div
        className={`${
          navbar ? "hidden" : "absolute"
        } bg-slate-100 z-41 top-0 w-full mx-auto text-center py-2 border-b border-gray-200`}
      >
        <p className="">
          Dapatkan video training soft skill pengembangan diri di{" "}
          <span className="text-darkOrange cursor-pointer">sini</span>
        </p>
      </div>
      <div
        className={`container flex justify-between items-center transition ease-in-out duration-300 `}
      >
        <Link href="/" className="flex">
          <Image src="/logo.png" alt="squadgames" width={180} height={50} />
        </Link>
        {items?.length ? (
          <nav className="flex gap-6">
            {items?.map((item, index) => (
              <Link key={index} href={item.disabled ? "#" : item.href}>
                {item.title}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
};

export default WebNav;
