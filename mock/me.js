module.exports = async function (req, res, next) {
  if (req.path !== "/users/me") {
    return next();
  }

  if (req.headers["Authorization"]) {
    return res.json(firstUser);
  } else {
    return res.status(401).send("Unauthorized");
  }
};
