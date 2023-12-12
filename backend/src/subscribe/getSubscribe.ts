import { db } from "../db";

export async function getSubscribe(id: string) {
  const subscribe = await db.subscribe.findUnique({
    where: { id },
  });
  if (!subscribe) {
    throw { status: 404, message: "subscribe not found" };
  }
  return subscribe;
}
