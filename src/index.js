const express = require("express");
const app = express();

console.log(app);

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(3000, () => console.log("listening on http://localhost:3000/"));
