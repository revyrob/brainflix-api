import "./Hero.scss";

function Hero({ item }) {
  return (
    <>
      <section className="hero">
        <video className="hero__video" poster={item.image} controls>
          <source src="" type="video/mp4"></source>
          Sorry, your browser doesn't support embedded videos
        </video>
      </section>
    </>
  );
}
export default Hero;
