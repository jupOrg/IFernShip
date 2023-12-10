import { NextFunction, Request, Response } from "express";

export function errorMiddleware(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("error", error);

  if (!error) {
    return res.status(500).send("Unknown server error");
  }

  if (typeof error.status === "number") {
    res.status(error.status);
  }

  if (typeof error.message === "string") {
    return res.send(error.message);
  }

  if (typeof error.inner?.message === "string") {
    return res.send(error.inner.message);
  }

  return res.status(500).send("Unknown server error");
}
