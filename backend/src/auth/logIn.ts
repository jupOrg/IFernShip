import jwt from "jsonwebtoken";
import { db } from "../db";
import { JWT_SECRET } from "../env";

type LogInDto = {
  email: string;
  password: string;
};

export async function logIn({ email, password }: LogInDto) {
  const user = await db.user.findUnique({ where: { email } });

  // TODO check password

  const token = jwt.sign(user.id, JWT_SECRET, { algorithm: "HS256" });
  return { user, token };
}
