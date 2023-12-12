import { Role } from "@prisma/client";
import { hash } from "bcrypt";
import { sign } from "jsonwebtoken";
import { db } from "../db";
import { HOST_APPLICATION, JWT_SECRET } from "../env";

type SignUpDto = {
  role: Role;
  name: string;
  email: string;
  password: string;
};

export async function signUp({ name, email, role, password }: SignUpDto) {
  const alreadySavedUser = await db.user.findUnique({ where: { email } });

  if (alreadySavedUser) {
    throw { status: 400, message: "An user with this email already exists" };
  }

  const encryptedPassword = await hash(password, 10);

  const picture = `${HOST_APPLICATION}/images/commom.png`;

  const user = await db.user.create({
    data: { role, name, email, password: encryptedPassword, picture },
  });

  const token = sign(user.id, JWT_SECRET, { algorithm: "HS256" });

  return { user, token };
}
