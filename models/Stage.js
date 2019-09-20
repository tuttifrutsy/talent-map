const mongoose = require("mongoose");
const { Schema } = mongoose;

const stageSchema = new Schema(
  {
    name: String,
    location: String,
    imageStage: String,
    events: [{ type: Schema.Types.ObjectId, ref: "Event" }],
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

const Stage = mongoose.model("Stage", stageSchema);
module.exports = Stage;
