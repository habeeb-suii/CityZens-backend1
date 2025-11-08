const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    location: String,
    image: String,
    status: { type: String, default: "Reported" }, // Reported, In Progress, Resolved
  },
  { timestamps: true }
);

module.exports = mongoose.model("Issue", issueSchema);
