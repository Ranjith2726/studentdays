import logo from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-brand">
          <div className="footer-logo">
            <img
              src={logo}
              alt="StudentDays Logo"
            />
          </div>

          <p>
            A student lifestyle and experience community helping
            students create unforgettable memories, friendships,
            trips, and stories.
          </p>
        </div>

        <div className="footer-links">

          <div className="footer-column">
            <h4>Explore</h4>

            <a href="#about">About</a>
            <a href="#experiences">Experiences</a>
            <a href="#stories">Stories</a>
            <a href="#community">Community</a>
          </div>

          <div className="footer-column">
            <h4>Socials</h4>

            <a href="/">Instagram</a>
            <a href="/">YouTube</a>
            <a href="/">LinkedIn</a>
            <a href="/">WhatsApp</a>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>

            <a href="mailto:StudentDays.co@gmail.com">
              StudentDays.co@gmail.com
            </a>

            <a href="/">
              Hyderabad, India
            </a>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 StudentDays.co. All Rights Reserved.
        </p>

        <span>
          live it. love it. remember it.
        </span>
      </div>
    </footer>
  );
};

export default Footer;