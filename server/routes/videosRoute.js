const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

/*
 *read video.json file
 */
function loadVideosData(callback) {
  fs.readFile("./data/videos.json", "utf8", callback);
}

/*
 *write the videos.json file
 */
function saveVideoData(data) {
  fs.writeFile("./data/videos.json", data, (err) => {
    if (err) {
      console.error(err);
    }
    //file written successfully, if no error
  });
}

/*
 *Get all the videos
 */
router.get("/", (req, res) => {
  loadVideosData((err, data) => {
    if (err) {
      res.send("error while getting video data");
    } else {
      const videos = JSON.parse(data);
      res.json(videos);
    }
  });
});

/*
 *Get single video by using id pararm
 */
router.get("/:id", (req, res) => {
  loadVideosData((err, videoData) => {
    if (err) {
      res.send("error getting video data");
    } else {
      const videos = JSON.parse(videoData);
      const foundVideo = videos.find((video) => video.id == req.params.id);
      res.json(foundVideo);
    }
  });
});

/*
 *Post new upload
 */
// router.post("/", (req, res) => {
//   loadVideosData((err, videoData) => {
//     if (err) {
//       res.send("error posting video");
//     } else {
//       const parsedVideoData = JSON.parse(videoData);

//       //create a new video and push to array
//       const newVideo = {
//         id: uuidv4(),
//         image: "http://localhost:8080/images/hiker-mtns.jpg",
//         name: req.body.name,
//         comment: req.body.comment,
//         timestamp: Date.now(),
//       };
//       //push the new upload video to the json
//       parsedVideoData.push(newVideo);

//       //save the stringified data to the json file
//       saveVideoData(JSON.stringify(parsedVideoData));

//       res.status(201).send("upload video created");
//     }
//   });
// });

module.exports = router;
