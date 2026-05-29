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

// ====================== SERVE FRONTEND ======================
// Serve static files
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// ✅ FIXED: Catch-all route (MUST be last)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// ===========================================================

const PORT = process.env.PORT || 5000;

// MongoDB Connection
console.log("Trying MongoDB connection...");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    
    // Start server only after DB is connected
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
      console.log(`✅ Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection Error:", error.message);
    
    // Still start server even if DB fails
    app.listen(PORT, () => {
      console.log(`⚠️ Server running on port ${PORT} (without DB)`);
    });
  });

// Graceful error handling
process.on('uncaughtException', (err) => {
    console.error('❌ Uncaught Exception:', err);
    process.exit(1);
});

process.on('unhandledRejection', (err) => {
    console.error('❌ Unhandled Rejection:', err);
    process.exit(1);
});