import React from "react";
import FaqAccordion from "./faq-accordion";

const Faq = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between w-full">
      <div className="flex flex-col mr-[5rem] mb-10">
        <h4 className="mb-5">Frequently Asked Questions (FAQ)</h4>
        <h2 className="text-3xl font-semibold mb-5">Apa itu Squadgames?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          maiores reiciendis consectetur quaerat dolor, labore praesentium!
          Recusandae itaque quas exercitationem ipsum fugiat eum, magni
          aspernatur deleniti eius mollitia. Nesciunt autem facilis excepturi!
          Molestias suscipit corporis numquam nam rem dolorum, sapiente corrupti
          eligendi blanditiis ipsum quam necessitatibus nesciunt libero.
          <br />
          <br />
          At laudantium ad fuga eaque sapiente aliquid nam iure eum dolore eos
          quasi incidunt deleniti architecto nisi, quaerat iste quos recusandae
          iusto, facilis molestiae nobis modi dolores! Ut corporis quo magnam
          tempore voluptatibus accusamus, sint adipisci aperiam aut eum nesciunt
          qui. Magnam id, esse assumenda dolore fugit quas nisi sapiente
          dignissimos tempore!
        </p>
      </div>
      <div className="min-w-[60%]">
        <FaqAccordion />
      </div>
    </div>
  );
};

export default Faq;
