import { Subscribe } from "@prisma/client";
import { db } from "../db";

export async function getSubscribe({ id, userId, internshipId }: Partial<Subscribe>) {
  const subscribe = await db.subscribe.findFirst({
    where: { id, userId, internshipId },
  });
  if (!subscribe) {
    throw { status: 404, message: "subscribe not found" };
  }
  return subscribe;
}
