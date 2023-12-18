import React from "react";
import { notFound } from "next/navigation";
import { client } from "@/lib/contentful";
import RichText from "@/components/rich-text";
import { DateTime } from "luxon";
import Image from "next/image";
import Article from "@/components/article";

export async function generateStaticParams() {
  const res = await client.getEntries({ content_type: "caseStudy" });
  return res.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const articles = await client.getEntries({ content_type: "caseStudy" });
  const article = articles?.items?.find(
    (article) =>
      article.fields.title.toString().toLowerCase().replaceAll(" ", "-") ===
      params.slug
  );

  return {
    title: article?.fields?.title?.toString(),
    description: article?.fields?.trainingDesc?.toString(),
  };
}

const CaseStudy = async ({ params }: { params: { slug: string } }) => {
  const data = await client.getEntries({ content_type: "caseStudy" });
  const caseStudy = data?.items?.find(
    (caseStudy) =>
      caseStudy.fields.title.toString().toLowerCase().replaceAll(" ", "-") ===
      params.slug
  );

  if (!caseStudy) notFound();

  return <Article article={caseStudy} />;
};

export default CaseStudy;
