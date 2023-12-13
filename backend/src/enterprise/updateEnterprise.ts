import { Enterprise } from "@prisma/client";
import { db } from "../db";

export async function updateEnterprise(enterprise: Enterprise, id: string) {
  const currentEnterprise = await db.enterprise.findUnique({
    where: { id },
  });

  if (!currentEnterprise) {
    throw { status: 404, message: "Enterprise not found" };
  }

  const newEnterprise = await db.enterprise.update({
    where: { id },
    data: enterprise,
  });

  return newEnterprise;
}
