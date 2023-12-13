import { Internship } from "@prisma/client";
import { db } from "../db";

export async function updateInternship(internship: Internship, id: string) {
  const currentInternship = await db.internship.findUnique({
    where: { id },
  });

  if (!currentInternship) {
    throw { status: 404, message: "Internship not found" };
  }

  const newInternship = await db.internship.update({
    where: { id },
    data: internship,
  });

  return newInternship;
}
