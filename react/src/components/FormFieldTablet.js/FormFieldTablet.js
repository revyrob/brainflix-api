import "../FormField/FormField"; //uses the same scss file as FormField.scss because they both have the same styling but different layouts
import Button from "../Button/Button";
import commentIcon from "../../assets/Icons/add_comment.svg";
import axios from "axios";

//form field for tablet/desktop since the input and button are in a different order compared to the
//mobile
function FormFieldTablet({ item }) {
  //reload page function
  const refreshPage = () => {
    window.location.reload();
  };

  /*
   *event listener which pushes to the online API
   */
  const handleComment = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    axios
      .post(`http://localhost:8080/videos/${item.id}/comments`, {
        comment: comment,
      })
      .then((response) => {
        if (comment !== "") {
          alert("Thanks for commenting!");
        } else {
          alert("You have not filled out the required input.");
        }
      })
      .catch((err) => console.log(err));
    setTimeout(() => {
      refreshPage();
    }, "500");
  };

  return (
    <form
      method="post"
      className="formField__wrapper--tablet"
      onSubmit={handleComment}
    >
      <div className="formField__user--div">
        <div className="formField__user"></div>
      </div>
      <div className="formField__div">
        <div className="formField__wrapper--input">
          <div className="formField__action">
            <input
              type="text"
              placeholder="Add a new comment"
              name="comment"
              className="formField__input"
              required
            ></input>
          </div>
        </div>
        <Button
          className="formField__btn"
          icon={commentIcon}
          alt="comment"
          text="COMMENT"
          type="submit"
        />
      </div>
    </form>
  );
}

export default FormFieldTablet;
