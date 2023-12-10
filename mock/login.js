const defaultUser = {
  id: "default",
  course: "ADS",
  role: "coordinator",
  picture: "torvalds",
  name: "Linus Torvalds",
};

module.exports = async function (req, res, next) {
  if (req.path !== "/login") {
    return next();
  }

  // TODO use it
  return res.send({
    user: defaultUser,
    token: "mock_token",
  });

  // return res.send(defaultUser);
};
