import Link from "next/link";
import db from "../lib/db";

export default async function Navbar() {
  const categories = await db.category.findMany({});

  return (
    <nav className="flex flex-1 justify-center">
      {categories.map((c) => (
        <div className="p-2 text-lg" key={c.id}>
          <Link href={`/${c.name}`}>{c.name}</Link>
        </div>
      ))}
    </nav>
  );
}
