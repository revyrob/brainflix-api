const express = require("express");
const app = express();
const PORT = process.env.PORT || process.argv[2] || 8080;
const videosRoutes = require("./routes/videosRoute");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/videos", videosRoutes);

//get from /videos, must return selected amount of information
app.get("/videos", function (req, res) {
  res.send("Welcome to the video API Server");
});

app.listen(PORT, function () {
  console.log("Hello our server is up and running on 8080");
});
