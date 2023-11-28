import jsonWebToken from "jsonwebtoken";
import { TOKEN_SECRET } from "../env.js";

export function verifyTokenAuthentication(request, response, next) {
  const authorization = request.headers.authorization;

  if (!authorization) {
    return response.status(403).json("Token faltando.");
  }

  const token = authorization.split(" ")[1];

  try {
    const { sub, name } = jsonWebToken.verify(token, TOKEN_SECRET);

    request.user = {
      id: Number(sub),
      name,
    };

    return next();
  } catch (error) {
    return response.status(403).json("Token inválido.");
  }
}
