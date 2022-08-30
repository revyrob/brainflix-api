const express = require("express");
const app = express();
const fs = require("fs");
const videos = require("./routes/videos");

//to get the static files in public
app.use(express.static("public"));

app.use((req, res, next) => {
  console.log(req);
  console.log(`incoming requests ${req.original} at ${Date.now}`);
  next();
});

app.use("/videos", videos);

app.listen(8080, function () {
  console.log("Hello our server is up and running");
});
