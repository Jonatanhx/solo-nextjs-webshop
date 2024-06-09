import Image from "next/image";
import db from "../../src/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default async function CategoryGrid() {
  const categories = await db.category.findMany({});
  return (
    <section>
      {categories.map((category) => (
        <Card key={category.id}>
          <CardHeader>
            <CardTitle>{category.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src={category.image}
              alt="Various tools for sale according to title name"
              width={250}
              height={250}
            ></Image>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
