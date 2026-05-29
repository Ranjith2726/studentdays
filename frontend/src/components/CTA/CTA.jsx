import "./CTA.css";
import { useState } from "react";
import axios from "axios";

const CTA = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      await axios.post("/api/contact", formData);

      setSubmitted(true);
    } catch (err) {
      console.log("Form submit error:", err);
      setError("Form not submitted. Please check backend server.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="success-page">
        <div className="success-card">
          <div className="success-icon">✓</div>

          <h2>Form Submitted Successfully</h2>

          <p>
            Thank you for joining StudentDays.co. Our team will contact you soon
            with the next steps.
          </p>

          <button
            className="primary-btn"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
              });
            }}
          >
            Back to Website →
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="cta" id="join">
      <div className="cta-content">
        <p className="cta-small-text">Join StudentDays.co</p>

        <h2>
          Start your <span className="gradient-text">journey.</span>
        </h2>

        <p>
          Connect with students, experiences, memories, and unforgettable
          moments.
        </p>

        <form className="cta-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Tell us about yourself..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit" className="primary-btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit →"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTA;