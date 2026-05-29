import "./Experiences.css";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import video1 from "../../assets/video1.mp4";

const Experiences = () => {
  const trips = [
    {
      type: "image",
      desc: "Adventure, teamwork, excitement, and unforgettable moments shared with friends.",
      image: img1,
    },
    {
      type: "image",
      desc: "Friendships, laughter, togetherness, and memories that last beyond college.",
      image: img2,
    },
    {
      type: "image",
      desc: "Peaceful views, travel experiences, nature, and beautiful student journeys.",
      image: img3,
    },
    {
      type: "image",
      desc: "Exploring new places, creating stories, and building lifelong connections.",
      image: img4,
    },
    {
      type: "video",
      desc: "Real student moments, travel memories, and experiences captured beautifully.",
      video: video1,
    },
  ];

  return (
    <section className="experiences experiences-page" id="experiences">
      <div className="blur-circle blue-blur experience-blur"></div>

      <div className="experience-top">
        <p className="experience-tag">/ Experiences</p>

        <h2 className="section-title">
          Moments we <span className="gradient-text">created.</span>
        </h2>

        <p className="section-subtitle">
          Curated student-only experiences across India for students who want
          more than classrooms, assignments, and routine college days.
        </p>
      </div>

      <div className="experience-grid">
        {trips.map((trip, index) => (
          <article
            className="experience-card"
            key={index}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {trip.type === "video" ? (
              <video
                src={trip.video}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={trip.image}
                alt={`StudentDays experience ${index + 1}`}
              />
            )}

            <div className="experience-overlay">
              <span className="experience-number">0{index + 1}</span>

              <p className="experience-description">{trip.desc}</p>

              <button className="primary-btn">Explore →</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experiences;