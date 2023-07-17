import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { WebNavItem } from "@/types";

interface MobileNavProps {
  items: WebNavItem[];
}

const MobileNav: FC<MobileNavProps> = ({ items }) => {
  return (
    <div className="container">
      {items?.length ? (
        <nav
          className={`flex flex-col w-full h-screen  cursor-pointer py-2 bg-white`}
        >
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={`flex items-center my-0 mx-auto w-full py-3 border-b border-[#ddd] ${
                index === 0 && "border-t"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
};

export default MobileNav;
