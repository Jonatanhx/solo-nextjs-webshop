import db from "../../src/lib/db";

export async function upsertProducts() {
  try {
    await db.product.upsert({
      where: { id: 1 },
      update: {
        name: "Seeded product 1",
        price: 99,
      },
      create: {
        name: "Seeded product 1",
        description:
          "This is a temporarily seeded product to fill out the void",
        image:
          "https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    });

    await db.product.upsert({
      where: { id: 2 },
      update: {
        name: "Seeded product 2",
        price: 99,
      },
      create: {
        name: "Seeded product 2",
        description:
          "This is another temporarily seeded product to fill out the void",
        image:
          "https://images.pexels.com/photos/14650707/pexels-photo-14650707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    });
  } catch (error) {
    throw new Error();
  }
}
