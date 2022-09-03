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
 *I would think it would be in here where I change the data taken
 *in from the larger file
 */
router.get("/", (req, res) => {
  loadVideosData((err, data) => {
    if (err) {
      res.send("error while getting video data");
      //loop throug the data just taking the
      //information that is used for the small json
      //title, image, channgel, id
    } else {
      const videos = JSON.parse(data).map((e) => {
        return {
          title: e.title,
          channel: e.channel,
          image: e.image,
          id: e.id,
        };
      });
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
router.post("/", (req, res) => {
  loadVideosData((err, videoData) => {
    if (err) {
      res.send("error posting video");
    } else {
      const parsedVideoData = JSON.parse(videoData);

      //create a new video and push to array
      const newVideo = {
        title: req.body.title,
        channel: "Ada Lovelace",
        image: "http://localhost:8080/images/hiker-mtns.jpg",
        description: req.body.description,
        views: "0",
        likes: "0",
        duration: "0.31",
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: Date.now(),
        comments: [],
        id: uuidv4(),
      };
      //push the new upload video to the json
      parsedVideoData.push(newVideo);

      //save the stringified data to the json file
      saveVideoData(JSON.stringify(parsedVideoData));

      res.status(201).send("upload video created");
    }
  });
});

/*
 *Post new comment
 */
router.post("/:id/comments", (req, res) => {
  loadVideosData((err, videoData) => {
    if (err) {
      res.send("error posting comment");
    } else {
      const videos = JSON.parse(videoData);
      const foundVideo = videos.find((video) => video.id == req.params.id);

      //go through the list and add the comment to the matching id
      //we found the matching id in the compare for find main
      //now do the same find the main id
      //add object to the end of the array of comments
      // const videos = JSON.parse(videoData);
      // const foundVideo = videos.find((video) => video.id == req.params.id);

      //create a new video and push to array
      const newComment = {
        id: uuidv4(),
        name: "Ada Lovelace",
        comment: req.body.comment,
        likes: "0",
        timestamp: Date.now(),
      };

      // //i need to push my comment to the object video in the array
      // //of objects
      foundVideo.comments.push(newComment);
      // console.log(foundVideo);
      // //save the stringified data to the json file
      // saveVideoData(JSON.stringify(foundVideo));
      res.json(foundVideo);
      // res.status(201).send("upload comment created");
    }
  });
});

module.exports = router;
