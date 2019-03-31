const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SetSchema = new Schema({
  repcount: {
    type: Number,
    default: 0,
    required: true
  },
  weight: {
    type: String,
    default: "Bodyweight"
  }
});

const ExerciseSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30
  },
  sets: [SetSchema],
  dateCreated: {
    type: Date,
    default: Date.now()
  }
});

module.exports = ExerciseSchema;
