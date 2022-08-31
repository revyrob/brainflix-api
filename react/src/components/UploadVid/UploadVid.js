import videoThumbnail from "../../assets/Images/Upload-video-preview.jpg";
import "./UploadVid.scss";

function UploadVid() {
  return (
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
  );
}
export default UploadVid;
