"use client";

import React, { FC, useState, useEffect } from "react";
import { WebNavItem } from "@/types";
import Link from "next/link";
import Image from "next/image";
import useScrollListener from "@/hooks/useScroll";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import MobileNav from "./mobile-nav";

interface WebNavProps {
  items?: WebNavItem[];
  children?: React.ReactNode;
}

const WebNav: FC<WebNavProps> = ({ items, children }) => {
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();
  const [showInfo, setShowInfo] = useState(true);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const _classList = [];
    if (scroll.y > 250 && scroll.y - scroll.lastY > 0) {
      _classList.push("nav--hidden");
    }

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <>
      {showInfo && (
        <div className="info">
          <p className="text-center">
            Dapatkan diskon untuk video training soft skill pengembangan diri
            sekarang!{" "}
            <Link href="#" target="_blank" className="btn-sm-purple">
              Lihat info
            </Link>
          </p>

          <button
            onClick={() => setShowInfo(false)}
            className="absolute right-5 top-10 sm:top-4 text-black"
          >
            x
          </button>
        </div>
      )}
      <header className={`web-nav ${!showNav ? navClassList.join(" ") : null}`}>
        <div className={`container flex justify-between items-center`}>
          <Link href="/" className="flex">
            <Image src="/logo.png" alt="squadgames" width={125} height={50} />
          </Link>
          {items?.length ? (
            <nav className="hidden md:flex gap-6 ">
              {items?.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? "#" : item.href}
                  className="py-2 px-3 hover:text-darkPurple"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null}
          <div className="bg-transparent w-10 h-10 flex justify-center items-center">
            <button
              className="text-darkPurple text-2xl p-2 md:hidden"
              onClick={() => setShowNav(!showNav)}
            >
              {showNav ? <AiOutlineClose /> : <FiMenu />}
            </button>
          </div>
        </div>
        {showNav && <MobileNav items={items} />}
      </header>
    </>
  );
};

export default WebNav;
