const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const routes = require("./routes/index.js");

app.use(express.static(path.join(__dirname, "public")));
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});