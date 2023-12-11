"use client";

import React, { FC, useState, useEffect } from "react";
import { ProductNavItem, WebNavItem } from "@/types";
import Link from "next/link";
import Image from "next/image";
import useScrollListener from "@/hooks/use-scroll";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import MobileNav from "./mobile/mobile-nav";
import logo from "@/public/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import DropdownNav from "./dropdown-nav";
import { IoLogoWhatsapp } from "react-icons/io";

type TWebNavProps = {
  items?: WebNavItem[];
  productNav?: ProductNavItem;
  children?: React.ReactNode;
};

const WebNav: FC<TWebNavProps> = ({ items, productNav, children }) => {
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();
  const [showInfo, setShowInfo] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const _classList = [];
    if (scroll.y > 150) {
      _classList.push("info--hidden");
    }

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <div className={`web-header ${!showNav ? navClassList.join(" ") : null}`}>
      {/* ========== info ========== */}
      {showInfo && (
        <div className="info">
          <p className="text-center">
            Konsultasikan kebutuhan team building Anda dengan expertise kami!{" "}
            <Link href="/contact" className="btn-sm-purple">
              Lihat info
            </Link>
          </p>

          {/* <button
            onClick={() => setShowInfo(false)}
            className="absolute right-5 top-10 sm:top-4 text-black"
          >
            x
          </button> */}
        </div>
      )}
      <header className="web-nav">
        <div className="container flex justify-between items-center">
          <div className="flex items-center">
            {/* ========== logo ========== */}
            <Link
              href="/"
              className="flex mr-10"
              onClick={() => setShowNav(false)}
            >
              <Image src={logo} alt="squadgames" className="w-auto h-[35px]" />
            </Link>

            {/* ========== nav menu ========== */}
            {items?.length ? (
              <nav className="hidden md:flex ">
                {items?.map((item, index) => (
                  <div
                    key={index}
                    onMouseOver={
                      index === 1 ? () => setShowDropdown(true) : null
                    }
                    onMouseLeave={
                      index === 1 ? () => setShowDropdown(false) : null
                    }
                    className="p-1 flex"
                  >
                    <Link
                      href={item.href}
                      target={`${item.blank ? "_blank" : "_self"}`}
                      onClick={() => setShowDropdown(false)}
                      className="py-2 px-4 hover:text-darkPurple flex items-center"
                    >
                      {item.title}

                      {item.arrow && (
                        <IoIosArrowDown className="text-[12px] ml-1" />
                      )}
                    </Link>
                  </div>
                ))}
              </nav>
            ) : null}

            <DropdownNav
              productNav={productNav}
              showDropdown={showDropdown}
              setShowDropdown={setShowDropdown}
            />
          </div>

          {/* ========== hamburger ========== */}
          <div className="bg-transparent w-10 h-10 flex justify-center items-center">
            <button
              className="text-darkPurple text-2xl p-2 md:hidden"
              onClick={() => setShowNav(!showNav)}
            >
              {showNav ? <AiOutlineClose /> : <FiMenu />}
            </button>
          </div>

          {/* ========== hotline ========== */}
          <div className="hidden md:block">
            <div className="flex justify-center">
              <Link
                href="https://wa.me/6282115570991?text=Hi%20Squadgames,%20saya%20ingin%20konsultasi%20tentang%20training"
                target="_blank"
                className="btn-md-orange"
              >
                <span className="text-white text-xl mr-2">
                  <IoLogoWhatsapp />
                </span>
                WhatsApp Kami
              </Link>
            </div>
          </div>
        </div>

        {/* ========== mobile nav ========== */}
        {showNav && (
          <MobileNav items={items} showNav={showNav} setShowNav={setShowNav} />
        )}
      </header>
    </div>
  );
};

export default WebNav;
