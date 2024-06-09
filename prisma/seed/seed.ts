import db from "@/lib/db";
import { upsertProducts } from "./product-seed";
import { upsertUsers } from "./user-seed";

async function main() {
  await upsertUsers();
  await upsertProducts();
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
