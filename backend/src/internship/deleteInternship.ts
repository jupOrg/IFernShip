import { db } from "../db";

export async function deleteInternship(id: string) {
  const internship = await db.internship.findUnique({ where: { id } });
  if (!internship) {
    throw { status: 404, message: "Internship not found" };
  }
  await db.internship.delete({ where: { id } });
  return internship;
}
