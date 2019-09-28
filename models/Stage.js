const mongoose = require("mongoose");
const { Schema } = mongoose;

const stageSchema = new Schema(
  {
    name: String,
    zone: String,
    location: String,
    imageStage: String,
    events: [{ type: Schema.Types.ObjectId, ref: "Event" }],
    section: { type: Schema.Types.ObjectId, ref: "Section" },
    type: String,
    description: String,
    land: {
      type: String,
      enum: [
        "AgroLand",
        "CreativeLand",
        "IronLand",
        "GamerLand",
        "BlockchainLand",
        "DevLand",
        "BusinessLand",
        "TalentWoman",
        "TalentHackathon",
        "TalentEducation",
        "TalentJobs",
        "CiudadDeN",
        "RecreaLand",
        "Super"
      ]
    },
    sponsors: [{ type: Schema.Types.ObjectId, ref: "Sponsor" }],
    author: { type: Schema.Types.ObjectId, ref: "User" }
  },

  {
    timestamps: true
  }
);

const Stage = mongoose.model("Stage", stageSchema);
module.exports = Stage;
