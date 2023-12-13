import express from "express";
import "express-async-errors";
import cors from "cors";
import { authRoutes } from "./auth/authRoutes";
import { enterpriseRoutes } from "./enterprise/enterpriseRoutes";
import { errorMiddleware } from "./errorMiddleware";
import { internshipRoutes } from "./internship/internshipRoutes";
import { userRoutes } from "./user/userRoutes";
import "./env";
import { subscribeRoutes } from "./subscribe/subscribeRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/subscribes", subscribeRoutes);
app.use("/enterprises", enterpriseRoutes);
app.use("/internships", internshipRoutes);
app.use("/images", express.static("uploads"));

app.use(errorMiddleware);

const port = 3000;
app.listen(port, () =>
  console.info(`Server running at http://localhost:${port}`),
);
