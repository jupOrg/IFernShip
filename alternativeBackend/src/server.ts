import cors from "cors";
import express from "express";
import "express-async-errors";
import { authRoutes } from "./auth/authRoutes";
import { enterpriseRoutes } from "./enterprise/enterpriseRoutes";
import { errorMiddleware } from "./errorMiddleware";
import { internshipRoutes } from "./internship/internshipRoutes";
import { userRoutes } from "./user/userRoutes";
import "./env";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/enterprises", enterpriseRoutes);
app.use("/internships", internshipRoutes);

app.use(errorMiddleware);

const port = 3000;
app.listen(port, () =>
  console.info(`Server running at http://localhost:${port}`)
);
