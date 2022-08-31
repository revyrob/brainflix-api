import { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import MainArticle from "../components/MainArticle/MainArticle";
import ArticleList from "../components/ArticleList/ArticleList";
import CommentArea from "../components/CommentArea/CommentArea";
import { useParams } from "react-router-dom";

function HomePage() {
  const { REACT_APP_API_SERVER_URL } = process.env;
  //useState for video in main bar
  const [videoList, setVideoList] = useState(null);
  const [mainVideo, setMainVideo] = useState();

  //declare videoId with useParams()
  const { videoId } = useParams();

  //get the list for the videos
  useEffect(() => {
    axios
      .get(`${REACT_APP_API_SERVER_URL}`)
      .then((response) => {
        setVideoList(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // switch the video in the video list to the video main
  useEffect(() => {
    if (videoId !== undefined) {
      axios
        .get(`${REACT_APP_API_SERVER_URL}${videoId}`)
        .then((response) => {
          setMainVideo(response.data);
        })
        .catch((err) => console.log(err));
      //else statement to currently hardcode the videoId since this useEffect block is running bfore the setVideoList
    } else {
      axios
        .get(`${REACT_APP_API_SERVER_URL}84e96018-4022-434e-80bf-000ce4cd12b8`)
        .then((response) => {
          setMainVideo(response.data);
        })
        .catch((err) => console.log(err));
    }
  }, [videoId]);

  /*
   *Loading when pressed Links back to Homepage
   *start State in true so that we can
   *toggle between loading
   */
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loading function to load data or
    // fake it using setTimeout;
    const loadData = async () => {
      // wait for 2 secs if there is no wait
      await new Promise((resolved) => setTimeout(resolved, 2000));
      // set the toggle loading state
      setLoading((loading) => !loading);
    };
    loadData();
  }, []);

  // If page is in loading state, display
  // loading div which is a spinning circle.
  if (loading) {
    return <div className="loader"></div>;
  }
  // If page is not in loading state, display page.
  else {
    //need to have the && statements for each item since this code will run before the useEffects and if they
    //run first they will not have the requirements for the states, therefore there has to be the truthy statements
    //so the code runs properly
    return (
      <>
        {mainVideo && <Hero item={mainVideo} />}
        <section className="main">
          <section className="leftMain">
            {mainVideo && <MainArticle item={mainVideo} />}
            {mainVideo && <CommentArea item={mainVideo} />}
          </section>
          {mainVideo && (
            <ArticleList itemMain={mainVideo} videoList={videoList} />
          )}
        </section>
      </>
    );
  }
}

export default HomePage;
