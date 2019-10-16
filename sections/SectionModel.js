const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sectionSchema = new Schema(
  {
    title: String,
    description: String,
    logoUrl: String,
    imageBg:String,
    imageDetail:String,
    type: {
      type: String,
      enum: ["Land", "Talent"]
    },
    speakers: [{type: Schema.Types.ObjectId, ref: "Speaker" }],
    events: [{ type: Schema.Types.ObjectId, ref: "Event" }],
    stages: [{ type: Schema.Types.ObjectId, ref: "Stage" }],
    author: { type: Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: true
  }
);

const Section = mongoose.model("Section", sectionSchema);
module.exports = Section;
