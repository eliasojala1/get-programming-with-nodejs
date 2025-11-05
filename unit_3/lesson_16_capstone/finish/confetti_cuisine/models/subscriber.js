import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  zipCode: { type: Number, required: true },
  streetAddress: { type: String, required: true },
  vip: { type: Boolean, default: false }
});

export const Subscriber = mongoose.model("Subscriber", subscriberSchema);
