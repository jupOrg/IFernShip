import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../db";
import { JWT_SECRET } from "../env";

type LogInDto = {
  email: string;
  password: string;
};

// For security reasons, it should not
// throw "user not found" or "wrong password"
export async function logIn({ email, password }: LogInDto) {
  const user = await db.user.findUnique({ where: { email } });

  if (!user) {
    throw { status: 400, message: "Invalid email or password" };
  }

  const samePassword = await compare(password, user.password);
  if (!samePassword) {
    throw { status: 400, message: "Invalid email or password" };
  }

  const token = jwt.sign(user.id, JWT_SECRET, { algorithm: "HS256" });
  return { user, token };
}
