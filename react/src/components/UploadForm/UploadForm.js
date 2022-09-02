import "./UploadForm.scss";
import Button from "../Button/Button";
import publish from "../../assets/Icons/publish.svg";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";

function UploadForm() {
  const { REACT_APP_API_SERVER_URL } = process.env;
  let navigate = useNavigate();

  //event handler for uploading
  const handleUpload = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;

    axios
      .post(`http://localhost:8080/videos`, {
        title: title,
        description: description,
      })
      .then((response) => {
        console.log(response);
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
    </form>
  );
}
export default UploadForm;
