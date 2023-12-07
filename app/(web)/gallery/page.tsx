import Gallery from "@/components/gallery";

import { client } from "@/lib/contentful";

async function getData() {
  const res = await client.getEntries({ content_type: "gallery" });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (res.errors) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res;
}

const GalleryPage = async () => {
  const galleries = await getData();

  return (
    <>
      <Gallery galleries={galleries.items} />
    </>
  );
};

export default GalleryPage;
