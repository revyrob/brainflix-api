import "./Comment.scss";
import { Link } from "react-router-dom";

function Comment({ timestamp, name, comment, id }) {
  //used to get my timestamp into date
  //hold onto for future reference
  // const newDate = new Date(timestamp).toLocaleDateString();

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

  return (
    <Link to={`/HomePage/${id}`}>
      <section className="comment">
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
      </section>
    </Link>
  );
}
export default Comment;
