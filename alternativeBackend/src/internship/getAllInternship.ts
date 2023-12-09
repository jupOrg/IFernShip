import { db } from "../db";

export async function getAllInternship() {
  const internship = await db.internship.findMany();
  return internship;
}
