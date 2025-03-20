import * as dotenv from "dotenv";
dotenv.config(); // Load environment variables

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// Ensure MONGO_URI is defined before using it
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error("❌ MongoDB connection string is missing in environment variables");
  process.exit(1); // Exit if no connection string
}

// Connect to MongoDB with error handling
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ DB Connected Successfully"))
  .catch((error) => {
    console.error("❌ DB Connection Failed:", error);
    process.exit(1);
  });

const app = express();

app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON request bodies
app.use("/uploads", express.static("uploads")); // Serve static files from 'uploads' folder

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
