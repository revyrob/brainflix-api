import "./MainArticle.scss";
import views from "../../assets/Icons/views.svg";
import likes from "../../assets/Icons/likes.svg";

function MainArticle({ item }) {
  const newDate = new Date(item.timestamp).toLocaleDateString();

  return (
    <section className="mainArticle">
      <h1 className="mainArticle__title">{item.title}</h1>
      <div className="mainArticle__infoBar">
        <div className="mainArticle__div--stats">
          <h2 className="mainArticle__infoBar--author">By {item.channel}</h2>
          <p className="mainArticle__infoBar--date">{newDate}</p>
        </div>
        <div className="mainArticle__div--stats">
          <div className="mainArticle__infoBar__div">
            <img
              className="mainArticle__infoBar--icon"
              src={views}
              alt="view icon"
            />
            <p className="mainArticle__infoBar--emoji">{item.views}</p>
          </div>
          <div className="mainArticle__infoBar__div">
            <img
              className="mainArticle__infoBar--icon"
              src={likes}
              alt="view icon"
            />
            <p className="mainArticle__infoBar--emoji"> {item.likes}</p>
          </div>
        </div>
      </div>
      <div className="mainArticle__article">{item.description}</div>
    </section>
  );
}
export default MainArticle;
