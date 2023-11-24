import React, { FC } from "react";
import FaqProductAccordion from "./faq-product-accordion";
import { ProductFaq } from "@/types";

type FaqProps = ProductFaq;

const FaqProduct: FC<FaqProps> = ({ title, desc, contents }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between w-full">
      <div className="flex flex-col md:mr-[5rem] mb-10">
        <h4 className="mb-5">Frequently Asked Questions (FAQ)</h4>
        <h2 className="text-3xl font-semibold mb-5">Apa itu {title}?</h2>
        <p>{desc}</p>
      </div>
      <div className="md:min-w-[60%]">
        <FaqProductAccordion contents={contents} />
      </div>
    </div>
  );
};

export default FaqProduct;
