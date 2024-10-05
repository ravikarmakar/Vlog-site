const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VlogsiteSchema = new Schema(
  {
    title: {
      type: "String",
      required: "true",
    },
    author: {
      type: "String",
      required: "true",
    },
    body: {
      type: "String",
      required: "true",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vlogsite", VlogsiteSchema);
