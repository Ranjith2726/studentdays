import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import Experiences from "./components/Experiences/Experiences";
import Stories from "./components/Stories/Stories";
import OurOffers from "./components/OurOffers/OurOffers";

import ScrollToTop from "./ScrollToTop";

import { AuthProvider } from "./context/AuthContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>

        <ScrollToTop />

        <Routes>
          <Route path="/" element={<App />} />

          <Route path="/experiences" element={<Experiences />} />

          <Route path="/stories" element={<Stories />} />

          <Route path="/offers" element={<OurOffers />} />
        </Routes>

      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);