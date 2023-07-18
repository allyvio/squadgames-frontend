"use client";

import { FC, useState, SetStateAction, Dispatch } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import Image from "next/image";
import { accordionData } from "@/config/accordion";
import { Collapse } from "react-collapse";

interface AccordionProps {
  section: {
    title: string;
    icon: any;
    desc: string;
  };
  isActiveSection: boolean;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  sectionIndex: number;
}
const AccordionSection: FC<AccordionProps> = ({
  section,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };
  return (
    <div className="bg-blue flex flex-col rounded-md shadow-xl">
      <div
        onClick={() => toggleSection()}
        className={`flex items-center cursor-pointer px-3 md:px-6 py-3 
        gap-5
       `}
      >
        <Image
          src={section.icon}
          alt="icon"
          className="w-[30px] md:w-[50px] h-[30px] md:h-[50px]"
        />
        <h3 className="uppercase text-white font-bold text-xl">
          {section.title}
        </h3>
        <div className="text-4xl md:text-5xl text-white ml-auto">
          {isActiveSection ? (
            <MdOutlineKeyboardArrowUp />
          ) : (
            <MdOutlineKeyboardArrowDown />
          )}
        </div>
      </div>
      <Collapse isOpened={isActiveSection}>
        <div className={`px-5 md:px-[6rem] pb-5 pt-1 text-lg`}>
          <p className="text-white">{section.desc}</p>
        </div>
      </Collapse>
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="flex flex-col gap-2">
      {accordionData.map((section, index) => (
        <AccordionSection
          key={index}
          section={section}
          isActiveSection={index === activeIndex}
          setActiveIndex={setActiveIndex}
          sectionIndex={index}
        />
      ))}
    </div>
  );
};

export default Accordion;
