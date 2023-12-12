import { db } from "../db";

export async function deleteSubscribe(id: string) {
  const subscribe = await db.subscribe.findUnique({ where: { id } });
  if (!subscribe) {
    throw { status: 404, message: "subscribe not found" };
  }
  await db.subscribe.delete({ where: { id } })
  return subscribe;
}
