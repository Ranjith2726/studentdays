import "./OurOffers.css";

const OurOffers = () => {
  const offers = [
    {
      title: "Goa Escape",
      description:
        "Beach trips, night vibes, reels, music, and unforgettable student memories.",
    },

    {
      title: "Hyderabad Nights",
      description:
        "Late-night drives, rooftop meetups, food spots, and city experiences.",
    },

    {
      title: "Araku Diaries",
      description:
        "Nature journeys, train travel, waterfalls, mountains, and friendships.",
    },

    {
      title: "Creators Meetup",
      description:
        "Meet creators, make content, shoot reels, and build your network.",
    },

    {
      title: "Student Trips",
      description:
        "Budget-friendly trips specially designed for college students.",
    },

    {
      title: "Adventure Experiences",
      description:
        "Camping, trekking, group games, and exciting activities with students.",
    },
  ];

  return (
    <section className="offers-page">
      <div className="offers-overlay"></div>

      <div className="offers-content">
        <p className="offers-tag">/ Our Offers</p>

        <h1 className="offers-title">
          Experiences made for{" "}
          <span className="gradient-text">students.</span>
        </h1>

        <p className="offers-subtitle">
          Trips, meetups, creator events, adventures, and unforgettable
          experiences designed specially for college students across India.
        </p>

        <div className="offers-grid">
          {offers.map((offer, index) => (
            <div className="offer-card" key={index}>
              <span className="offer-number">
                0{index + 1}
              </span>

              <h2>{offer.title}</h2>

              <p>{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurOffers;