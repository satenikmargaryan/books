const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PostSchema = new Schema({
  title: { type: String, required: true, max: 100 },
  content: {
    type: String,
    required: true,
    max: 500,
  },
});

module.exports = mongoose.model("Post", PostSchema);
