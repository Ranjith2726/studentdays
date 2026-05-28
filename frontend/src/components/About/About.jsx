import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-glow about-glow-one"></div>
      <div className="about-glow about-glow-two"></div>

      <div className="about-container">
        <div className="about-left">
          <p className="about-tag">/ Our Why</p>

          <h2 className="section-title">
            More than trips. <br />
            <span className="gradient-text">More than college.</span>
          </h2>

          <p className="about-desc">
            StudentDays.co is built for students who want college life to feel
            memorable, meaningful, and real — not just classes, exams, and
            routines.
          </p>

          <p className="about-desc">
            We create student-only experiences where strangers become friends,
            simple trips become stories, and every moment feels worth
            remembering.
          </p>

          <div className="about-cards">
            <div className="about-card">
              <span>01</span>
              <h3>Real Friendships</h3>
              <p>Meet students from different colleges and build your circle.</p>
            </div>

            <div className="about-card">
              <span>02</span>
              <h3>Cinematic Memories</h3>
              <p>Trips, reels, photos, and stories captured like a film.</p>
            </div>

            <div className="about-card">
              <span>03</span>
              <h3>Student Friendly</h3>
              <p>Safe groups, budget plans, and curated experiences.</p>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-photo main-photo">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop"
              alt="Students enjoying trip"
            />
          </div>

          <div className="about-photo small-photo">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
              alt="Travel experience"
            />
          </div>

          <div className="floating-stat">
            <h3>12K+</h3>
            <p>students connected</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;