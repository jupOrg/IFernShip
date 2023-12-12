import { db } from "../db";

export async function getInternship(id: string) {
  const internship = await db.internship.findUnique({
    where: { id },
    include: { enterprise: true },
  });
  if (!internship) {
    throw { status: 404, message: "Internship not found" };
  }
  return internship;
}
