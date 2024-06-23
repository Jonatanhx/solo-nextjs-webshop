import db from "../lib/db";

export default async function Navbar() {
  const categories = await db.category.findMany({});

  return (
    <div>
      {categories.map((c) => (
        <div key={c.id}>{c.name}</div>
      ))}
    </div>
  );
}
