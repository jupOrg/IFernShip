import { db } from "../db";

export async function getAllInternship() {
  const internship = await db.internship.findMany({
    include: {
      enterprise: {
        select: { name: true, picture: true, email: true },
      },
    },
  });
  return internship;
}
