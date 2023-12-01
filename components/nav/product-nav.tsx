import React from "react";
import { ProductNavItem } from "@/types";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import { HiArrowLongRight } from "react-icons/hi2";

type TDropdownProps = {
  productNav?: ProductNavItem;
  showDropdown: boolean;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
};

const DropdownNav: React.FC<TDropdownProps> = ({
  showDropdown,
  setShowDropdown,
  productNav,
}) => {
  return (
    <>
      {showDropdown && (
        <div
          onMouseOver={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
          className="bg-white border rounded-md absolute top-[90%] left-[1%] lg:left-[15%] xl:left-[20%] w-[850px] hidden md:grid grid-cols-[40%_60%]"
        >
          <Tab.Group>
            <Tab.List as="div" className="flex flex-col p-[2rem] bg-gray-100">
              {Object?.keys(productNav).map((item, i) => (
                <Tab
                  key={i}
                  className="ui-selected:bg-darkPurple ui-selected:text-white ui-not-selected:text-black flex p-3 mr-3 md:pr-[3rem] outline-none rounded"
                >
                  {item}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels as="div" className=" flex flex-col p-[2rem]">
              {Object?.values(productNav).map((item, i) => (
                <Tab.Panel
                  key={i}
                  className="flex flex-col h-full justify-between items-start"
                >
                  <p className="text-start">{item.desc}</p>

                  <div className="flex text-darkPurple pt-[1rem] border-t w-full items-center">
                    <Link
                      href={`/product/${item.href}`}
                      onClick={() => setShowDropdown(false)}
                      className="flex items-center gap-2 hover:translate-x-2 ease-in-out duration-300"
                    >
                      <span className="hover:underline">
                        {`Lihat selengkapnya tentang  ${item.title}`}
                      </span>
                      <span className="text-lg ml-[-5px]">
                        <HiArrowLongRight />
                      </span>
                    </Link>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      )}
    </>
  );
};

export default DropdownNav;
