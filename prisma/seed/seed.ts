import db from "../../src/lib/db";
import { upsertCategories } from "./category-seed";
import { upsertProducts } from "./product-seed";
import { upsertUsers } from "./user-seed";

async function main() {
  await upsertUsers();
  await upsertProducts();
  await upsertCategories();
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
