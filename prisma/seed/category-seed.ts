import db from "../../src/lib/db";

export async function upsertCategories() {
  await db.category.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Power tools",
      image:
        "https://images.pexels.com/photos/162625/grinder-hitachi-power-tool-flexible-162625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      products: {
        connect: [{ id: 1 }, { id: 2 }],
      },
    },
  });
  await db.category.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: "Sale",
      image:
        "https://media.istockphoto.com/id/1337275668/sv/foto/sale-concept-percent-sign-price-discount-on-speech-bubble.jpg?s=2048x2048&w=is&k=20&c=9bC8T8f_jr7CqM9SdJxZL7cT0I6d-UnSGzldZ97aygQ=",
      products: {
        connect: [{ id: 1 }, { id: 2 }],
      },
    },
  });
  await db.category.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: "Hand tools",
      image:
        "https://images.pexels.com/photos/5973969/pexels-photo-5973969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      products: {
        connect: [{ id: 1 }, { id: 2 }],
      },
    },
  });
}
