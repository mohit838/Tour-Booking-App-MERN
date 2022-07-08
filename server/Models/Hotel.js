import mongoose from "mongoose";
const { Schema } = mongoose;

const hotelSchema = new Schema({
  name: { type: Srting, required: true },
  type: { type: Srting, required: true },
  city: { type: Srting, required: true },
  address: { type: Srting, required: true },
  distance: { type: Srting, required: true },
  image: { type: [Srting] },
  desc: { type: Srting, required: true },
  rating: { type: Number, min: 0, max: 5 },
  room: { type: [Srting] },
  cheapPrice: { type: Number, required: true },
});
