const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    title: String,
    description: String,
    scheduledFor: Date,
    location: { type: Schema.Types.ObjectId, ref: "Stage" },
    speaker: { type: Schema.Types.ObjectId, ref: "Speaker" },
    type: {
      type: String,
      enum: ["Competencia", "Lab", "Conferencia", "Exposición", "Fun", "Show"]
    },
    land: {
      type: String,
      enum: [
        "AgroLand",
        "CreativeLand",
        "IronLAnd",
        "GamerLand",
        "BlockchainLand",
        "DevLand",
        "BusinessLand",
        "TalentWoman"
      ]
    },
    author: { type: Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: true
  }
);

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
