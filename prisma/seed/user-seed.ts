"use server";

import db from "../../src/lib/db";

export async function upsertUsers() {
  try {
    await db.user.upsert({
      where: { email: "jonatanhelander@hotmail.com" },
      update: {
        name: "Jonatan Helander",
      },
      create: {
        email: "jonatanhelander@hotmail.com",
        name: "Jonatan Helander",
      },
    });
  } catch (error) {
    throw new Error();
  }
}
