import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-tag">A Student-Life Movement</p>

        <h1 className="hero-title">
          Student life was never meant to be lived{" "}
          <span className="gradient-text">only inside campus.</span>
        </h1>

        <p className="hero-desc">
          StudentDesk.co helps students create memories, friendships,
          experiences, and stories they will remember forever.
        </p>

        <div className="hero-actions">
          <a href="#join" className="primary-btn">
            Join StudentDesk.co
          </a>

          <a href="#experiences" className="secondary-btn">
            Explore Experiences
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;