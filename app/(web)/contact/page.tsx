import React from "react";
import Form from "@/components/contact/form";

const Contact = () => {
  return (
    <section className="space-y-6 py-[3rem] md:py-[5rem] ">
      <div className="container flex flex-col md:flex-row gap-5 justify-between">
        <div className="flex flex-col md:w-[50%] gap-2 pr-10">
          <h1 className="font-bold text-4xl">
            Ingin berkonsultasi kebutuhan Team Building Anda?
          </h1>
          <p>
            Cukup tinggalkan informasi kontak anda dan kebutuhan perusahaan
            anda. Tim kami akan memberikan penawaran menarik yang akan
            disesuaikan dengan kebutuhan yang anda inginkan.
          </p>
        </div>
        <div className="flex flex-col p-10 bg-[#e4e4e4] md:w-[50%] rounded-xl">
          <h2 className="text-center font-semibold text-xl mb-5">
            Selenggarakan Team Building Anda Bersama Kami!
          </h2>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
