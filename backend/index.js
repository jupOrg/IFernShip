import cors from "cors";
import express from "express";
import "express-async-errors";
import connect from "./database/index.js";
import error from "./middlewares/error.js";
import { enterpriseRouter } from "./routes/enterpriseRouter.js";
import { internshipRouter } from "./routes/internshipRouter.js";
import { userRouter } from "./routes/userRouter.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(error);

app.use("/internship", internshipRouter);
app.use("/enterprise", enterpriseRouter);
app.use("/user", userRouter);

const port = 3000;

async function start() {
  try {
    await connect();

    console.log("Successfully connected to DB");
    console.log(`App listening on port ${port}`);
  } catch (err) {
    console.log(`Not connected to DB. Error: ${err}`);
  }
}

app.listen(port, start);
