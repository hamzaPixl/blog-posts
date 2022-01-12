const { isValid } = require("../utils/validator");

module.exports = (schema) => (req, res, next) => {
  const result = isValid(req.body, schema);
  if (Array.isArray(result)) {
    // array means we have errors
    return res.status(404).send({
      code: "VALIDATION_ERROR",
      message: "Validation of the payload ",
      details: result,
    });
  }
  next();
};
