import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  coverImage: { type: String },
  available: { type: Boolean, default: true }
});

export default mongoose.model("Book", BookSchema);
