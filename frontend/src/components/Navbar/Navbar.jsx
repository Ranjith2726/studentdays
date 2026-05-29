import "./Navbar.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScrollNav = (e, id) => {
    e.preventDefault();

    if (!token) {
      navigate("/login");
      return;
    }

    if (window.location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document.querySelector(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 200);

      return;
    }

    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handlePageNav = (e, path) => {
    e.preventDefault();

    if (!token) {
      navigate("/login");
      return;
    }

    navigate(path);
  };

  return (
    <header className="navbar">
      <div className="navbar-logo" onClick={handleLogoClick}>
        <img src={logo} alt="StudentDays.co Logo" />
      </div>

      <nav className="navbar-links">
        <button
          onClick={(e) => handleScrollNav(e, "#about")}
          className="nav-link-btn"
        >
          About
        </button>

        <button
          onClick={(e) => handlePageNav(e, "/experiences")}
          className="nav-link-btn"
        >
          Experiences
        </button>

        <button
          onClick={(e) => handlePageNav(e, "/stories")}
          className="nav-link-btn"
        >
          Stories
        </button>

        <button
          onClick={(e) => handleScrollNav(e, "#community")}
          className="nav-link-btn"
        >
          Community
        </button>

        <button
          onClick={(e) => handlePageNav(e, "/offers")}
          className="nav-link-btn"
        >
          Our Offers
        </button>
      </nav>

      {!token ? (
        <button
          className="navbar-btn"
          onClick={() => navigate("/login")}
        >
          Login →
        </button>
      ) : (
        <button
          className="navbar-btn"
          onClick={logout}
        >
          Logout
        </button>
      )}
    </header>
  );
};

export default Navbar;