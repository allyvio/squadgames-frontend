import React from "react";
import FaqAccordion from "./faq-accordion";

const Faq = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between w-full">
      <div className="flex flex-col md:mr-[5rem] mb-10">
        <h4 className="mb-5">Frequently Asked Questions (FAQ)</h4>
        <h2 className="text-3xl font-semibold mb-5">Apa itu Squadgames?</h2>
        <p>
          Squadgames menciptakan puluhan produk menarik berbasis experiential
          learning, yang memunculkan berbagai produk mulai dari onboarding
          programs, professional competency training, hingga penciptaan learning
          process perusahaan yang komprehensif dan sesuai dengan kondisi yang
          dihadapi dunia SDM saat ini.
        </p>
      </div>
      <div className="md:min-w-[60%]">
        <FaqAccordion />
      </div>
    </div>
  );
};

export default Faq;
