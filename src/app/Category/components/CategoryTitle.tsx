"use client";
import { useParams } from "next/navigation";

export default function CategoryTitle() {
  const params = useParams();

  let slug: string = "";

  if (typeof params.slug === "string") {
    slug = params.slug;
  }

  const decodedSlug = decodeURIComponent(slug);

  return (
    <div className="bg-gradient-to-r p-4 from-orange-600 to-orange-500 mb-12 flex justify-center">
      <p className="text-white text-2xl font-bold">{decodedSlug}</p>
    </div>
  );
}
