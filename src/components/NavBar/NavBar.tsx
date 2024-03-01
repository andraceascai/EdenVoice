import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg" id="navbar">
      <a className="navbar-brand" href="#">
        <img
          src="/src/assets/edenred-vector-logo.svg"
          className="edenred-logo"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" id="edenred-style" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="edenred-style" href="#">
              Post
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="edenred-style" href="#">
              Explore Ideas
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
