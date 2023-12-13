import { User } from "@prisma/client";
import { db } from "../db";

export async function getUser(id: string): Promise<User | null> {
  return db.user.findUnique({ where: { id } });
}
