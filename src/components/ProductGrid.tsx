import Image from "next/image";
import db from "../lib/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default async function ProductGrid() {
  const products = await db.product.findMany({});
  return (
    <section className="flex flex-row">
      {products.map((product) => (
        <Card key={product.id} className="bg-white max-w-60 rounded-xl m-1">
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
            <CardDescription className="truncate text-ellipsis line-clamp-1">
              {product.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Image
              src={product.image}
              alt="Products according to category name"
              width={250}
              height={250}
              objectFit="contain"
            ></Image>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
