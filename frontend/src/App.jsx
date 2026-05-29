import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experiences from "./components/Experiences/Experiences";
import Stories from "./components/Stories/Stories";
import Community from "./components/Community/Community";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";

import { AuthContext } from "./context/AuthContext";

function App() {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const protectWebsite = (e) => {
    if (token) return;

    const clickedNavbar = e.target.closest(".navbar");
    if (clickedNavbar) return;

    e.preventDefault();
    navigate("/login");
  };

  return (
    <>
      <Navbar />

      <main onClickCapture={protectWebsite}>
        <Hero />
        <About />
        <Experiences />
        <Stories />
        <Community />
        <CTA />
        <Footer />
      </main>
    </>
  );
}

export default App;