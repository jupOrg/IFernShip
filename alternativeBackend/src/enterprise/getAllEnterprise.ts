import { db } from "../db";

export async function getAllEnterprise() {
  const enterprise = await db.enterprise.findMany();
  return enterprise;
}
