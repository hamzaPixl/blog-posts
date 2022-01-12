const Ajv = require("ajv");
const ajv = new Ajv();

function isValid(input, schema) {
  const validate = ajv.compile(schema);
  const valid = validate(input);
  if (!valid) {
    return validate.errors;
  }
  return { valid: true };
}

module.exports = {
  isValid,
};
