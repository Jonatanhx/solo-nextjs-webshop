"use client";
import { useParams } from "next/navigation";

export default function CategoryTitle() {
  const params = useParams();

  let slug: string = "";

  if (typeof params.slug === "string") {
    slug = params.slug;
  }

  const decodedSlug = decodeURIComponent(slug);

  return <p className="text-white">{decodedSlug}</p>;
}
