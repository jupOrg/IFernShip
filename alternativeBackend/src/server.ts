import cors from "cors";
import express from "express";
import "./env";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

const port = 3000;

app.listen(port, () =>
  console.info(`Server running at http://localhost:${port}`)
);
