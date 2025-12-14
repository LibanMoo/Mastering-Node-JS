const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req?.roles) return res.sendStatus(402);
    // Convert { User:2001, Editor:1984, Admin:5150 } → [2001, 1984, 5150]
    const userRoles = Array.isArray(req.roles)
      ? req.roles
      : Object.values(req.roles);

    // Check if user has at least one allowed role
    const hasRole = userRoles.some((role) => allowedRoles.includes(role));

    if (!hasRole) return res.sendStatus(401);

    next();
  };
};
module.exports = verifyRoles;
