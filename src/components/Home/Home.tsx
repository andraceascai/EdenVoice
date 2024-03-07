import Animation from "../Animation/Animation";
import NavBar from "../NavBar/NavBar";
import Post from "../Post/Post";
import mic from "../../frontendAssets/mic.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="area">
        <NavBar />
        <Animation />

        <div className="title">
          <h1 className="title-text">EDC Voice</h1>
        </div>

        <div className="description">
          Welcome to EdenVoice, your digital town hall! This is a collaborative
          space for all employees to share, vote on, and elevate innovative
          ideas that can shape the future of our company. Here, every voice
          matters, and every suggestion is a potential game-changer. Let's
          co-create, inspire progress, and turn our collective vision into
          reality. Share your idea by submitting it in the form below!
        </div>

        <Post />

        <div>
          <img src={mic} alt="" className="mic" />
        </div>
      </div>
    </>
  );
};

export default Home;
