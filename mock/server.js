const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

let isLogged = false

server.use((req, res, next) => {
  router.db.read();
  next();
});

server.use(middlewares);

server.get("/me", (req, res) => {
  const users = router.db.get("users").value();
  const firstUser = users[0];
  if (isLogged) {
    res.json(firstUser);
  } else {
    res.status(401).json({
      message: "Unauthorized",
      status: false
    })
  }
});

server.post("/login", (req, res) => {
  const users = router.db.get("users").value();
  const firstUser = users[0];
  isLogged = true
  res.json(firstUser);
});

server.post("/logout", (req, res) => {
  isLogged = false
  res.json({});
});

const routes = jsonServer.rewriter(require("./routes.json"));
server.use(routes);

server.use(router);

const port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running in http://localhost:${port}`);
});
