import "./FormField.scss";
import Button from "../Button/Button";
import commentIcon from "../../assets/Icons/add_comment.svg";
import axios from "axios";

//form field for the mobile divice sine the input and button are in a different order
//compared to the tablet/desktop
function formField({ item }) {
  const { REACT_APP_API_SERVER_URL } = process.env;
  //refresh page function
  const refreshPage = () => {
    window.location.reload();
  };
  //event handler for creating new comment
  const handleComment = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    axios
      .post(`${REACT_APP_API_SERVER_URL}/videos/${item.id}/comments`, {
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
      className="formField__wrapper--mobile"
      onSubmit={handleComment}
    >
      <div className="formField__user--div">
        <div className="formField__user"></div>
      </div>
      <div className="formField__wrapper--input">
        <div className="formField__action">
          <textarea
            type="text"
            placeholder="Add a new comment"
            name="comment"
            className="formField__input"
            required
          ></textarea>
          <Button
            className="formField__btn"
            icon={commentIcon}
            alt="comment"
            text="COMMENT"
            type="submit"
          />
        </div>
      </div>
    </form>
  );
}

export default formField;
