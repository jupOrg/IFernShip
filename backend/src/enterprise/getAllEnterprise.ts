import { Enterprise } from "@prisma/client";
import { db } from "../db";

export async function getAllEnterprise({ name }: Partial<Enterprise>) {
  const obj: object = name ? { where: { name: { search: name } } } : {};
  const enterprise = await db.enterprise.findMany(obj);
  return enterprise;
}
