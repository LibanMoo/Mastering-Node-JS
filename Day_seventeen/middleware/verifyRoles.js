const userRoles = require("../config/roles");

const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req?.roles) return res.sendStatus(401);
    if (!Array.isArray(req.roles)) {
      req.roles = Object.values(req.roles);
    }
    const rolesList = [...allowedRoles];
    const result = req.roles
      .map((role) => rolesList.includes(role))
      .find((val) => val === true);
    if (!result) return res.sendStatus(401);
    next();
  };
};
module.exports = verifyRoles;
