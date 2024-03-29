import "./NavBar.css";
import logo from "/src/frontendAssets/edenred-vector-logo.svg";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg" id="navbar">
      <a className="navbar-brand" href="/home">
        <img src={logo} className="edenred-logo" />
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
            <a className="nav-link" id="edenred-style" href="/home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="edenred-style" href="/explore">
              Explore Ideas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="edenred-style" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
