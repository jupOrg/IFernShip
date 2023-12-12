import { User } from "@prisma/client";
import { db } from "../db";

export async function updateUser(user: User, id) {
  const newUser = await db.user.update({
    where: { id },
    data: user,
  });

  return newUser;
}
