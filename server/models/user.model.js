import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const userSchema = new Schema({
    clerkId: { type: String, required: true, unique: true },
    name: { type: String },
    email: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    meetings: [{ type: ObjectId, ref: "Meeting" }],
    preferences: {
      theme: { type: String, default: "light" },
    },
    usage: {
      totalMeetings: { type: Number, default: 0 },
    },
    planType: {
      type: String,
      enum: ["free", "pro", "enterprise"],
      default: "free",
    },
  },
  { timestamps: true })

export const User = mongoose.model("User", userSchema);