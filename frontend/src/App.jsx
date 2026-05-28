import { useContext, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experiences from "./components/Experiences/Experiences";
import Stories from "./components/Stories/Stories";
import Community from "./components/Community/Community";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";

import { AuthContext } from "./context/AuthContext";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const { token } = useContext(AuthContext);

  const protectAction = (e) => {
    if (token) return;

    const clickedInsideLogin = e.target.closest(".login-popup");

    if (clickedInsideLogin) return;

    e.preventDefault();

    setShowLogin(true);
  };

  return (
    <>
      {showLogin && (
        <Login setShowLogin={setShowLogin} />
      )}

      <div onClickCapture={protectAction}>

        <Navbar setShowLogin={setShowLogin} />

        <main>
          <Hero />
          <About />
          <Experiences />
          <Stories />
          <Community />
          <CTA />
          <Footer />
        </main>

      </div>
    </>
  );
}

export default App;