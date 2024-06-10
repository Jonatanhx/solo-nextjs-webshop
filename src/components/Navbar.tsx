import db from "../lib/db";
import { NavigationMenu, NavigationMenuItem } from "./ui/navigation-menu";

export default async function Navbar() {
  const categories = await db.category.findMany({});

  return (
    <NavigationMenu>
      {categories.map((c) => (
        <NavigationMenuItem key={c.id}>{c.name}</NavigationMenuItem>
      ))}
    </NavigationMenu>
  );
}
