import UploadHeader from "../components/UploadHeader/UploadHeader";
import Button from "../components/Button/Button";
import publish from "../assets/Icons/publish.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import videoThumbnail from "../assets/Images/Upload-video-preview.jpg";

import "./UploadPage.scss";

function UploadPage() {
  const { REACT_APP_API_SERVER_URL } = process.env;
  let navigate = useNavigate();

  //event handler for uploading
  const handleUpload = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;

    axios
      .post(`${REACT_APP_API_SERVER_URL}/videos`, {
        title: title,
        description: description,
      })
      .then((response) => {
        if (title !== "" && description !== "") {
          alert("Video uploaded");
          navigate("/");
        } else {
          alert("You have not filled out the required input.");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleCancel = (event) => {
    event.preventDefault();
    alert("You have cancelled the upload");
  };

  //make button outside of form using
  //id on form 'id='class of form'
  //link the button to the form using
  //'form='id-name of the form'
  //figure out how to get the cancel button to use the handleCancel
  return (
    <>
      <section className="uploadPage">
        <UploadHeader />
        <div className="uploadPage--div">
          <div className="upload">
            <h2 className="upload__subtitle">Video Thumbnail</h2>
            <div className="upload__div">
              <img
                className="upload__img"
                src={videoThumbnail}
                alt="biker pedalling"
              ></img>
            </div>
          </div>
          <form
            method="post"
            className="uploadForm"
            id="form-upload"
            onSubmit={handleUpload}
          >
            <label className="uploadForm__label">
              Title of your video
              <input
                type="text"
                placeholder="Add a title to your video"
                name="title"
                className="uploadForm__input"
              ></input>
            </label>
            <label className="uploadForm__label">
              Add a video description
              <textarea
                type="text"
                placeholder="Add a description to your video"
                name="description"
                className="uploadForm__textarea"
              ></textarea>
            </label>
            <div className="grey-line"></div>
            <div className="uploadForm__btn--div">
              <Button
                form="form-upload"
                className="uploadForm__btn--publish"
                icon={publish}
                alt="upload"
                text="PUBLISH"
                type="submit"
              />
              <Button
                makeHappen={handleCancel}
                className="uploadForm__btn--cancel"
                text="CANCEL"
                type="button"
              />
            </div>

            {/* <div className="showBtn">
              <div className="uploadButton__btn--div">
                <Button
                  form="form-upload"
                  className="uploadButton__btn--publish"
                  icon={publish}
                  alt="upload"
                  text="PUBLISH"
                  type="submit"
                />
                <Button
                  makeHappen={handleCancel}
                  className="uploadButton__btn--cancel"
                  text="CANCEL"
                  type="cancel"
                />
              </div>
            </div> */}
          </form>
        </div>
      </section>
    </>
  );
}

export default UploadPage;
