const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const speakerSchema = new Schema(
  {
    name: {
      firstname: { type: String, required: true },
      lastname: { type: String, required: true }
    },
    resume: String,
    avatar: String,
    occupation: String,
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
      ],
      email: String,
      redes: {
        facebook: String,
        twitter: String,
        instragram: String
      },
      author: { type: Schema.Types.ObjectId, ref: "User" }
    }
  },
  {
    timestamps: true
  }
);

const Speaker = mongoose.model("Speaker", speakerSchema);
module.exports = Speaker;
