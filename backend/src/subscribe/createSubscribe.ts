import { Subscribe } from "@prisma/client";
import { db } from "../db";

export async function createSubscribe(subscribe: Subscribe) {
  const newSubscribe = await db.subscribe.create({ data: subscribe });
  return newSubscribe;
}
