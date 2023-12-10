import { Internship } from "@prisma/client";
import { db } from "../db";

export async function createInternship(internship: Internship) {
  const newInternship = await db.internship.create({ data: internship });
  return newInternship;
}
