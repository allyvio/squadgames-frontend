import React from "react";
import { notFound } from "next/navigation";
import { client } from "@/lib/contentful";
import RichText from "@/components/rich-text";
import { DateTime } from "luxon";

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
    title: article.fields.title.toString(),
    description: article.fields.client_desc.toString(),
  };
}

const CaseStudy = async ({ params }: { params: { slug: string } }) => {
  const articles = await client.getEntries({ content_type: "caseStudy" });
  const article = articles?.items?.find(
    (article) =>
      article.fields.title.toString().toLowerCase().replaceAll(" ", "-") ===
      params.slug
  );

  if (!article) notFound();

  return (
    <div className="container my-10">
      <div className="flex flex-col md:w-[60%] m-auto">
        <h1 className="text-lg md:text-4xl font-bold mb-5">
          {article?.fields?.title.toLocaleString()}
        </h1>
        <small className="text-sm text-gray-500">
          {DateTime.fromISO(
            article?.fields?.createdAt.toLocaleString()
          ).toFormat("DD")}
        </small>
        {/* <small className="text-sm text-gray-500">
          Posted by <strong>{article?.fields?.author.toLocaleString()}</strong>
        </small> */}
        <div className="mt-10">
          <RichText content={article.fields.article} />
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
