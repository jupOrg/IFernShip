import { db } from "../db";

export async function getUser(id: string) {
  const user = await db.user.findUnique({ where: { id } });
  if (!user) {
    throw { status: 404, message: "User not found" };
  }
  return user;
}
