const mongoose = require("mongoose");
const projectSchema = mongoose.Schema({
  projectType: {
    type: String,
    required: true,
  },
  projectTitle: {
    type: String,
  },
  projectDescription: {
    type: String,
  },
  imageLink: {
    type: String,
  },
  videoLink: {
    type: String,
  },
  itemsRequired: {
    type: String,
  },
  steps: {
    type: String,
  },
  cost: {
    type: Number,
  },
});

module.exports = mongoose.model("Projects", projectSchema);
