import { Enterprise } from "@prisma/client";
import { db } from "../db";

export async function createEnterprise(enterprise: Enterprise) {
  const newEnterprise = await db.enterprise.create({ data: enterprise });
  return newEnterprise;
}
