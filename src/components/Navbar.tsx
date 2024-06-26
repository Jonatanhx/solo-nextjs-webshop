import Link from "next/link";
import db from "../lib/db";

export default async function Navbar() {
  const categories = await db.category.findMany({});

  return (
    <nav className="flex flex-1 justify-center">
      {categories.map((c) => (
        <div className="text-lg " key={c.id}>
          <div className="p-2 hover:bg-gradient-to-b from-transparent to-orange-500 rounded-t-4xl">
            <Link href={`/Category/${c.name}`}>{c.name}</Link>
          </div>
        </div>
      ))}
    </nav>
  );
}
