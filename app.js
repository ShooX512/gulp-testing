const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// PUG

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./dist/"));

// Store static files in public folder
app.use(
  "./dist",
  express.static(path.join(__dirname, "./dist"), { maxAge: "30 days" })
);

app.get("/", (req, res) =>
  res.render("test", {
    title: "title"
  })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));