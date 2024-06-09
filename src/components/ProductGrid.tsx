import db from "../lib/db";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default async function ProductGrid() {
  const products = await db.product.findMany({});
  return (
    <div>
      {products.map((product) => (
        <Card key={product.id} className="bg-white">
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
