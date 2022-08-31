import "./UploadForm.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import publish from "../../assets/Icons/publish.svg";

function UploadForm() {
  //Link the submit with the main page with a setTimeout
  //which indicates loading

  return (
    <form method="post" className="uploadForm">
      <label className="uploadForm__label">
        Title your video
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
        <Link to={`/`}>
          <Button
            className="uploadForm__btn--publish"
            icon={publish}
            alt="upload"
            text="PUBLISH"
            type="submit"
          />
        </Link>
        <Button
          className="uploadForm__btn--cancel"
          text="CANCEL"
          type="cancel"
        />
      </div>
    </form>
  );
}
export default UploadForm;
