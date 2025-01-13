const express = require("express");
var swStats = require("swagger-stats");
const app = express();

app.use(swStats.getMiddleware());

app.get("/", (req, res) => {
  res.send("The '/boats' and '/cars' APIs are available");
});

app.get("/boats", (req, res) => { 
  res.send("boats");
});

app.get("/cars", (req, res) => { 
  res.send("cars");
});

const port = 3000;
app.listen(port, () => {
  console.log(`The app begin serving on ${port} port`);
});
