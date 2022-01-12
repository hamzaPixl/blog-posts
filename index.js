const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fooSchema = require("./schemas/foo");
const validatorMiddleware = require("./middlewares/validator");

const port = process.env || 3000;

app.use(bodyParser.json());
app.use(bodyParser.raw());

app.post("/", validatorMiddleware(fooSchema), (req, res) => {
  return res.send();
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
