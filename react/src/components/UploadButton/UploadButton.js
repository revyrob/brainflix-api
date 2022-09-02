import "./UploadButton.scss";
import publish from "../../assets/Icons/publish.svg";
import Button from "../Button/Button";

function UploadButton() {
  return (
    <div className="uploadButton__btn--div">
      <Button
        className="uploadButton__btn--publish"
        icon={publish}
        alt="upload"
        text="PUBLISH"
        type="submit"
      />
      <Button
        className="uploadButton__btn--cancel"
        text="CANCEL"
        type="cancel"
      />
    </div>
  );
}

export default UploadButton;
