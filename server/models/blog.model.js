const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  file: {
    type: String,
    require: true,
  },
  email: {
    type: String,
  },
  username: {
    type: String,
  },
});

const blogModel = mongoose.model("blogs", blogSchema);
module.exports = blogModel;
