import mongoose from "mongoose";

const RentalSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  book: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
  rentedAt: { type: Date, default: Date.now },
  returned: { type: Boolean, default: false }
});

export default mongoose.model("Rental", RentalSchema);
