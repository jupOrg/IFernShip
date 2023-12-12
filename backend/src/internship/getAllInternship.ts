import { db } from "../db";

export async function getAllInternship() {
  const internship = await db.internship.findMany({
    include: { enterprise: true },
  });
  return internship;
}
