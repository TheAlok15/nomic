import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const meetingSchema = new Schema({
  title: { type: String, trim: true },
  description: { type: String, trim: true },
  user: { type:ObjectId, ref: "User", required: true},
  summary: {type: ObjectId,ref: "Summary"},

  // File metadata
  fileType: { type: String, enum: ["audio", "video"], required: true },
  fileUrl: { type: String }, // S3 URL or other storage URL
  fileKey: { type: String }, // my s3 key for deleting or accessing
  fileSize: { type: Number },
  status: {
    type: String,
    enum: ["uploading", "processing", "completed", "failed"],
    default: "uploading"
  },
},{ timestamps: true});

export const Meeting = mongoose.model("Meeting", meetingSchema);
