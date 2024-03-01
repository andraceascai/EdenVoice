import Animation from "../Animation/Animation";
import NavBar from "../NavBar/NavBar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="area">
        <Animation />

        <div className="title">
          <h1 className="title-text">EDC Voice</h1>
        </div>

        <div className="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
          cumque quaerat officia perferendis quidem, at voluptatum optio id!
          Sapiente commodi id dolores aliquid cumque, atque alias dolore quasi
          nulla recusandae? Quis, sed magnam. Repellat qui perspiciatis, fuga
          voluptatum, eveniet corrupti libero vel magnam voluptates incidunt
          nemo obcaecati. Vitae, neque tempora!
        </div>

        <div className="button">
          <button className="button-home">Submit your idea</button>
        </div>

        <div>
          <img src="/src/assets/mic.png" alt="" className="mic" />
        </div>
      </div>
    </>
  );
};

export default Home;
