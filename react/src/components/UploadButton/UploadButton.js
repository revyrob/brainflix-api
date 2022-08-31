import "./UploadButton.scss";
import publish from "../../assets/Icons/publish.svg";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function UploadButton() {
  return (
    <div className="uploadButton__btn--div">
      <Link to={`/`}>
        <Button
          className="uploadButton__btn--publish"
          icon={publish}
          alt="upload"
          text="PUBLISH"
          type="submit"
        />
      </Link>
      <Button
        className="uploadButton__btn--cancel"
        text="CANCEL"
        type="cancel"
      />
    </div>
  );
}

export default UploadButton;
