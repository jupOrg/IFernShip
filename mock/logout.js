module.exports = async function (req, res, next) {
  if (req.path !== "/logout") {
    return next();
  }

  return res.send();
};
