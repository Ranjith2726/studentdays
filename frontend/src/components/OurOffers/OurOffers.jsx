import "./OurOffers.css";

const OurOffers = () => {
  const offers = [
    {
      icon: "🎬",
      title: "Cinematic Memory Films",
      text: "Every trip becomes a documentary-grade short film, edited by real filmmakers.",
    },
    {
      icon: "🎓",
      title: "Student-Only Experiences",
      text: "No tourists. No families. Just your generation, your tempo, your music.",
    },
    {
      icon: "✨",
      title: "Meet New People",
      text: "Curated cohorts of 20–40 students who become your people, on purpose.",
    },
    {
      icon: "✺",
      title: "Safe & Budget Friendly",
      text: "Verified stays, female-friendly crews, college-budget pricing — always.",
    },
    {
      icon: "◐",
      title: "Community-Based",
      text: "WhatsApp groups, after-trip meetups, reunions. The trip never really ends.",
    },
  ];

  const handleOfferClick = () => {
    window.location.href = "/#join";
  };

  return (
    <section className="offers-page">
      <div className="offers-container">
        <p className="offers-tag">/ Our Offers</p>

        <h1 className="offers-title">
          Experiences made <br />
          for <span>students.</span>
        </h1>

        <p className="offers-subtitle">
          Trips, meetups, creator events, adventures, and unforgettable
          experiences designed specially for college students across India.
        </p>

        <div className="offers-grid">
          {offers.map((offer, index) => (
            <div
              className="offer-card"
              key={index}
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={handleOfferClick}
            >
              <div className="offer-icon">{offer.icon}</div>
              <h3>{offer.title}</h3>
              <p>{offer.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurOffers;