const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SetSchema = new Schema({
  repCount: {
    type: Number,
    default: 0
  },
  weight: {
    type: Number
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
