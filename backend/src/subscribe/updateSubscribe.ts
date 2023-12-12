import { Subscribe } from "@prisma/client";
import { db } from "../db";

export async function updateSubscribe(subscribe: Subscribe, id: string) {
  const currentSubscribe = await db.subscribe.findUnique({
    where: { id },
  });

  if (!currentSubscribe) {
    throw { status: 404, message: "Subscribe not found" };
  }

  const newSubscribe = await db.subscribe.update({
    where: { id },
    data: subscribe,
  });
  
  return newSubscribe;
}
