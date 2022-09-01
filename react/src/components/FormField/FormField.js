import "./FormField.scss";
import Button from "../Button/Button";
import commentIcon from "../../assets/Icons/add_comment.svg";
import axios from "axios";

//form field for the mobile divice sine the input and button are in a different order
//compared to the tablet/desktop
function formField({ item }) {
  //refresh page function
  const refreshPage = () => {
    window.location.reload();
  };

  /*
   *event listener which pushes to the online API
   */
  const commentHandler = (event) => {
    event.preventDefault();
    axios({
      method: "post",
      url: `https://project-2-api.herokuapp.com/videos/${item.id}/comments?api_key=be97841f-2e0f-41ab-8584-cf3c3e4b26a9/`,
      data: {
        name: "Ada Lovelace",
        comment: event.target.comment.value,
      },
    }).catch((err) => {
      console.error(err);
    });
    setTimeout(() => {
      refreshPage();
    }, "500");
  };

  return (
    <form
      method="post"
      className="formField__wrapper--mobile"
      onSubmit={commentHandler}
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