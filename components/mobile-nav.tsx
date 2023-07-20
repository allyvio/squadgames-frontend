import { FC, SetStateAction, Dispatch } from "react";
import Link from "next/link";
import { WebNavItem } from "@/types";

interface MobileNavProps {
  items: WebNavItem[];
  showNav: boolean;
  setShowNav: Dispatch<SetStateAction<boolean>>;
}

const MobileNav: FC<MobileNavProps> = ({ items, setShowNav, showNav }) => {
  return (
    <div className="container">
      {items?.length ? (
        <nav
          className={`flex flex-col w-full h-screen  cursor-pointer py-2 bg-white`}
        >
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target={`${item.blank ? "_blank" : "_self"}`}
              className={`flex items-center my-0 mx-auto w-full py-3 border-b border-[#ddd] ${
                index === 0 && "border-t"
              }`}
              onClick={() => setShowNav(false)}
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
