const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// PUG

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./app/views"));

// Store static files in public folder
app.use(
  "./app",
  express.static(path.join(__dirname, "./app"), { maxAge: "30 days" })
);

app.get("/", (req, res) =>
  res.render("test", {
    title: "title"
  })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));