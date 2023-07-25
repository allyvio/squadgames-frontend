import { FC, SetStateAction, Dispatch, useState } from "react";
import Link from "next/link";
import { WebNavItem } from "@/types";
import { BiSolidDownArrow } from "react-icons/bi";

interface MobileNavProps {
  items: WebNavItem[];
  showNav: boolean;
  setShowNav: Dispatch<SetStateAction<boolean>>;
}

const MobileNav: FC<MobileNavProps> = ({ items, setShowNav, showNav }) => {
  const [showProductNav, setShowProductNav] = useState(false);

  return (
    <div className="container">
      {items?.length ? (
        <nav
          className={`flex flex-col w-full h-screen  cursor-pointer py-2 bg-white`}
        >
          {items?.map((item, index) => (
            <div key={index}>
              {index === 0 ? (
                <div>
                  <button
                    onClick={() => setShowProductNav(!showProductNav)}
                    className="flex items-center justify-between my-0 mx-auto w-full py-3 border-b border-[#ddd] border-t 
                "
                  >
                    {item.title}{" "}
                    <span className="text-[12px] text-gray-600">
                      <BiSolidDownArrow />
                    </span>
                  </button>
                  {showProductNav && (
                    <div>
                      {item.products?.map((product, index) => (
                        <Link
                          key={index}
                          href={`product/${product.href}`}
                          target={`${item.blank ? "_blank" : "_self"}`}
                          className="flex items-center my-0 mx-auto w-full pl-6 py-2 border-b border-[#ddd] hover:text-darkPurple2"
                          onClick={() => setShowNav(false)}
                        >
                          {product.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  target={`${item.blank ? "_blank" : "_self"}`}
                  className={`flex items-center my-0 mx-auto w-full py-3 border-b border-[#ddd]`}
                  onClick={() => setShowNav(false)}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>
      ) : null}
    </div>
  );
};

export default MobileNav;
