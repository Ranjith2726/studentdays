import "./Experiences.css";

const Experiences = () => {
  const trips = [
    {
      title: "Goa Escape",
      desc: "Sunsets, beaches, music nights, hostel stories, and unforgettable student memories.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1974&auto=format&fit=crop",
    },
    {
      title: "Hyderabad Nights",
      desc: "Late-night drives, rooftop talks, food walks, city lights, and student-only hangouts.",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1974&auto=format&fit=crop",
    },
    {
      title: "Araku Diaries",
      desc: "Foggy mountains, train windows, chai breaks, peaceful mornings, and new friendships.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1974&auto=format&fit=crop",
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
          <article className="experience-card" key={index}>
            <img src={trip.image} alt={trip.title} />

            <div className="experience-overlay">
              <span className="experience-number">0{index + 1}</span>

              <h3>{trip.title}</h3>

              <p>{trip.desc}</p>

              <button className="primary-btn">Explore →</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experiences;