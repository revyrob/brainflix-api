import UploadVid from "../components/UploadVid/UploadVid";
import UploadForm from "../components/UploadForm/UploadForm";
import UploadHeader from "../components/UploadHeader/UploadHeader";
import UploadButton from "../components/UploadButton/UploadButton";

function UploadPage() {
  return (
    <>
      <section className="uploadPage">
        <UploadHeader />
        <div className="uploadPage--div">
          <UploadVid />
          <UploadForm />
        </div>
        <div className="showBtn">
          <UploadButton />
        </div>
      </section>
    </>
  );
}

export default UploadPage;
