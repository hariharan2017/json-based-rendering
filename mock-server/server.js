const express = require("express");
const app = express();

const port = 3001;

app.listen(port);
console.log(`Listening on port ${port}`);

app.get("/", function (req, res) {
  res.send("Response");
});