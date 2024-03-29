import "./CommentArea.scss";
import Comment from "../Comment/Comment";
import FormFieldTablet from "../FormFieldTablet.js/FormFieldTablet";
import FormField from "../FormField/FormField";
const { v4: uuidv4 } = require("uuid");

function CommentArea({ item }) {
  return (
    <section className="commentArea">
      <p className="commentArea__numberComments">
        {item.comments.length === 0 ? "0" : item.comments.length} Comments
      </p>
      <h2 className="commentArea__title">Join the Conversation</h2>
      <FormField className="mobile" item={item} />
      <FormFieldTablet className="tablet" item={item} />

      {item.comments.map((user, index) => (
        <Comment
          id={uuidv4()}
          key={index}
          name={user.name}
          comment={user.comment}
          likes={user.likes}
          timestamp={user.timestamp}
        />
      ))}
    </section>
  );
}
export default CommentArea;
