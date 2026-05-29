const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

console.log("Server file started...");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ====================== API ROUTES ======================
app.get("/", (req, res) => {
  res.send("StudentDays Backend Running");
});

app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/offers", require("./routes/offerRoutes"));

// ====================== FRONTEND SERVING ======================
const frontendPath = path.join(__dirname, '../frontend/dist');
console.log("Serving frontend from:", frontendPath);

app.use(express.static(frontendPath));

// ✅ THIS MUST BE THE VERY LAST ROUTE
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// ===========================================================

const PORT = process.env.PORT || 5000;

console.log("Trying MongoDB connection...");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("❌ MongoDB Connection Error:", error.message);
    app.listen(PORT, () => {
      console.log(`⚠️ Server running on port ${PORT} (DB failed)`);
    });
  });