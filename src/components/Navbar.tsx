import Link from "next/link";
import db from "../lib/db";

export default async function Navbar() {
  const categories = await db.category.findMany({});

  return (
    <nav className="flex flex-1 justify-center">
      {categories.map((c) => (
        <div className="text-lg " key={c.id}>
          <div className="p-2 border-b border-transparent hover:border-black ">
            <Link href={`/Category/${c.name}`}>{c.name}</Link>
          </div>
        </div>
      ))}
    </nav>
  );
}
