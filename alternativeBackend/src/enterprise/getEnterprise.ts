import { db } from "../db";

export async function getEnterprise(id: string) {
  const enterprise = await db.enterprise.findUnique({ where: { id } });
  if (!enterprise) {
    throw { status: 404, message: "Enterprise not found" };
  }
  return enterprise;
}
