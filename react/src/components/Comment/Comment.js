import "./Comment.scss";
import { Link } from "react-router-dom";

function Comment({ timestamp, name, comment, id, commentId }) {
  //reload page function
  // const refreshPage = () => {
  //   window.location.reload();
  // };

  //function for finding the 'days ago' for a posted comment
  function getDateXDaysAgo(a, b) {
    // To calculate the time difference of two dates
    let differTime = b.getTime() - a.getTime();
    // To calculate the no. of days between two dates
    let differDays = Math.floor(differTime / (1000 * 3600 * 24));
    return differDays;
  }
  //days from using the timestamp and the current date
  const daysFrom = getDateXDaysAgo(new Date(timestamp), new Date(Date.now()));

  // button handler
  const deleteHandler = (event) => {
    event.preventDefault();
    // const commentId = event.commentId;
    // console.log(commentId);
    alert("We are still working on this feature");
    // axios
    //   .delete(`http://localhost:8080/videos/${id}/comments/${comments.commentId}`)
    //   .then((response) => {
    //     console.log("click event happend");
    //     console.log(id.commentId);
    //   })
    //   .catch((err) => console.log(err));
  };
  return (
    <Link to={`/HomePage/${id}`}>
      <section className="comment__1">
        <div className="comment">
          <div className="comment__wrapper--image">
            <div className="comment__user-image"></div>
          </div>

          <div className="comment__wrapper">
            <div className="comment__header">
              <p className="comment__name">{name}</p>
              <p className="comment__date">{daysFrom} days ago</p>
            </div>

            <div className="comment__comment">{comment}</div>
          </div>

          <div className="comment__delete">
            <button className="comment__btn-delete" onClick={deleteHandler}>
              ×
            </button>
          </div>
        </div>
      </section>
    </Link>
  );
}
export default Comment;
