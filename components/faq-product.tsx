import React, { FC } from "react";
import FaqProductAccordion from "./faq-product-accordion";
import { ProductFaq } from "@/types";

interface IFaq {
  faq: ProductFaq;
}

const FaqProduct: FC<IFaq> = ({ faq }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between w-full">
      <div className="flex flex-col md:mr-[5rem] mb-10">
        <h4 className="mb-5">Frequently Asked Questions (FAQ)</h4>
        <h2 className="text-3xl font-semibold mb-5">Apa itu {faq.title}?</h2>
        <p>{faq.desc}</p>
      </div>
      <div className="md:min-w-[60%]">
        <FaqProductAccordion faq={faq} />
      </div>
    </div>
  );
};

export default FaqProduct;
