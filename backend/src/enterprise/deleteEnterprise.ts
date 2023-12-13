import { db } from "../db";

export async function deleteEnterprise(id: string) {
  const enterprise = await db.enterprise.findUnique({ where: { id } });
  if (!enterprise) {
    throw { status: 404, message: "Internship not found" };
  }
  await db.enterprise.delete({ where: { id } });
  return enterprise;
}
