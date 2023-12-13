import { Internship } from "@prisma/client";
import { db } from "../db";

export async function getAllInternship({ office }: Partial<Internship>) {
  const obj: object = office ? { where: { office: { search: office } } } : {};
  const internship = await db.internship.findMany({
    ...obj,
    include: {
      enterprise: {
        select: { name: true, picture: true, email: true },
      },
    },
  });
  return internship;
}
