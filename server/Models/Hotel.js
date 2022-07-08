import mongoose from "mongoose";
const { Schema } = mongoose;

const hotelSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  distance: { type: String, required: true },
  image: { type: [String] },
  desc: { type: String, required: true },
  rating: { type: Number, min: 0, max: 5 },
  room: { type: [String] },
  cheapPrice: { type: Number, required: true },
  feature: { type: Boolean, default: false },
});

export default mongoose.model("Hotel", hotelSchema);
