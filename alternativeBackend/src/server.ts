import "./env";

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

const port = 3000;

app.listen(port, () =>
  console.info(`Server running at http://localhost:${port}`)
);
