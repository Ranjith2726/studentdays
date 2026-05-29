const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    offers: [
      {
        icon: "🎬",
        title: "Cinematic Memory Films",
        text: "Every trip becomes a documentary-grade short film edited by real filmmakers.",
      },
      {
        icon: "🎓",
        title: "Student-Only Experiences",
        text: "No tourists. No families. Just your generation, your tempo and your music.",
      },
      {
        icon: "✨",
        title: "Meet New People",
        text: "Curated cohorts of students who become your people on purpose.",
      },
      {
        icon: "✺",
        title: "Safe & Budget Friendly",
        text: "Verified stays, female-friendly crews and student-budget pricing.",
      },
      {
        icon: "◐",
        title: "Community-Based",
        text: "WhatsApp groups, meetups and reunions. The trip never really ends.",
      },
    ],
  });
});

module.exports = router;