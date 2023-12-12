import { db } from "../db";

export async function getAllSubscribe() {
  const subscribe = await db.subscribe.findMany();
  return subscribe;
}
