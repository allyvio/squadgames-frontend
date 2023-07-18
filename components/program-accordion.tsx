// "use client";

// import { FC, useState, SetStateAction, Dispatch } from "react";
// import {
//   MdOutlineKeyboardArrowDown,
//   MdOutlineKeyboardArrowUp,
// } from "react-icons/md";
// import { programData } from "@/config/program";
// import { Collapse } from "react-collapse";

// type panel = {
//   title: string;
//   desc: string;
//   link: string;
// }

// type tab = {
//   name: string,
//   panels: panel[]
// }

// interface AccordionProps {
//   section: tab[];
//   isActiveSection: boolean;
//   setActiveIndex: Dispatch<SetStateAction<number>>;
//   sectionIndex: number;
// }
// const AccordionSection: FC<AccordionProps> = ({
//   section,
//   isActiveSection,
//   setActiveIndex,
//   sectionIndex,
// }) => {
//   const toggleSection = () => {
//     const nextIndex = isActiveSection ? null : sectionIndex;
//     setActiveIndex(nextIndex);
//   };

//   // console.log(section);
//   return (
//     <div className=" flex flex-col rounded-md border border-gray-300 ">
//       <div
//         onClick={() => toggleSection()}
//         className={`flex items-center cursor-pointer p-5
//         rounded-md
//        `}
//       >
//         <h3 className="font-bold">{}</h3>
//         <div className="text-xl md:text2xl  ml-auto">
//           {isActiveSection ? (
//             <MdOutlineKeyboardArrowUp />
//           ) : (
//             <MdOutlineKeyboardArrowDown />
//           )}
//         </div>
//       </div>

//       <Collapse isOpened={isActiveSection}>
//         <div className="pl-5 pr-[3rem] md:pr-[5rem] pb-5 rounded-b-lg">
//           <p className="">{}</p>
//         </div>
//       </Collapse>
//     </div>
//   );
// };

// const ProgramAccordion = () => {
//   const [activeIndex, setActiveIndex] = useState<number>(0);

//   return (
//     <div className="flex flex-col gap-2">
//       {programData?.map((section, index) => (
//         <AccordionSection
//           key={index}
//           section={section}
//           isActiveSection={index === activeIndex}
//           setActiveIndex={setActiveIndex}
//           sectionIndex={index}
//         />
//       ))}
//     </div>
//   );
// };

// export default ProgramAccordion;
