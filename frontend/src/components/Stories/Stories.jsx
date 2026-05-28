import "./Stories.css";

const Stories = () => {
  const stories = [
    {
      name: "Ananya",
      role: "2nd Year Student",
      quote:
        "I came alone for my first StudentDays.co experience. By the end of the trip, I had friends, pictures, and memories I still talk about.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Rohit",
      role: "BTech Student",
      quote:
        "College was becoming only classes and assignments. StudentDays.co gave me travel, friends, fun, and real confidence.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Meera",
      role: "Engineering Student",
      quote:
        "The best part was the community. I met people from different colleges and finally felt like I belonged somewhere.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="stories stories-page" id="stories">
      <div className="stories-glow glow-one"></div>
      <div className="stories-glow glow-two"></div>

      <div className="stories-header">
        <p className="stories-tag">/ Student Stories</p>

        <h2 className="section-title">
          Stories that <span className="gradient-text">stayed.</span>
        </h2>

        <p className="stories-subtitle">
          StudentDays.co is not only about travelling. It is about people,
          confidence, conversations, friendships, and memories that stay with you
          after college.
        </p>
      </div>

      <div className="stories-grid">
        {stories.map((story, index) => (
          <article className="story-card" key={index}>
            <div className="story-image">
              <img src={story.image} alt={story.name} />
            </div>

            <div className="story-content">
              <span className="story-number">0{index + 1}</span>

              <p className="story-quote">“{story.quote}”</p>

              <div className="story-profile">
                <div>
                  <h3>{story.name}</h3>
                  <p>{story.role}</p>
                </div>

                <span className="story-arrow">→</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Stories;