import "./About.css";

import about1 from "../../assets/about/about1.png";
import about2 from "../../assets/about/about2.png";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-glow about-glow-one"></div>
      <div className="about-glow about-glow-two"></div>

      <div className="about-container">
        <div className="about-left">
          <p className="about-tag">/ Our Offers</p>

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
              <p>
                Meet students from different colleges and build meaningful
                connections.
              </p>
            </div>

            <div className="about-card">
              <span>02</span>
              <h3>Cinematic Memories</h3>
              <p>
                Professional photos, reels, travel stories, and unforgettable
                experiences.
              </p>
            </div>

            <div className="about-card">
              <span>03</span>
              <h3>Student Friendly</h3>
              <p>
                Safe communities, affordable plans, and student-focused events.
              </p>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-photo main-photo">
            <img
              src={about1}
              alt="StudentDays Experience"
            />
          </div>

          <div className="about-photo small-photo">
            <img
              src={about2}
              alt="StudentDays Community"
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