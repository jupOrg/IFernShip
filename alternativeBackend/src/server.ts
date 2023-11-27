import cors from "cors";
import express from "express";
import "express-async-errors";
import { authRoutes } from "./auth/authRoutes";
import "./env";
import { errorMiddleware } from "./errorMiddleware";
import { userRoutes } from "./user/userRoutes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);

app.use(errorMiddleware);

const port = 3000;
app.listen(port, () =>
  console.info(`Server running at http://localhost:${port}`)
);
