import React from "react";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/images/team_monitor.png";
import { IoLogoWhatsapp } from "react-icons/io";
import CaseStudiesCard from "@/components/case-studies-card";
import { client } from "@/lib/contentful";

async function getData() {
  const res = await client.getEntries({ content_type: "caseStudy" });

  if (res.errors) {
    throw new Error("Failed to fetch data");
  }
  return res;
}

const CaseStudies = async () => {
  const data = await getData();

  return (
    <>
      <section className="space-y-6 py-[2rem] md:mt-10">
        <div className="flex-row">
          <div className="container flex flex-col md:flex-row justify-between">
            <div className="flex flex-col md:w-[60%]">
              <h1 className="text-[2rem] leading-tight md:text-[40px] font-semibold mb-5">
                Tingkatkan performa tim Anda lewat training yang menyenangkan
                bersama Squadgames.
              </h1>
              <p className="mb-5 max-w-[85%]">
                Pelajari bagaimana bisnis terkemuka telah berhasil membawa tim
                mereka mencapai tujuan bersama Squadgames.
              </p>
              <div className="mb-[3rem]">
                <Link
                  href="https://wa.me/6282115570991?text=Hi%20Squadgames,%20saya%20ingin%20konsultasi%20tentang%20training"
                  target="_blank"
                  className="btn-md-orange"
                >
                  <span className="text-white text-xl mr-2">
                    <IoLogoWhatsapp />
                  </span>
                  WhatsApp Konsultasi Gratis
                </Link>
              </div>
            </div>
            <div className="rounded-xl relative overflow-hidden">
              <Image
                src={heroImage}
                alt="image"
                className="mb-[3rem] object-cover h-70"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== case study ===== */}
      <section className="space-y-6 py-[3rem] bg-baby">
        <div className="container py-5">
          <h2 className="text-center text-2xl font-semibold mt-5 mb-[3rem]">
            Telah dipercaya 500+ perusahaan di berbagai industri
          </h2>
          <CaseStudiesCard data={data.items} />
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
