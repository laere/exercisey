const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SetSchema = new Schema({
  repcount: {
    type: Number,
    default: 0
  },
  weight: {
    type: String,
    default: "Bodyweight"
  }
});

const ExerciseSchema = new Schema({
  name: {
    type: String
  },
  sets: [SetSchema],
  dateCreated: {
    type: Date,
    default: Date.now()
  }
});

module.exports = ExerciseSchema;
