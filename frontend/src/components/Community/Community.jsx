import "./Community.css";
import { useEffect, useRef, useState } from "react";

const Community = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      number: 12450,
      suffix: "+",
      label: "Students Connected",
      text: "Students from different colleges joining trips, conversations, and memories.",
    },
    {
      number: 86200,
      suffix: "+",
      label: "Memories Captured",
      text: "Photos, reels, stories, moments, and experiences created with students.",
    },
    {
      number: 140,
      suffix: "+",
      label: "Experiences Hosted",
      text: "Curated trips, meetups, city experiences, and student-only journeys.",
    },
  ];

  const features = [
    "College students",
    "Travel lovers",
    "Creators",
    "Freshers",
    "Engineering students",
    "Story collectors",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="community" className="community" ref={sectionRef}>
      <div className="community-overlay"></div>
      <div className="community-glow community-glow-one"></div>
      <div className="community-glow community-glow-two"></div>

      <div className="community-content">
        <div className="community-header">
          <p className="community-tag">/ The Community</p>

          <h2 className="section-title">
            Find your <span className="gradient-text">people.</span>
          </h2>

          <p className="community-subtitle">
            A student-first circle across India for those who want to explore,
            create memories, meet new people, and live college life beyond
            classrooms.
          </p>
        </div>

        <div className="community-stats">
          {stats.map((item, index) => (
            <article className="stat-box" key={index}>
              <span className="stat-index">0{index + 1}</span>

              <AnimatedNumber
                target={item.number}
                suffix={item.suffix}
                start={startCount}
              />

              <p>{item.label}</p>
              <small>{item.text}</small>
            </article>
          ))}
        </div>

        <div className="community-strip">
          {features.map((feature, index) => (
            <span key={index}>{feature}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedNumber = ({ target, suffix, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    const intervalTime = duration / steps;

    const counter = setInterval(() => {
      current += increment;

      if (current >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(current));
      }
    }, intervalTime);

    return () => clearInterval(counter);
  }, [start, target]);

  return (
    <h3>
      {count.toLocaleString()}
      {suffix}
    </h3>
  );
};

export default Community;