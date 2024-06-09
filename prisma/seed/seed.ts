import { db } from "../db";
import { upsertUsers } from "./user-seed";

async function main() {
  await upsertUsers();
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
