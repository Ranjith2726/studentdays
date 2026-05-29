import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-tag">
          A STUDENT-LIFE MOVEMENT
        </p>

        <h1 className="hero-title">
          Student life was never meant
          <br />
          to be lived
          <br />
          <span className="gradient-text">
            only inside campus.
          </span>
        </h1>

        <p className="hero-desc">
          StudentDays.co helps students create memories,
          friendships, experiences, trips, and stories
          that last far beyond college life.
        </p>

        <div className="hero-buttons">
          <button className="hero-btn-primary">
            Join StudentDays.co →
          </button>

          <button className="hero-btn-secondary">
            Explore Experiences
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;