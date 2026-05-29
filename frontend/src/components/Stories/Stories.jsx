import "./Stories.css";

import story1 from "../../assets/stories/stories1.png";
import story2 from "../../assets/stories/stories2.png";

const Stories = () => {
  const stories = [
    {
      name: "Rohith Pallika",
      role: "Adventure Explorer",
      quote:
        "From snowy mountains to unforgettable moments, every journey became a story worth remembering.",
      info:
        "Passionate about travel, nature, and creating lifelong memories with friends through unique student experiences.",
      image: story1,
    },
    {
      name: "Amrita Pandey",
      role: "Travel Enthusiast",
      quote:
        "The best experiences are not about destinations, but the people, conversations, and memories made along the way.",
      info:
        "Loves exploring new places, meeting new people, and turning simple moments into unforgettable adventures.",
      image: story2,
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
          confidence, conversations, friendships, and memories that stay with
          you long after the journey ends.
        </p>
      </div>

      <div className="stories-grid">
        {stories.map((story, index) => (
          <article className="story-card" key={index}>
            <div className="story-image">
              <img src={story.image} alt={story.name} />
            </div>

            <div className="story-content">
              <span className="story-number">
                0{index + 1}
              </span>

              <p className="story-quote">
                "{story.quote}"
              </p>

              <div className="story-profile">
                <div>
                  <h3>{story.name}</h3>

                  <p>{story.role}</p>

                  <span className="story-extra">
                    {story.info}
                  </span>
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