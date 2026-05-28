import "./Navbar.css";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = ({ setShowLogin }) => {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleScrollNav = (e, id) => {
    e.preventDefault();

    if (!token) {
      setShowLogin(true);
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
      setShowLogin(true);
      return;
    }

    navigate(path);
  };

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        StudentDesk<span>.co</span>
      </Link>

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
        <button className="navbar-btn" onClick={() => setShowLogin(true)}>
          Login →
        </button>
      ) : (
        <button className="navbar-btn" onClick={logout}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Navbar;