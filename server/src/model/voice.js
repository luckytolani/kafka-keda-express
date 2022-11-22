import mongoose from "mongoose";

const voiceSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      trim: true,
      required: true,
    },
    noise: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Voice = mongoose.model("Voice", voiceSchema);

export { Voice };
