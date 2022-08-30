const express = require("express");
const app = express();
const fs = require("fs");

//load with fs.readfile
fs.readFile("./data/videos.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

//get from /videos, must return selected amount of information
app.get("/videos", function (req, res) {
  res.send("here are the vidoes");
});

//get from /videos/:id and will be the large information
//if there is an error when the video id does not exist
app.get("/videos/:id", function (req, res) {
  const id = id.find((i) => i === req.params.id);
  if (id) {
    res.send("here are the details in the videos");
  } else {
    res.status(400).send("No video with that id exists");
  }
});

//create a post
//take title and description to the json file
//the rest of the needed object will be hardcoded
//uuid library to make unique ids for posting videos
app.post("/videos", function (req, res) {
  res.post("posting the video");
});

app.listen(8080, function () {
  console.log("Hello our server is up and running");
});
