import Image from "next/image";
import db from "../lib/db";
import { Card, CardHeader, CardTitle } from "./ui/card";

export default async function CategoryGrid() {
  const categories = await db.category.findMany({});
  return (
    <section className="flex">
      {categories.map((category) => (
        <Card
          key={category.id}
          className="flex flex-col flex-grow-0 bg-neutral-600 text-white mx-2 max-w-100 rounded-xl border-black overflow-hidden transition ease-in-out delay-10 hover:-translate-y-1 hover:ring-4 duration-300"
        >
          <CardHeader className="flex items-center">
            <CardTitle>{category.name}</CardTitle>
          </CardHeader>
          <Image
            src={category.image}
            alt="Various tools for sale according to title name"
            width={600}
            height={600}
          ></Image>
        </Card>
      ))}
    </section>
  );
}
